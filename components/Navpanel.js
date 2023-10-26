// components/navpanel.js

import React from 'react';

export default function Navpanel() {
    return (
        <div className='bg-gray-600' style={{ width: "80vw"}}>
             <div id="navpanel" className="navpanel ">
                    <div className="navpanel-inner flex flex-row justify-between bg-gray-400 opacity-95 h-screen w-5/6">
                        <h1 className='text-white'>Home</h1>
                        <h1 className='text-white'>About</h1>
                        <h1 className='text-white'>Works</h1>
                    </div>
            </div>
        </div>
    )
}