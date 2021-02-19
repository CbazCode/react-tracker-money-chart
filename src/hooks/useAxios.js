import axios from "axios";
import { useEffect, useRef, useState } from "react";


export const useAxios = (url) => {
    const [state, setState] = useState({data: null, loading:true, error: null});
  
    const isMount = useRef(true);
    
    useEffect(() => {
        return () => {
          isMount.current= false;    
        }
    }, [])
    
    useEffect(() => {
  
          setState({
              data: null, loading:true, error: null
          })

          axios.get(url)
            .then( res => {
                if(isMount.current){
                    setState(
                        {
                            loading: false,
                            error: null,
                            data: res.data
                        }
                    )
                }
            })
            .catch( ()=>{
                setState({
                    data:null,
                    loading: false,
                    error: 'No se pudo cargar la info'
                })
    
            })
    },[url])

      return state;
  
  }