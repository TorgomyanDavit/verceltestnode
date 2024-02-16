import express from "express";
import session from "express-session";
import cors from "cors";
import cookieParser from "cookie-parser";

import dotenv from 'dotenv';
dotenv.config();

export const app = express();
app.use(cookieParser());
app.use(session({
  cookie: { 
    // expires : getTokenExparationTime(),
    secure: false, // It means that the cookie will only be sent over HTTPS
    httpOnly: false, // inaccessible to JavaScript on the client side.
    sameSite:"strict" // inaccessible to JavaScript on the client side.
  },
  secret: "asdasdas654d5sd13asdasdas1d32as1d31a3",// This is the secret used to sign the session cookie.
  resave: false, // when false will only be saved back to the session store if changes were made during the request 
  saveUninitialized: true, // Forces a session that is "uninitialized" to be saved to the store
  // name: 'connect.sid', // Customize the cookie name
}));

app.use(cors({
  origin: [
    'https://www.holtrinity.com',
    "https://verselnew.vercel.app"
  ],
  methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'],
  credentials:true,
  optionsSuccessStatus: 200,          
}));

app.use(express.json({ limit: '1mb' }));
app.use(express.urlencoded({ extended: true, limit: '1mb' }));

app.get('/', async (req, res) => {
  res.send('Hello,Test!');
});

app.get('/getToke', async (req, res) => {
  res.cookie('_csrf', "newCsrfToken", {
    secure: true, // It means that the cookie will only be sent over HTTPS
    httpOnly: false, // inaccessible to JavaScript on the client side.
    sameSite: 'none', // send cookie when open  browser's in address bar.
  });

  // Send the response to the client
  res.send({ name: 'Hello, TypeScript Express App!' });
});


app.listen(process.env.FLOWERS_BACKEND_PORT || 8000, () => {
  console.log(`PORT work -> ${process.env.FLOWERS_BACKEND_PORT}`);
});