// pages/about2.js

import React from 'react';
import Header2 from '../components/Header2';
import imgwork from '../public/imgwork.jpg';
import Image from 'next/image';
import Footer from '../components/Footer';
import JobTimeLineBox from '../components/About/JobTimeLineBox';
import BtnLikeSkillBlack from '@/components/Button/BtnLikeSkillBlack';
import styles from '../styles/Footer.module.css';
 
export default function about2() {
    return (
        <div className='bg-white'>
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

            
            <div className='bg-black h-[40%] w-full mt-[80%] fixed'></div>
            
            {/* ３番目：一部：テキスト部分：mt-[100px]でlevel0 */}
            <div className="w-full absolute z-30 mt-[130px] mb-[30px] flex flex-col justify-center items-center">
                <div>
                    <h1 className="text-white text-[40px] md:text-[60px] italic font-semibold">About</h1>
                    
                </div>
                <JobTimeLineBox /> 
                
           
                
                
                
                
                
               
            



            {/* ３番目のためのh80x2 (見えていないが削除するとレイアウトがバグる) */}
           
            {/* 3番目一部の背景部分 */}
            <div className="bg-red-100 w-[70%] h-[100vh]"></div>

            {/* ４番目の背景とテキスト */}
            <div className=" h-auto w-80 absolute z-30" style={{ height: "800px"}}>
                <div className='flex flex-row w-full flex-wrap'>
                    <BtnLikeSkillBlack>React</BtnLikeSkillBlack>
                    <BtnLikeSkillBlack>Next.js</BtnLikeSkillBlack>
                    <BtnLikeSkillBlack>JavaScript</BtnLikeSkillBlack>
                    <BtnLikeSkillBlack>Git, GitHub</BtnLikeSkillBlack>
                    <BtnLikeSkillBlack>Tailwindcss</BtnLikeSkillBlack>
                    <BtnLikeSkillBlack>Node.js</BtnLikeSkillBlack>
                    <BtnLikeSkillBlack>React</BtnLikeSkillBlack>
                    <BtnLikeSkillBlack>Next.js</BtnLikeSkillBlack>
                    <BtnLikeSkillBlack>JavaScript</BtnLikeSkillBlack>
                    <BtnLikeSkillBlack>Git, GitHub</BtnLikeSkillBlack>
                    <BtnLikeSkillBlack>Tailwindcss</BtnLikeSkillBlack>
                    <BtnLikeSkillBlack>Node.js</BtnLikeSkillBlack>
                </div>
            </div>

            {/* 4番目のためのh80(見えていないが削除するとレイアウトがバグる) */}
           
            <div className={`bg-blue-400 mt-[420px] z-40 h-auto`} style={{ height: "800px"}}>
                <ul>
                    <li>FIRST list1</li>
                    <li>list1</li>
                    <li>list1</li>
                    <li>list1</li>
                    <li>LAST list1</li>
                </ul>
                <ul>
                    <li>FIRST list1</li>
                    <li>list1</li>
                    <li>list1</li>
                    <li>list1</li>
                    <li>LAST list1</li>
                </ul>
                <ul>
                    <li>FIRST list1</li>
                    <li>list1</li>
                    <li>list1</li>
                    <li>list1</li>
                    <li>LAST list1</li>
                </ul>
                <div className={ `${styles.section4}` }></div>
                <Footer />
            </div>
            </div>
            



        </div>
    )
}

