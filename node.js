import express from "express";
const app = express()

app.get("/", (req, res) => {
    res.send("Hello World To Devops , Taking Devops Taste , Deployed successfully for first time in life, updated by ci cd pipeline i am too exicted")
})

app.listen(process.env.PORT || 3000, () => {
    console.log(`Server is running on port ${process.env.PORT || 3000}`)
})