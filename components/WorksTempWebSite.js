import React from 'react';
import CommonImgTmb from '../components/Works/CommonImgTmb';

export default function WorksTempWebSite({ categoryTitleRotate, categoryTitleNum, categoryTitleName, categoryText, children }) {
    return (
       
        <div>
            <div>
                <h1 className=''>{categoryTitleRotate}</h1>
                <h2 className='text-5xl align-middle'>{categoryTitleNum}
                    <span className='text-[16px] align-middle pl-2'>{categoryTitleName}</span>
                </h2>
            </div>
            <div className='w-full justify-center'>
                <p className='w-[60%] m-auto'>{categoryText}</p>
                {children}
                
                <CommonImgTmb />
            </div>
        </div>
    )
}