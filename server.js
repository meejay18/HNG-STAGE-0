const express = require("express")
const app = express()
app.use(express.json())
const env = require("dotenv")
env.config()
const port = 4000
const axios = require("axios")
const morgan = require("morgan")
const rateLimit = require("express-rate-limit")


const catUrl = "https://catfact.ninja/fact"

app.use(morgan("dev"))
app.use(rateLimit({
  windowMs : 60 * 1000, 
  max : 100
}))


const getCatFacts = async() => {
  try {
    const response = await axios.get(catUrl, {timeout: process.env.TIMEOUT })
    // console.log(response);
    return response.data.fact
    
  } catch (error) {
    return error.message || "In contrast to dogs, cats have not undergone major changes during their domestication process."
  }
}


app.get("/me", async (req, res) => {
  try {

    const fact = await getCatFacts()

    const data = res.json({
      status : "success",
      user : {
        email : process.env.USER_EMAIL,
        name : process.env.USER_NAME,
        stack : process.env.USER_STACK
      },
      timestamp : new Date().toISOString(),
      fact
    })

   return data
     
} catch (error) {
    return res.status(500).json({
      message : "Error",
      error: error.message
    })
  }
})

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
  
})