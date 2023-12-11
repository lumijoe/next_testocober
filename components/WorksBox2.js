// components/WorksBox2.js

import React from 'react';
import Works01 from './Works01';
import Works08 from './Works08';
import Works07 from './Works07';

export default function WorksBox2() {
    return (
        <div>
            <h1 className='text-5xl italic text-center mt-20 mb-20'>WORKS</h1>
            <h2 className='text-[20px] text-center m-10'>継続を設計するために</h2>
            <p className='inline-block break-all pl-[10%] pr-[10%] h-auto mb-40'>UI,UXでは最終利用者の行動心理を活用した根本的解決のための設計や、日常と非日常をループさせる設計を重視しています。<br/><br/>実装では、Reactによるコンポーネントを駆使した開発や管理の効率化、SPA実装による高いパフォーマンスの確保、アクセシビリティー等を考慮し実装。<br/><br/>利用者だけでなく管理関係者の継続アクセスに配慮したコーディングを手掛けています。</p>
            <Works01 />
            <Works01 />
            <Works07 />
            
            <Works08/>
        </div>
    ) 
}
