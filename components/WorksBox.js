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
            {/* <h1 className='md:text-8xl text-6xl italic text-center pt-40 mb-20'>Design, Direction, Creative Development</h1> */}
            <h1 className='md:text-8xl text-6xl italic text-center pt-40 mb-20'>Creative<br/>Development</h1>
            <span className='text-4xl thin text-center w-[6%] h-[1px] bg-pink-600 inline-block ml-[47%] mr-[47%] rotate-[-70deg] overflow-hidden'></span>
            <h2 className='text-[20px] text-center italic tracking-widest mt-20'>解決を開発するために<br/>視覚技術と言語技術を駆使する。</h2>
            <p  id='works' className='mb-8 pt-40 text-6xl md:text-4xl italic font-semibold text-center'>Works</p>
            {/* <span className='text-4xl thin text-center w-[6%] h-[1px] bg-pink-600 inline-block ml-[47%] mr-[47%] rotate-[-70deg] overflow-hidden'></span> */}
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
