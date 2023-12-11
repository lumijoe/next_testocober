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
            <h1 className='text-5xl italic text-center mt-20 mb-20'>WORKS</h1>
            <h2 className='text-[20px] text-center m-10'>楽しさを設計で実現する</h2>
            <p className='inline-block break-all pl-[10%] pr-[10%] h-auto mb-40'>クリエイティブと実用性のバランスを
意識しながら実装しています。
行動心理を活用して
ペルソナとサービスの双方のアイデンティティを
マッチさせるべく実装に向き合っています。テストworks05-08</p>
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
