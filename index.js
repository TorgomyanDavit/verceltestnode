import express from "express";
import session from "express-session";

export const app = express();
app.use(express.json());


router.get("/",async (req, res) => {
  
    res.send("hello world");
});

app.listen(process.env.PORT || 3003, () => {
    console.log(`PORT work -> ${process.env.PORT || 3003}`);
});