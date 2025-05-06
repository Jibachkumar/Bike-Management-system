import React, { useState } from "react";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import Input from "../ui/Input";
import { Spin } from "antd";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { login as authLogin } from "../store/authSlice.js";
import { useDispatch } from "react-redux";

function Login() {
  const { register, handleSubmit } = useForm();
  const [loader, setLoader] = useState(false);
  // const [error, setError] = useState("");
  // const [success, setSuccess] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const login = async (data) => {
    setLoader(true);

    const { email, password } = data;
    if (!email || !password) throw new Error("empty email or password !");

    try {
      const response = await fetch("/api/v1/users/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });

      if (!response.ok) {
        throw new Error(`Error ${response.status} ${response.statusText}!`);
      }
      console.log(response);

      const userData = await response.json();

      console.log(userData.message);

      if (userData) {
        dispatch(authLogin(userData));
        navigate(location.state?.from || "/", { replace: true });
        // location.state?.from, { replace: true }
        console.log(userData.message);
      }
    } catch (error) {
      console.log(error.message);
    } finally {
      setLoader(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(login)}
      className="w-full min-h-screen bg-slate-100 mt-12"
    >
      <div className="flex justify-center">
        <div className="mt-20 flex self-stretch flex-col bg-white rounded-md shadow-sm border px-10 py-5">
          <div className=" text-center font-serif">
            <h2 className="  font-semibold xl:text-xl text-black">
              Sign in to your account
            </h2>
          </div>
          <Input
            label="Email address"
            type="email"
            className="border w-[20rem] border-black/35"
            {...register("email", { required: true })}
          />
          <div className=" mt-3">
            <Input
              label="Password"
              type="text"
              className="border border-black/35 w-[20rem]"
              {...register("password", { required: true })}
            />
          </div>
          <p className="text-right font-sans text-sm font-medium text-indigo-900 my-4">
            Forget password?
          </p>

          <button
            type="submit"
            className="w-[20rem] py-1 bg-indigo-600 rounded-md shadow-md font-serif font-medium text-white/95"
          >
            Sign in
          </button>

          <div className=" text-center font-semibold text-black">
            <p className="bg-gray-200 rounded-lg p-3 text-black font-medium text-roman cursor-pointer underline">
              Don&apos;t have an Account?{" "}
              <Link to={"/signup"}>
                <span className="font-semibold">Sign up</span>
              </Link>
            </p>
          </div>
          {loader && (
            <div className="absolute -top-24 left-0 w-full h-full flex items-center justify-center z-50">
              <Spin />
            </div>
          )}
        </div>
      </div>
    </form>
  );
}

export default Login;
