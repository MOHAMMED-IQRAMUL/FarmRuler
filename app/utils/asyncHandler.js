import toast from "react-hot-toast";
const asyncHandler = async (axiosPromise,{showToast=true,toastMsg="Loading.."}) => {
    let toastId=null;
    if(showToast){
        toastId=toast.loading(toastMsg);
    }
    try {
        const response = await axiosPromise;
        if(toastId){
            toast.success(response.data.message,{id: toastId});
        }
       return response.data;
    }
    catch (error) {
        if(error.status=="400"){
            console.error("Bad Request",error.message);
            if(toastId){
                toast.error(error.response.data.error,{id: toastId});
            }
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