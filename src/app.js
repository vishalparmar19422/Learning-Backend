import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();
app.use(
  cors({
    orgin: process.env.CORS_ORIGIN,
  })
);

app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({limit:"16kb"}));
app.use(express.static("public"));
app.use(cookieParser())


import router from "./routes/user.routes.js";

app.use("/api/v1/users",router)
app.use("/first",router)


export default app;
