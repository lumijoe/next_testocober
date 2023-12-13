// pages/test4.js

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
                    <li className='mb-2'><p className="text-white text-sm">Lumi Kojo</p></li>
                    <li className='mb-2'><p className="text-white text-sm italic">Front End Web Engineer</p></li>
                    <li className='mb-2'><p className="text-white text-sm">2022年以降  Webアプリ開発、フロントエンドまわり
                    </p></li>
                    <li className='mb-2'><p className="text-white text-sm">2021年 グラフィックからWeb制作へ転向</p></li>
                    <li className='mb-2'><p className="text-white text-sm">2018年 産官新店舗ディレクション / ブランディング</p></li>
                    <li className='mb-2'><p className="text-white text-sm">2016年 自治体インハウスデザイン / ディレクション</p></li>
                    <li className='mb-2'><p className="text-white text-sm">2015年 店舗・ブース内装 / 地域グラフィックデザイン </p></li>
                    <li className='mb-2'><p className="text-white text-sm">2010年 企業オウンドメディアブログ担当</p></li>
                    <li className='mb-2'><p className="text-white text-sm">1997年 短期大学卒(英米語 / Touch typing)</p></li>
                    <li className='mb-2'><p className="text-white text-sm">1976年生まれ</p></li>
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

