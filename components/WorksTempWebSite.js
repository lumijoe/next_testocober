import React from 'react';
import CommonImgTmb from '../components/Works/CommonImgTmb';
import styles from '../styles/Footer.module.css';

export default function WorksTempWebSite({ categoryTitleRotate, categoryTitleNum, categoryTitleName, categoryText, children }) {
    return (
       
        <div>
            <div className='mx-3.5 relative'>
                <h1 className={`rotate-90 ${styles.redlineRow} ml-3.5 italic absolute top-[45px]`}>{categoryTitleRotate}</h1>
                <h2 className='align-middle italic font-semibold ml-[50px]' style={{ fontSize: 'clamp(2rem, 8vw, 4.5rem)' }}>{categoryTitleNum}
                    <span className='text-[18px] align-middle font-medium pl-5' style={{ textWrap:'nowrap' }}>{categoryTitleName}</span>
                </h2>
            </div>
            <div className='w-full justify-center'>
                <p className='w-[60%] m-auto text-[12px] text-[#6c6c6c] tracking-wider font-300 leading-6' style={{ fontFamily: "Noto Sans JP" }}>{categoryText}</p>
                {children}
                
                <CommonImgTmb />
            </div>
        </div>
    )
} 