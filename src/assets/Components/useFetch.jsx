import { useEffect } from "react";
import { useState } from "react";

const useFetch = (url) => {

    const [ data,setData ] = useState(null);
    const [ isPending,setIsPending ] = useState(true);
    const [ error,setError ] = useState(null);

    useEffect(()=>{
        setTimeout(()=>{
         fetch(url)
         .then((response)=>{
            if(!response.ok){
                  throw Error('Could not fetch from that endpoint...')
            }else{
               return response.json()
            }
         }).then((data)=>{
            setError(null)
              setData(data)
              setIsPending(false);
         }).catch((err)=>{
            setError(err.message)
            setIsPending(false)
         })
        },4000)
      },[url]);

    return { data,isPending,error }
}
 
export default useFetch;