// pages/works/web01.js(works詳細ページ)

import React from 'react';
import Header2 from '../components/Header2';
import Link from 'next/link';
import Footer from '../components/Footer';
import BtnLikeSKillWhite from '@/components/Button/BtnLikeSkillWhite';
import CommonImgTmb from '@/components/Works/CommonImgTmb';

export default function Web01() {
    const URL = ''
    return (
        <div>
            <Header2 />
            <div className='relateive'>
                <div className='bg-black w-full h-[30vh]'></div>
                <div className='bg-gray-50 w-full h-[4vh]'></div>
                <p className='text-white text-[12px] absolute top-[calc(56px)]'>lorem?</p>
                <div className='absolute top-[9vh] w-full justify-center flex'>
                    <CommonImgTmb 
                        src='/work04.png'
                        alt="Image"
                        width={380}
                        height={346}
                        layout='responsive'
                        priority
                        style={{ maxWidth: 'none', paddingLeft:'-20px' }}                            
                    />    
                </div>
                <div className='flex flex-col absolute top-[calc(56px+5%)] right-[-3%]'>
                    <BtnLikeSKillWhite>Node.js</BtnLikeSKillWhite>
                    <BtnLikeSKillWhite>Node.js</BtnLikeSKillWhite>
                    <BtnLikeSKillWhite>Node.js</BtnLikeSKillWhite>
                    <BtnLikeSKillWhite>Node.js</BtnLikeSKillWhite>
                </div>
            </div>
            <div className='bg-[#f2f2f2] w-full h-[40vh] flex items-center'>
                <div className='w-[80vw] '>
                <p>ECサイト / 個人制作</p>
                <Link href='http://design63.html.xdomain.jp/'>http://design63.html.xdomain.jp/</Link>
                <p>ログイン認証機能 / Top / カート機能 / ブログ / 事業内容
プライバシーポリシー / SPA / API / データベースなど
シンプルな画像と透明感ある画像を採用し
海やエシカルが好きな顧客のUXを高め、シンプルさにリンク
したUIを構築しています。</p>
</div>
                
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