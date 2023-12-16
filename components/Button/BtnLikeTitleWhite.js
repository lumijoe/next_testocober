// components/Button/BtnLikeTitleWhite.js 

import React from 'react';


export default function BtnLikeTitleWhite ({ children, className }) {
    const buttonLikeTitleWhiteClass = `rounded-bl-2xl  rounded-full text-black bg-white px-auto py-[3px] h-10 border border-black ${className}`

    return (
        <div className='py-8 pl-6 pr-6 w-auto inline-block'>
            <span type="button" className={`flex items-center justify-center ${buttonLikeTitleWhiteClass}`}>{children}</span>
        </div>
    )
}