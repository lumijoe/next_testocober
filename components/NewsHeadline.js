// components/NewsHeadline.js

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';


export default function NewsHeadline() {
    // ヘッドラインニュース
    const worksarea = `/#works`;
    const skillsarea = `/about#skills`;
    
    return (
        <div className='bg-pink h-[50px] opacity-90 w-[100vw] items-center jsutify-center '>
            <div id="newsheadline" className="newsheadline">
                <div className='text-white text-2xl italic font-thin pl-[-3vw] pt-[52px]'>
                    <h2>NEWS Headline 01</h2>
                </div>
            </div>
        </div>
    )
}
