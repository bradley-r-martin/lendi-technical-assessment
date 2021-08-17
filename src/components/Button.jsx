
import React from 'react';
import Indicator from './Indicator'

const Button = ({ label = 'undefined', loading = false, type = 'button', onClick=()=>{} }) => {

    return (
        <button 
            type={type} 
            disabled={loading} 
            onClick={onClick}
            className={`disabled:pointer-events-none bg-gray-800 hover:bg-gray-700 focus:ring-gray-200 text-white shadow py-5 px-8 flex justify-center items-center flex-grow uppercase focus:outline-none text-xs rounded focus:ring-4 relative overflow-hidden`}>
            {label}
            <Indicator active={loading} />
        </button>
    )
}

export default Button;


