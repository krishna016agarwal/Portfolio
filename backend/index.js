const express = require("express");
const app = express();
const port = 3000;
const Portfolio = require("./models/portfolio.models");
const cors =require("cors")
app.get("/", (req, res) => {
  res.send("Hello World!");
});  
const corsOptions={
  origin:"http://127.0.0.1:5500",
  methods:"GET, POST ,PUT , DELETE",
  credentials:true,
}
app.use(cors(corsOptions))

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
app.use(express.json())
//-------------------------------------------------------

const mongoose = require("mongoose");

mongoose   
  .connect( process.env.MONGODB
  )
  .then((e) => console.log("MongoDB Connected"));



  app.post("/contact", async (req, res) => {
   
    try {
      console.log(req);
    
      const { name, email, message } = req.body;
      await Portfolio.create({
        name,
        email,
        message,
      });
      res.json({message:"send successfully"})
    } catch (error) {
      res.json({message:" send unsuccessfully"})
    }
  });
