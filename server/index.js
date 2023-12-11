const ImageKit = require("imagekit");
const express = require("express");
const app = express();
app.use(express.json());
require("dotenv").config();
const imageKit = new ImageKit({
    publicKey: process.env.PUBLIC_API_KEY,
    privateKey: process.env.PRIVATE_API_KEY,
    urlEndpoint: process.env.API_ENDPOINT
}) 
app.get("/auth", (req, res) => {
    console.log("Hi");
    
    
    const authParas = imageKit.getAuthenticationParameters();
    res.json(authParas);
})

app.listen(5000, () => {
    console.log("Server radi");
})