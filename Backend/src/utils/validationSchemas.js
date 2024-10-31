import Joi from "joi";
const defaultSchema = Joi.defaults((schema) => {
    switch (schema.type) {
        case 'string':
            return schema.trim();
        default:
            return schema;
    }
})
const envSchema = defaultSchema.object({
    MONGODB_URI: Joi.string(),
    JWT_SECRET: Joi.string(),
    FRONTEND_URL: Joi.string()
}).options({abortEarly:false,presence:"required"}).required();

const signupSchema = defaultSchema.object({
    fullName:Joi.string().min(3).max(20).label("Full Name"),
    username:Joi.string().min(3).max(20).label("Username"),
    password:Joi.string().label("Password"),
    confirmPassword:Joi.string().valid(Joi.ref("password")).label("Confirm Password")
                    .messages(
                        {
                            "any.only":"Confirm Password must be same as password"
                        }
                    ),
    gender:Joi.string().valid("male","female").label("Gender")
}).options({abortEarly:false,presence:"required"}).required();

const loginSchema = defaultSchema.object({
    username: Joi.string(),
    password: Joi.string()
}).options({abortEarly:false ,presence:"required"}).required();


export {envSchema,signupSchema,loginSchema};