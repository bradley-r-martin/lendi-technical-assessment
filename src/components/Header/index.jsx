import Logo from './logo.svg'
import Background from './bg.jpg'

import React from 'react';

const Header = () => {
    return (
        <div className="bg-gray-500 relative overflow-hidden h-2/5 md:h-3/6 rounded-b-xl md:rounded-xl flex flex-col items-center justify-center bg-center bg-cover" style={{ backgroundImage: `url(${Background})`}}>
            <div className="absolute inset-0 bg-black bg-opacity-70"></div>
            <img src={Logo} alt="Lendi Logo" className="my-10 relative" width="200px" />
            <div className="text-white text-center text-2xl md:text-4xl tracking-neat font-extralight relative">Team lunch suggestions</div>
        </div>

    )
}

export default Header;


