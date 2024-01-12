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

            <div className='bg-red-300 w-full h-[200px]'>222</div>
            <div className='bg-black h-[355px] w-full mt-[109px] fixed'></div>
            
            {/* ３番目：一部：テキスト部分：mt-[100px]でlevel0 */}
            <div className="w-full absolute z-30 mt-[130px] mb-[30px] flex flex-col justify-center items-center">
                <div>
                    <h1 className="text-white text-3xl md:text-4xl italic font-thin ">About</h1>
                    <p className="text-white text-base md:text-3xl italic text-center">小城ルミ</p>
                </div>
                <JobTimeLineBox /> 
                
           
                
                
                
                
                
                {/* <ul>
                    <li className='mb-1'>
                        <p className="text-white text-6xl md:text-4xl italic font-semibold">About</p></li>
                    <li className='mb-1'>
                        <p className="text-white text-base md:text-3xl italic">小城ルミ&nbsp;<span></span></p></li>

                    <JobTimeLine year='2022' content='フロントエンド制作開発' />
                    <JobTimeLine year='2021' content={<><span className='text-xl thin'>Web</span>へ転向</>} />
                    <JobTimeLine year='2018' content='店舗戦略ディレクション' detail='産官開発'/>
                    <JobTimeLine year='2016' content='ディレクション、グラフィック制作' detail='官インハウス'/>
                    <JobTimeLine year='2015' content='企画、店舗内装、グラフィック制作' detail="産官学民"/>
                    <JobTimeLine year='2010' content='企業オウンドメディア編集担当'/>
                    <JobTimeLine year='1997' content='短期大学卒' detail='英米語、タイピング、グローバル応用'/>
                    <JobTimeLine year='1976' content='生まれ'/>
                </ul> */}

            



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
                <div className={ `${styles.section3}` }></div>
                <Footer />
            </div>
            </div>
            



        </div>
    )
}

