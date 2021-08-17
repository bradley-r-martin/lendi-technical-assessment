import React,{ useContext } from 'react';

import { FormContext } from './Form'

const Input = ({ name = 'undefined', disabled = false }) => {
    const [ data, update ] = useContext(FormContext);
    return (
      <label htmlFor={name} class="flex">
        <span className="sr-only">{name}</span>
        <input type="text" required disabled={disabled} className="disabled:pointer-events-none disabled:opacity-50 flex text-sm flex-grow focus:ring-2 focus:shadow-inner shadow-sm ring-gray-300 focus:border-gray-400 bg-white text-gray-500 border border-gray-300 rounded px-5 py-4 focus:outline-none" name={name} id={name} onChange={({ target }) => update({...data, [target.name]: target.value })} />
      </label>
    )
}

export default Input;


