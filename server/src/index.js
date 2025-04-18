import { connectDB } from "./db/index.js";
import dotenv from "dotenv";
import { app } from "./app.js";

dotenv.config({
  path: "./.env",
});

connectDB()
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log(`Server is running at port localhost:${process.env.PORT}`);
    });
  })
  .catch((error) => {
    console.log(`mongoDB connection failed !!!, ${error}`);
  });
