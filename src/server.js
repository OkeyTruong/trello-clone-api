import express from "express";
import { env } from "./config/environment";
import { connectDB } from "./config/mongodb";
import { apiV1 } from "./routes/v1";

// Connect to a MongoDB Database
connectDB()
  .then(() => console.log("Connected to DB"))
  .then(() => bootServer())
  .catch((error) => {
    console.log(error);
    process.exit(1);
  });

const bootServer = async () => {
  const app = express();

  // Enable req.body data
  app.use(express.json());

  // Use APIs v1
  app.use("/v1", apiV1);

  app.listen(env.PORT_NAME, env.HOST_NAME, () => {
    console.log(`Hello dev, I'm running at ${env.HOST_NAME}:${env.PORT_NAME}`);
  });
};
