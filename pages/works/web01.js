// pages/works/web01.js(works詳細ページ)

import React from 'react';
import Header2 from '../components/Header2';
import Image from 'next/image';
import Footer from '../components/Footer';
import Btn from '../components/Button/Btn';
import Link from 'next/link';

export default function Web01() {
    return (
        <div>
            <Header2 />
            <div style={{ position: "relative", height: "40vh" }}>
                <Image
                    className='h-60 w-full object-contain md:h-full md:w-48 hover:object-scale-down'
                    src="/image01.jpg"
                    alt="Hero img"
                    fill style={{ objectFit: "cover" }}
                    priority
                />  
            </div>
            <p className='text-4xl'>Web01</p>
            <p className='text-4xl'>Web01</p>
            <p className='text-4xl'>Web01</p>
            <p className='text-4xl'>Web01</p>
            <p className='text-4xl'>Web01</p>
            <p className='text-4xl'>Web01</p>
            <p className='text-4xl'>Web01</p>
            <Footer />
        </div>
    )
}