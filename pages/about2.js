// pages/about2.js

import React from 'react';
import Header2 from '../components/Header2';
import imgwork from '../public/imgwork.jpg';
import Image from 'next/image';
import Footer from '../components/Footer';
import JobTimeLine from '../components/About/JobTimeLine';
 
export default function about2() {
    return (
        <div>
            {/* １：ヘッダー */}
            <Header2 />

            {/* ２：固定画像（background-image） */}
            <div>
                <div className="bg-black  w-full h-[40vh]  fixed z-10 items-center justify-center" >
                    <Image
                        className='h-60 w-full object-contain md:h-full md:w-48 hover:object-scale-down'
                        src={imgwork}
                        alt="Work img"
                        fill={true}
                        style={{ objectFit: "cover", backgroundAttachment: 'fixed' }}
                        priority
                    /> 
                </div>
                <div className='fixed inset-0 bg-gray-950 opacity-60 z-20' style={{ height: "40vh" }}/>
            </div>
            
            {/* ３番目：一部：テキスト部分 */}
            <div className="w-full h-80 absolute z-30 mt-[40vh] pt-[120px] py-8 flex flex-col justify-center items-center">
           
                <ul>
                    <li className='mb-1'>
                        <p className="text-white text-6xl md:text-4xl italic font-semibold">ABOUT</p></li>
                    <li className='mb-1'>
                        <p className="text-white text-base md:text-3xl italic">小城ルミ&nbsp;<span></span></p></li>

                    <JobTimeLine year='2022' content='フロントエンド制作開発' />
                    <JobTimeLine year='2021' content={<><span className='text-xl thin'>Web</span>へ転向</>} />
                    <JobTimeLine year='2018' content='店舗戦略ディレクション' detail='産官開発'/>
                    <JobTimeLine year='2016' content='ディレクション、グラフィック制作' detail='自治体'/>
                    <JobTimeLine year='2015' content='店舗内装、グラフィック制作' detail="地域"/>
                    <JobTimeLine year='2010' content='企業オウンドメディア編集担当'/>
                    <JobTimeLine year='1997' content='短期大学卒' detail='英米語、Touch typing'/>
                    <JobTimeLine year='1976' content='生まれ'/>
                </ul>
            </div>

            {/* ヘッダー
            <header className="bg-black h-20 w-full flex flex-row fixed top-0 items-center z-50">
                <p className="text-white flex-1 text-light pl-3">header</p>
                <p className="text-white flex-1 text-center" >header</p>
                <p className="text-white flex-1 text-right pr-3">header</p>
            </header> */}



            {/* ３番目のためのh80x2 (見えていないが削除するとレイアウトがバグる) */}
            <div className="bg-gray-600  w-90 absolute h-80"></div>

            <div className="bg-[#232323] w-80 h-80"></div>

            {/* 3番目一部の背景部分 */}
            <div className="bg-[#232323] w-90 h-[420px]"></div>

            {/* ４番目の背景とテキスト */}
            <div className=" h-auto w-80 absolute z-30" style={{ height: "800px"}}>
                <ul>
                    <li>yellow z-30</li>
                    <li>list1</li>
                    <li>list1</li>
                    <li>list1</li>
                    <li>LAST list1</li>
                </ul>
            </div>

            {/* 4番目のためのh80(見えていないが削除するとレイアウトがバグる) */}
            <div className="bg-pink-600 h-80" style={{ height: "800px"}}>
                <ul>
                    <li>FIRST list1</li>
                    <li>list1</li>
                    <li>list1</li>
                    <li>list1</li>
                    <li>LAST list1</li>
                </ul>
            </div>

            <Footer />



        </div>
    )
}

