import swaggerAuto from "swagger-autogen";
const doc = {
    info:{title:"User",description:"User CRUD API's"},
    host:'http:',
    schema:["http"]
};

const swaggerOutput = "./swaggerOutput.json"
const swaggerEndPoints = ["./index.js"]
swaggerAuto(swaggerOutput,swaggerEndPoints);