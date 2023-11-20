import express from "express"; 
import axios from "axios"; 
import cors from "cors";
import 'dotenv/config'

const app = express(); 
const port = 4000; 
const key = process.env.key;

app.use(cors()); 

app.get("/api/data", async (req, res) => {
    try {
        const response = await axios.get(`http://ip-api.com/json`);

        const latitude = response.data.lat; 
        const longitude = response.data.lon;

        const result = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${key}`); 

        res.json(result.data);
    } catch (error) {
        console.log(error.data); 
    }
});


app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});