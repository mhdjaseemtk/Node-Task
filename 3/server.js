import express from "express";
import dotenv from "dotenv";
import userRoutes from "./routes/userRoutes.js";
import { logger } from "./logger.js";
import {main,getDB} from  './mongodb.js'

dotenv.config();

const app = express();
(async function (){

 await main()
const db = await getDB()
})()


app.use(express.json());



app.use("/users", userRoutes);

app.get("/", (req, res) => {
  res.status(201).send("hello");
});

app.post('/profile',logger,(req,res)=>{

  res.json({message:"loggined"})

})

const PORT = process.env.PORT || 3000;
app.listen(PORT);
