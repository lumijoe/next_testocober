import React from 'react';
import styles from '../styles/Footer.module.css';

export default function WorksCopy() {
    return (
        <div className={`${styles.section3} bg-white pb-[120px]`} >
            <h1 className='md:text-8xl text-6xl italic text-center  mb-10'>Creative<br/>Development</h1>
            <span className='text-4xl thin text-center w-[24px] h-[1px] bg-pink-600 inline-block ml-[47%] mr-[47%] rotate-[-67deg] overflow-hidden'></span>
            <h2 className='text-[20px] text-center font-200 tracking-widest mt-10 leading-[40px]'>解決を開発するために<br/>視覚技術と言語技術を駆使する</h2>
{/*         
            <div className='relative'>
            <h1 className={`mt-[240px] items-center text-[40px] md:text-[60px] italic font-medium text-center relative ${styles.redline} `} id='works'>WORKS</h1>
            </div> */}

        </div>
    )
}