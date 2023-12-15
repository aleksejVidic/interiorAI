require("dotenv").config()
const express = require("express");
const app = express();
const ImageKit = require("imagekit");
app.use(express.json({ limit: "50mb"}));
app.use(express.urlencoded({ extended: false, limit: "50mb" }));

const imageKit = new ImageKit({
    publicKey: process.env.PUBLIC_API_KEY,
    privateKey: process.env.PRIVATE_API_KEY,
    urlEndpoint: process.env.API_ENDPOINT
})

async function genRoom() {
    try {

    } catch(err) {
        console.log(err);
    }
}

app.post("/auth", async (req, res) => {
    
    try {
        console.log("Ruta");
        console.log(req.body);
        const { photo, room, style } = req.body;
        console.log(photo);
        const result = await imageKit.upload({
            file: photo,
            fileName: "image-1.jpg",
            
        });
        console.log(result);
        const raw = JSON.stringify({
            key: process.env.STABLE_DIFFUSION_API_KEY,
            init_image: result.url,
            prompt: `${room}, ${style} style`,
            steps : 50,
            guidance_scale : 7
        })
        const roomInterior = await fetch("https://stablediffusionapi.com/api/v5/interior", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: raw
        });
        const jsonRes = await roomInterior.json();
        console.log(jsonRes);
        if(jsonRes.status === "processing") {
            console.log("Another fetch")
            const a = await fetch("https://stablediffusionapi.com/api/v4/dreambooth/fetch", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    key: process.env.STABLE_DIFFUSION_API_KEY,
                    request_id: jsonRes.id
                })
            })
            const jsonA = await a.json();
            console.log(jsonA);
        }
        res.json({
            status: "good"
        });
    } catch (error) {
        console.log(error);
    }
})


app.listen(process.env.PORT, () => {
    console.log("Server radi");
})