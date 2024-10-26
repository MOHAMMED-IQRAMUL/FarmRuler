
const asyncHandler = async (axiosPromise) => {
    try {
        const response = await axiosPromise;
       return response.data;
    }
    catch (error) {
        // console.log(error.response.data.error); 
        if(error.status=="400"){
            console.error("Bad Request",error.message);
            //TODO: Use react-hot-toast to display errors.
        }       
        if(error.status=='401'){
            console.error("Unauthorized request: ",error.message);
        }
        if(error.status=='404'){
            console.error("404 response: ",error.message);
        }
        else if(error.status=='500'){
            console.error("Internal Server Error: ",error.message);
            //TODO: Use react-hot-toast to display errors.
        }
        return null;
    }
}
export default asyncHandler;