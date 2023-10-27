// components/navpanel.js

import React from 'react';
import Link from 'next/link';

export default function Navpanel() {
    return (
        <div className='bg-gray-600 h-screen' style={{ width: "80vw"}}>
             <div id="navpanel" className="navpanel">
                <div className="navpanel-inner bg-gray-400 opacity-50 h-screen w-5/6 ">
                    <div className=''>
                        <a href='/' ><p className='text-3xl text-white italic'>Home</p></a>
                        <a href='/about' ><p className='text-3xl text-white italic'>About</p></a>
                        <a href='/' ><p className='text-3xl text-white italic'>Works</p></a>
                    </div>
                </div>
            </div>
        </div>
)
}