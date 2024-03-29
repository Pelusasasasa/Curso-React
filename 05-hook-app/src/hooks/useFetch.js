import { useEffect, useState } from "react";

export const useFetch = (url) => {
    
    const [state, setState] = useState({
        data:null,
        isLoading:true,
        hasError:null
    })

    const getFetch = async() => {

        setState({
            ...state,
            isLoading:true
        })

        const res = await fetch(url);
        const data =   await res.json();
        console.log(data)

        setState({
            ...state,
            isLoading:false, 
            data
        })
        
    }

    useEffect(() => {
        getFetch();
    }, [url]);

    return {
        data: state.data,
        isLoading: state.isLoading,
        hasError: state.hasError
    };
}
