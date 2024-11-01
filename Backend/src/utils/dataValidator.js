export default function validateData(schema,data,res){
    const {value,error}=schema.validate(data,{errors: {wrap: {label: false}}});
    if(error){
        //send the error as response with status code 409
        console.log(error);
        let validationErrors=[];
        error.details.map((e)=>{
            validationErrors.push(e.message);
        })
        res.status(409).json({error: validationErrors});
        return null;
    }
    return value;
}