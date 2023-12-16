// pages/about3.js

import React from 'react';
import Header2 from '../components/Header2';
import imgwork from '../public/imgwork.jpg';
import Image from 'next/image';
import Footer from '../components/Footer';
import JobTimeLineBox from '../components/About/JobTimeLineBox';
import BtnLikeSkillBlack from '@/components/Button/BtnLikeSkillBlack';
import styles from '../styles/Footer.module.css';
 
export default function about3() {
    return (
        <div className='bg--400'>
            {/* １：ヘッダー */}
            <Header2 />

            {/* ２：固定画像（background-image） */}
            <div>
                <div className="w-full  h-[40%] fixed items-center justify-center background" >
                    <Image
                        className='h-[40%] w-full object-contain md:h-full md:w-48 '
                        src={imgwork}
                        alt="Work img"
                        fill={true}
                        // style={{ objectFit: "cover", backgroundAttachment: 'fixed' }} 
                        style={{ objectFit: "cover" }}
                        priority
                    /> 
                </div>
                <div className='fixed inset-0 bg-gray-950 opacity-60 z-20 h-[40%]'/>
            </div>
            
            {/* ３番目：一部：テキスト部分 */}
            <div className="w-full absolute z-30  pt-[120px] py-8 flex flex-col justify-center items-center">
                <h1 className="text-white text-6xl md:text-4xl italic font-semibold ">About</h1>
            </div>
                    
            <div className=' pt-[120px]'>
                    
                <h2 className="text-white text-base md:text-3xl mb-1 ">小城ルミ</h2>
                <h3 className="text-white text-xl italic md:text-3xl mb-8">Front End Web engineer</h3>
                
                <JobTimeLineBox />
            </div>
           
                
                                
             <Footer />
            </div>
    )
}

