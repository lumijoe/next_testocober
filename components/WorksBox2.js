// components/WorksBox2.js

import React from 'react';
import Works052 from './Works052';
import Works03 from './Works03';
import Works02 from './Works02';
import Works04 from './Works04';
import Works06 from './Works06';
import Works07 from './Works07';
import Works08 from './Works08';
import styles from '../styles/test.module.css';



export default function WorksBox2() {
    return (
        <div id='works' className={` ${styles.section1}`}>
            
            <h1 className='md:text-8xl text-6xl italic text-center pt-40 mb-20 text-white'>Design, Direction, Creative Development</h1>
            <h2 className='text-[20px] text-center italic tracking-widest text-white mb-60'>解決を開発するために<br/>視覚技術と言語技術を駆使する。</h2>
            <p className='mb-8 text-6xl md:text-4xl italic  text-center text-white'>Works</p>
            <span className='text-4xl thin text-center w-[10%] h-[1px] bg-pink-600 inline-block ml-[45%] mr-[45%] rotate-[-70deg]'></span>

            <Works052 />
            <Works06 />
            <Works07 />
            <Works02 />
            <Works03 />
            <Works04 />
            <Works08/>
        </div>
    ) 
}