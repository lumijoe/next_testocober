// components/WorksBox2.js

import React from 'react';
import Works01 from './Works01';
import Works08 from './Works08';
import Works07 from './Works07';
import Works09 from './Works09';
import Works10 from './Works10';

export default function WorksBox2() {
    return (
        <div>
            <h1 className='md:text-8xl text-6xl italic text-center pt-40 mb-20'>Design, Creative Development</h1>
            <h2 className='text-[20px] text-center italic tracking-widest mb-20'>For ongoing resolution</h2>
            <p className='inline-block break-all pl-[10%] pr-[10%] h-auto mb-40'></p>
            <Works01 />
            <Works09 />
            <Works01 />
            <Works09 />
            <Works10 />
        </div>
    ) 
}

