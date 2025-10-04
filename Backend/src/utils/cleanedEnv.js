import { envSchema } from "./validationSchemas.js";
import "dotenv/config";
const env = {
    MONGODB_URI:process.env.MONGODB_URI,
    JWT_SECRET:process.env.JWT_SECRET,
    FRONTEND_URL:process.env.FRONTEND_URL,
}
const {value,error}=envSchema.validate(env,{abortEarly:false});
if(error){
    console.error(error.message);
    process.exit(1);
}
export {value as cleanedEnv};