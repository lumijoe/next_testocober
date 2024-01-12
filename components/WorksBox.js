// components/WorksBox.js

import React from 'react';
import Works02 from './Works02';
import Works01 from './Works01';
import Works10 from './Works10';
import Works03 from './Works03';
import Works11 from './Works11';
import Works08 from './Works08';
import Works09 from './Works09';
import styles from '../styles/Footer.module.css';

export default function WorksBox() {
    return (
        <div className={styles.section1}>
            <h1 className='md:text-8xl text-6xl italic text-center pt-40 mb-20'>Creative<br/>Development</h1>
            <span className='text-4xl thin text-center w-[24px] h-[1px] bg-pink-600 inline-block ml-[47%] mr-[47%] rotate-[-67deg] overflow-hidden'></span>
            <h2 className='text-[20px] text-center font-200 tracking-widest mt-20 leading-[40px]'>解決を開発するために<br/>視覚技術と言語技術を駆使する</h2>
            <div className='flex flex-row mb-[210px] pt-[40px] items-center'>
                <span className='text-4xl thin text-center w-[24px] h-[1px] bg-pink-600 inline-block rotate-[-67deg] overflow-hidden'></span>
                <p id='works' className={`text-[40px] md:text-[60px] italic font-medium text-center`}>WORKS</p>
            </div>
            <Works02 />
            <Works01 />
            <Works10 />
            <Works11 />
            <Works03 />
            <Works08/>
            <Works09/>
            
        </div>
    ) 
}
