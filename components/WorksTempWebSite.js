import React from 'react';
import CommonImgTmb from '../components/Works/CommonImgTmb';
import styles from '../styles/Footer.module.css';

export default function WorksTempWebSite({ categoryTitleRotate, categoryTitleNum, categoryTitleName, categoryText, children }) {
    return (
       
        <div>
            <div>
                <h1 className={`rotate-90 ${styles.redlineRow} ml-3.5 italic `}>{categoryTitleRotate}</h1>
                <h2 className='text-8xl align-middle italic font-semibold'>{categoryTitleNum}
                    <span className='text-[16px] align-middle font-medium pl-2'>{categoryTitleName}</span>
                </h2>
            </div>
            <div className='w-full justify-center'>
                <p className='w-[50%] m-auto text-[12px] text-[#6c6c6c] tracking-wider font-300 leading-9'>{categoryText}</p>
                {children}
                
                <CommonImgTmb />
            </div>
        </div>
    )
}