// components/WorksBox.js

import React from 'react';

import Works09 from './Works09';
import Works09_a from './Works09_a';
import Works10 from './Works10';
import Works11 from './Works11';
import Works12 from './Works12';
import Works13 from './Works13';
import styles from '../styles/Footer.module.css';

export default function WorksBox() {
    return (
        <div className={`${styles.section4}`} id='works'>
            {/* <h1 className='md:text-8xl text-6xl italic text-center pt-40 mb-20'>Creative<br/>Development</h1>
            <span className='text-4xl thin text-center w-[24px] h-[1px] bg-pink-600 inline-block ml-[47%] mr-[47%] rotate-[-67deg] overflow-hidden'></span>
            <h2 className='text-[20px] text-center font-200 tracking-widest mt-20 leading-[40px]'>解決を開発するために<br/>視覚技術と言語技術を駆使する</h2> */}
        
            <div className='relative' >
            <h1 className={`mt-[80px] items-center text-[40px] md:text-[60px] italic font-medium text-center relative `} >Works</h1>

            </div>
            <Works09/>
            <Works13/>
            <Works12/> 
            {/* <Works10/>    */}
            <Works11/>
            <div className='mb-[120px]'></div>
        </div>
    ) 
}
