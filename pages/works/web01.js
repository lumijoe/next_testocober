// pages/works/web01.js(works詳細ページ)

import React from 'react';
import Header2 from '../../components/Header2';
import Image from 'next/image';
import Footer from '../../components/Footer';
import BtnLikeSKillWhite from '@/components/Button/BtnLikeSkillWhite';

export default function Web01() {
    return (
        <div>
            <Header2 />
            <div className='relateive'>
                <div className='bg-black w-full h-[30vh]'></div>
                <div className='bg-gray-100 w-full h-[4vh]'></div>
                <p className='text-white text-[12px] absolute top-[calc(56px)]'>lorem?</p>
                <div className='flex flex-col absolute top-[calc(56px+5%)] right-[-3%]'>
                    <BtnLikeSKillWhite>Node.js</BtnLikeSKillWhite>
                    <BtnLikeSKillWhite>Node.js</BtnLikeSKillWhite>
                    <BtnLikeSKillWhite>Node.js</BtnLikeSKillWhite>
                    <BtnLikeSKillWhite>Node.js</BtnLikeSKillWhite>
                </div>
            </div>
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