// components/WorksBox.js

import React from 'react';
import Works05 from './Works05';
import Works03 from './Works03';
import Works02 from './Works02';
import Works04 from './Works04';
import Works06 from './Works06';
import Works07 from './Works07';
import Works08 from './Works08';


export default function WorksBox() {
    return (
        <div>
            <h1 className='md:text-8xl text-6xl italic text-center pt-40 mb-20'>Design, Direction, Creative Development</h1>
            <h2 className='text-[20px] text-center italic tracking-widest mb-20'>解決を開発するために<br/>視覚技術と言語技術を駆使する。</h2>
            <p className='inline-block break-all pl-[10%] pr-[10%] h-auto mb-40'></p>
            <Works05 />
            <Works06 />
            <Works07 />
            <Works02 />
            <Works03 />
            <Works04 />
            <Works08/>
        </div>
    ) 
}
