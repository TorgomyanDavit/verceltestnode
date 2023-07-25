import express from "express";
import session from "express-session";

export const app = express();
app.use(express.json());


app.get("/",async (req, res) => {
    res.send("hello world");
});

app.get("/home",async (req, res) => {
    res.send("hello world");
});

app.listen(5000, () => {
    console.log(`PORT work -> 5000`);
});