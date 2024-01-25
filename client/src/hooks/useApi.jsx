import { useState } from "react";
import API from "../services/api";

const useApi =(urlObject)=>{
    
    const [response, setResponse] = useState(null);
    const [error, setError] = useState("");
    const[isLoding , setISLoading] = useState(false);

    const call = async(payload , type = '')=>{
        setResponse(null);
        setISLoading(true)
        setError("");
        try{
           let res = await API(urlObject,payload,type);
           setResponse(res.data);
        }catch(error){
           setError(error.message);
        }finally{
           setISLoading(false);
        }
    }
    return{call,response,error,isLoding};
}

export default useApi;