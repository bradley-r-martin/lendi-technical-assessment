
import React, { useState, createContext } from 'react';

export const FormContext = createContext({});

const Form = ({ children, debug = false, beforeSubmit = ()=>{return true}, onSubmit = (data) => console.log('undefined onSubmit', data) }) => {
    const store = useState({});
    return (
        <FormContext.Provider value={store}>
            <form action="/" method="POST" onSubmit={(e)=>{ e.preventDefault(); if(beforeSubmit(store[0])){ onSubmit(store[0]); } }} className="flex flex-col">
                {children}
                {debug ? <pre className="p-10 m-5 bg-gray-300 rounded">{JSON.stringify(store[0],null, 2)}</pre> : null}
            </form>
        </FormContext.Provider>
    )
}

export default Form;


