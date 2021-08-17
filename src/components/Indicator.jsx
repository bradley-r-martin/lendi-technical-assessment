import React from 'react';

const Indicator = ({ active = false }) => {

    return (
        <span className={`${active ? '' : 'hidden'} absolute inset-0 flex items-center bg-black bg-opacity-50 justify-center cursor-wait`}>
            <span style={{ borderTopColor: 'transparent' }} className="block absolute border-solid animate-spin rounded-full border-2 h-5 w-5 m-2 border-white opacity-90"></span>
        </span>
    )
}

export default Indicator;


