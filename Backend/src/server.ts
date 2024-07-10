import express from "express";
import cors from "cors";
import { user_data } from "./data";

const app = express();
app.use(express.json());
app.use(cors({
    credentials: true,
    origin: ["http://localhost:4200"]
}));

const port = 7000;
app.listen(port, () => {
    console.log(`Website served on http://localhost:${port}`);
})

app.get("/api/UserData", (req, res) => {
    res.send(user_data); //get All User Creds
})

app.post('/api/UserData', (req, res) => {
    console.log('Received POST request with data:', req.body);//posting the User Creds
    res.json({ message: 'Data received successfully!' });
});