const express = require("express")
const mongoose = require("mongoose")
const dotenv = require("dotenv")
dotenv.config()

const Router = require("./router/index")

const app = express();
app.use(express.json());

app.use("/",Router)

const port = 3000;

const connection = async()=>{

    try {
   await mongoose.connect(process.env.DB_URL,{
    dbname:process.env.DB_NAME
   })
   console.log("connection done")
}
catch(error){
    console.log("error",error)
    process.exit(1)

}

    }
connection()



app.listen(port,()=>{console.log(`server is running on port${port}`);})