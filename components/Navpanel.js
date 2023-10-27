// components/navpanel.js

import React from 'react';

export default function Navpanel() {
    return (
        <div className='bg-gray-600 h-screen' style={{ width: "80vw"}}>
             <div id="navpanel" className="navpanel">
                <div className="navpanel-inner bg-gray-400 opacity-50 h-screen w-5/6 ">
                    <div className=''>
                        <p className='text-3xl text-white italic'>Home</p>
                        <p className='text-3xl text-white italic'>About</p>
                        <p className='text-3xl text-white italic'>Works</p>
                    </div>
                </div>
            </div>
        </div>
)
}