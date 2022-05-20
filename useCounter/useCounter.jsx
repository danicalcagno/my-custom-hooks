import { useState } from "react"

export const useCounter = ( initialState = 100 ) => {
    
    const [count, setCount] = useState( initialState );
    
    const increment = ()=>{
        setCount( count + 1 );
    }
    
    const decrement = ( factor = 1 )=>{
        setCount( count - 1 );
    }    

    const reset = ()=>{
        setCount( initialState );
    }

    return{
        count,
        increment,
        decrement,
        reset
    }

}
