import dotenv from "dotenv";
import connectDB from "./db/connect.js";
import app from "./app.js";

dotenv.config({
  path: "./env",
});

connectDB()
  .then(() => {
    app.listen(process.env.PORT || 3000, () => {
      console.log(`Server is runnignat ${process.env.PORT}`);
    });
    app.get("/",(req,res)=>{
        res.send("<h1>Hello</h1>")
    })
  })
  .catch((err) => {
    console.log("error after connecting to db  = ", err);
  });
