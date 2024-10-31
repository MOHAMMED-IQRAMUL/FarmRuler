import { config } from "dotenv";
import jsonwebtoken from "jsonwebtoken";
import {cleanedEnv} from "../utils/cleanedEnv.js";

config();

const JWT=jsonwebtoken;
const JWT_SECRET=cleanedEnv.JWT_SECRET;

const authenticateUser=(req,res,next)=>{
    let authtoken=req.cookies.jwt;
    if(!authtoken){
        return res.status(401).send({error:"Please use a valid auth token"})
    }
    try {
        const payload=JWT.verify(authtoken,JWT_SECRET);
        req.userId=payload.userId;
    } catch (error) {
        return res.status(401).send({error:"Please use a valid auth token"});
    }
    next();
}
export default authenticateUser;