import { useEffect, useState, useRef } from "react"


export const UseFetch = ( url ) => {

    const refCompMontado = useRef(true);

    const [state, setState] = useState({ data: null, loading: true, error: null});

    useEffect(()=>{
        //Mantengo la referencia al componente y cuando no esta montado, le pongo FALSE
        return()=>{
            refCompMontado.current = false;
        }
    }, [])

    useEffect( ()=> {

        setState({ data: null, loading: true, error: null});

        fetch( url )
            .then( resp => resp.json())
            .then(data=>{
                //solo hago el setState cuando el componente esta montado, eso me lo da el useRef 
                //con el refCompMontado
                if(refCompMontado.current){                
                    setState({
                        data: data,
                        loading: false,
                        error: null     
                    })
                }
            })
            .catch(()=>{
                setState({
                    data: null,
                    loading: false,
                    error: 'No se pudo cargar'
                })
            })

    }, [url])
    
    return state;
}
