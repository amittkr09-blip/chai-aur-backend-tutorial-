import dns from "node:dns";
dns.setServers(["8.8.8.8", "8.8.4.4"]);
import app from "./app.js";
import dotenv from "dotenv";
dotenv.config({
  path: "./.env",
});
import mongoose from "mongoose";
import { DB_NAME } from "./constants.js";
import connectDB from "./db/index.js";
import { log } from "node:console";

connectDB()
  .then(() => {
    app.listen(process.env.PORT || 8000, () => {
      console.log(`Server is running on PORT : ${process.env.PORT}`);
    });
  })

  .catch((err) => {
    console.log("MONGODB connectin is failed !!!", err);
  });


  

/*
import mongoose from "mongoose";
import { DB_NAME } from "./constants.js";

import express from "express";

const app = express();
(async () => {
  try {
    await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
    app.on("error", (err) => {
      console.log("ERR: ", err);
      throw err;
    });

    app.listen(process.env.PORT, () => {
      console.log(`Server is running on port ${process.env.PORT}`);
    });
  } catch (err) {
    console.log(err);
  }
})();
*/
