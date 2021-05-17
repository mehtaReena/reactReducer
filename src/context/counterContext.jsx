import {createContext,useReducer}from 'react';

let CounterContext = createContext({
    counterValue:0,
    setCounter:()=>{}
})

export default CounterContext;

function reducer (state,action){
    switch (action){
        case 'increament' :
            return {counterValue : state.counterValue+1 };
        case 'decreament' :
                return {counterValue : state.counterValue -1 };
        case 'reset' :
                return {counterValue : 0 };
        default:
            return {}
    }
}

export function CounterContextProvider(props){
    let initalState={counterValue:0}
    let [counterState, dispatch]= useReducer(reducer,initalState);
    return(
        <CounterContext.Provider value={{
            counterState, dispatch
        }}>

       {props.children}
        </CounterContext.Provider>
    )



}

