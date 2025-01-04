import express from "express";
var app = express()

import dotenv from "dotenv";
dotenv.config();

import bodyParser, { urlencoded } from "body-parser";
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

import cors from "cors";
import { getLocalIp, getLocalMessage } from "./helpers/helper";
app.use(cors());

declare global {
var __baseuri : string;
var locals : Record<string,string>
}
global.__baseuri = __dirname;
global.locals = getLocalMessage();

app.get("/",(req,res)=>{
    res.json({message:"WELCOME"});
});
let port = process.env.PORT || 3000;

app.listen(port,()=>{
    console.log(`Server is running on ${getLocalIp()}`);
});