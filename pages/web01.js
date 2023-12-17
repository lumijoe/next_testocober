// pages/works/web01.js(works詳細ページ)

import React from 'react';
import Header2 from '../components/Header2';
import Link from 'next/link';
import Footer from '../components/Footer';
import BtnLikeSKillWhite from '@/components/Button/BtnLikeSkillWhite';
import CommonImgTmb from '@/components/Works/CommonImgTmb';
import Image from 'next/image';
import Btn from '../components/Button/Btn';

export default function Web01() {
    return (
        <div>
            <Header2 />
            <div className='relateive'>
                <div className='bg-black w-full h-[30vh]'/>
                <div className='bg-gray-50 w-full h-[4vh]'/>
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

            <div className='bg-[#f2f2f2] w-full h-[40vh] flex flex-col items-center justify-center'>
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

            {/* 内容  */}

            <div className=' bg-pink-400 w-full h-auto flex flex-col items-center justify-center py-[60px]'>
                <div className='w-[60vw] mb-8'>
                    <h3 className={`font-bold text-1xl text-black`}>地域課題の解決やコピー</h3>
                    <p className='break-all mt-2 text-[12px] leading-6 text-[#696969] font-thin tracking-wider'>
                    関係する文章の入れ込み、テキスト文章編集校正のボリューム量など見極める。最低何行〜最高何行の決め。Webサイトを制作させていただきました。英語と日本語の文字サイズのバランスなど。loremlorem</p>
                </div>
                <div className='mx-9'>
                    <CommonImgTmb
                        src='/img01.jpg'
                        alt='Image'
                        width={500}
                        height={400}
                    />
                    <br/>
                    <CommonImgTmb
                        src='/img01.jpg'
                        alt='Image'
                        width={500}
                        height={500}
                    />
                </div>
            </div>
            <div className='bg-white w-full h-auto flex flex-col items-center justify-center py-[60px]'>
                <div className='w-[60vw] mb-8'>
                    <h3 className={`font-bold text-1xl text-black`}>地域課題の解決やコピー</h3>
                    <p className='break-all mt-2 text-[12px] leading-6 text-[#696969] font-thin tracking-wider'>
                    関係する文章の入れ込み、テキスト文章編集校正のボリューム量など見極める。最低何行〜最高何行の決め。Webサイトを制作させていただきました。英語と日本語の文字サイズのバランスなど。loremlorem</p>
                </div>
                <div className='mx-9'>
                    <CommonImgTmb
                        src='/img01.jpg'
                        alt='Image'
                        width={500}
                        height={400}
                    />
                    <br/>
                    <CommonImgTmb
                        src='/img01.jpg'
                        alt='Image'
                        width={500}
                        height={500}
                    />
                </div>
                <br/>
                <div className='mx-9'>
                    <CommonImgTmb
                        src='/img01.jpg'
                        alt='Image'
                        width={500}
                        height={400}
                    />
                    <br/>
                    <CommonImgTmb
                        src='/img01.jpg'
                        alt='Image'
                        width={500}
                        height={500}
                    />
                </div>
            </div>
            <div className='w-full flex items-center justify-center'>
                <Btn className='bg-black text-white w-[60vw] italic text-ml mb-12'>Works Top
                    <Link href="/" className='pl-8'>
                        <Image
                            src="/toright.svg"
                            alt="Icon"
                            width={40}
                            height={40}
                            
                        />
                    </Link>
                </Btn>
            </div>

            <Footer />
        </div>
    )
}