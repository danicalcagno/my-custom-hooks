import { useState } from "react";

//Este hook devuelve la descripcion del input asociado y lo resetea al valor ""

export const useForm = ( initialstate ={}) => {

    const [values, setValues] = useState(initialstate);

    const reset = ()=>{
        setValues( initialstate );
    }

    const handleinputchange=({target})=>{

        setValues({
            ...values,
            [target.name]: target.value
        });
    }    
    
    return [values, handleinputchange, reset];
}
