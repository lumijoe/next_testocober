import React from 'react';
import CommonImgTmb from '../components/Works/CommonImgTmb';

export default function WorksTemp({ children }) {
    return (
        <div>
        {children}
        <CommonImgTmb />
        <div className='bg-black w-full h-[15px] mt-8'></div>
        </div>
    )
}