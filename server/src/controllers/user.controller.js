import { User } from "../models/user.model.js";
import { ApiError } from "../utlis/ApiError.js";
import { ApiResponse } from "../utlis/ApiResponse.js";
import { asyncHandler } from "../utlis/asyncHandler.js";
import { uploadOnCloudinary } from "../utlis/cloudinary.js";

const generateAccessAndRefereshTokens = async (userId) => {
  try {
    const user = await User.findById(userId);
    const accessToken = user.generateAccessToken();
    const refreshToken = user.generateRefreshToken();

    user.refreshToken = refreshToken;
    await user.save({ validateBeforeSave: false });

    return { accessToken, refreshToken };
  } catch (error) {
    throw new ApiError(
      500,
      "Something went wrong while generating referesh and access token"
    );
  }
};

const registerUser = asyncHandler(async (req, res) => {
  const { userName, phoneNumber, email, password } = req.body;

  //  validation check
  if (
    [userName, email, password].some(
      (field) => typeof field === "string" && field?.trim() === ""
    )
  ) {
    throw new ApiError(400, "All fields are required");
  }

  // Check if user already exists
  const existedUser = await User.findOne({
    $or: [{ email }],
  });

  if (existedUser)
    throw new ApiError(
      409,
      "User with email already exists please fullfill unique email"
    );

  //   check for file
  if (!req.files && !req.files.coverImage && req.files.coverImage.length === 0)
    throw new ApiError(400, "Image file is missing");
  console.log("file : ", req.files?.coverImage);

  const coverImageLocalPath = req.files?.coverImage[0]?.path;

  const coverImage = await uploadOnCloudinary(coverImageLocalPath);

  // create user object
  const user = await User.create({
    userName,
    phoneNumber,
    email,
    coverImage: coverImage?.url || "",
    password,
  });

  // Check user is creation
  const createdUser = await User.findById(user._id).select(
    " -password -refreshToken"
  );

  if (!createdUser)
    throw new ApiError(500, "Something Went Wrong while registering the user");

  // return response
  return res
    .status(201)
    .json(new ApiResponse(200, createdUser, "User registered sucessfully"));
});

const loginUser = asyncHandler(
  asyncHandler(async (req, res) => {
    // get data
    const { email, password } = req.body;

    if (!email && ![password]) {
      throw new ApiError(400, "email or password is required");
    }

    // find the user
    const user = await User.findOne({ email });
    if (!user) throw new ApiError(404, "User does not exit");

    // password check
    const isPasswordValid = await user.isPasswordCorrect(password);
    if (!isPasswordValid) throw new ApiError(401, "Invalid user credentials");

    // access and refresh token
    const { accessToken, refreshToken } = await generateAccessAndRefereshTokens(
      user._id
    );

    const loggedInUser = await User.findById(user._id).select(
      "-password -refreshToken"
    );

    const options = {
      httpOnly: true,
      secure: true,
    };

    //send cookie
    return res.status(201).json(
      new ApiResponse(
        200,
        {
          user: loggedInUser,
          accessToken,
          refreshToken,
        },
        "User logged In Successfully"
      )
    );
  })
);

export { registerUser };
