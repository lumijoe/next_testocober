// pages/about2.js

import React from 'react';
import Header2 from '../components/Header2';
import imgwork from '../public/imgwork.jpg';
import Image from 'next/image';
import Footer from '../components/Footer';
 
export default function Test4() {
    return (
        <div>
            <Header2 />
        
            <div className='relative'>
            
            </div>


            {/* ２番目：一時固定画像 */}
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
            

            {/* ３番目：一部：テキスト部分 */}
            <div className="w-full h-80 absolute z-30 mt-[40vh] py-8 flex flex-col justify-center items-center">
           
                <ul>
                    <li className='mb-2'>
                        <p className="text-white text-6xl md:text-4xl italic font-semibold">ABOUT</p></li>
                    <li className='mb-2'>
                        <p className="text-white text-sm md:text-2xl italic">小城ルミ</p></li>
                    <li className='mb-2'>
                        <p className="text-white text-sm italic md:text-2xl">Front End Web Engineer</p></li>
                    <li className='mb-2'>
                        <p className="text-white text-sm md:text-2xl"><span className='text-base md:text-3xl tracking-wide'>
                            2022</span>年 フロンドエンド制作と開発</p></li>
                    <li className='mb-2'>
                        <p className="text-white text-sm md:text-2xl"><span className='text-base md:text-3xl tracking-wider'>
                            2021</span>年 <span class="text-xl thin">Web</span>へ転向</p></li>
                    <li className='mb-2'>
                        <p className="text-white text-sm md:text-2xl"><span className='text-base md:text-3xl tracking-wider'>
                            2018</span>年 ディレクション( 産官新店舗 )</p></li>
                    <li className='mb-2'>
                        <p className="text-white text-sm md:text-2xl"><span className='text-base md:text-3xl tracking-wider'>
                            2016</span>年 ディレクション / グラフィック制作(自治体)</p></li>
                    <li className='mb-2'>
                        <p className="text-white text-sm md:text-2xl"><span className='text-base md:text-3xl tracking-wider'>
                            2015</span>年 クリエイティブ制作(店舗・グラフィック)</p></li>
                    <li className='mb-2'>
                        <p className="text-white text-sm md:text-2xl"><span className='text-base md:text-3xl tracking-wider'>
                            2010</span>年 オウンドメディア編集担当</p></li>
                    <li className='mb-2'>
                        <p className="text-white text-sm md:text-2xl"><span className='text-base md:text-3xl tracking-wider'>
                            1997</span>年 短期大学卒(英米語 / Touch typing)</p></li>
                    <li className='mb-2'>
                        <p className="text-white text-sm md:text-2xl"><span className='text-base md:text-3xl tracking-wider'>
                            1976</span>年生まれ</p></li>
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
            <div className="bg-[#232323] w-90 h-80"></div>

            {/* ４番目の背景とテキスト */}
            <div className="bg-indigo-300 h-auto w-80 absolute z-30" style={{ height: "800px"}}>
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

