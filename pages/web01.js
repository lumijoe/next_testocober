// pages/works/web01.js(works詳細ページ)

import React from 'react';
import Header2 from '../components/Header2';
import Link from 'next/link';
import Footer from '../components/Footer';
import BtnLikeSKillWhite from '@/components/Button/BtnLikeSkillWhite';
import CommonImgTmb from '@/components/Works/CommonImgTmb';
import Image from 'next/image';
import Btn from '../components/Button/Btn';
import styles from '../styles/Footer.module.css';

export default function Web01() {
    return (
        <div className='overflow-y-hidden'>
            <Header2 />
            <div className=' h-auto'>
                <div className='bg-black w-full h-[330px]'/>
                <div className={` ${styles.gradworkdetail} w-full h-[45px]`}/>
                <p className='text-white text-[12px] absolute top-[calc(56px)] italic text-center'>Web Site : 2023</p>
                <div className='absolute top-[188px] w-full justify-center flex'>
                    <CommonImgTmb 
                        src='/work04.png'
                        alt="Image"
                        width={320}
                        height={200}
                        layout='responsive'
                        priority
                        style={{ maxWidth: 'none', paddingLeft:'-20px' }}                            
                    />    
                </div>
                <div className='flex flex-col absolute h-auto top-[calc(56px+5%)] right-[3%]'>
                    <BtnLikeSKillWhite>Node.js</BtnLikeSKillWhite>
                    <BtnLikeSKillWhite>Node.js</BtnLikeSKillWhite>
                    <BtnLikeSKillWhite>Node.js</BtnLikeSKillWhite>
                    <BtnLikeSKillWhite>Node.js</BtnLikeSKillWhite>
                </div>
            </div>

            <div className='bg-[#f2f2f2] w-full h-[40vh] flex flex-col items-center justify-center mb-8'>
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

            <div className='w-full h-auto flex flex-col items-center justify-center py-[60px]'>
                <div className='w-[60vw] mb-8'>
                    <h3 className={`font-bold text-1xl text-black leading-8 tracking-wider`}>地域課題解決と<br/>アイデンティティ醸成のバランス</h3>
                    <p className='break-all mt-4 text-[14px] leading-6 text-black  font-thin tracking-wider'>
                    関係する文章の入れ込み、テキスト文章編集校正のボリューム量など見極める。最低何行〜最高何行の決め。Webサイトを制作させていただきました。英語と日本語の文字サイズのバランスなど。loremlorem</p>
                </div>
                <div className='mx-9'>
                    <CommonImgTmb
                        src='/img01.jpg'
                        alt='Image'
                        width={310}
                        height={233}
                    />
                    <br/>
                    <CommonImgTmb
                        src='/img01.jpg'
                        alt='Image'
                        width={310}
                        height={233}
                    />
                </div>
            </div>
            <div className='bg-white w-full h-auto flex flex-col items-center justify-center py-[60px]'>
                <div className='w-[60vw] mb-12'>
                    <h3 className={`font-bold text-1xl text-black leading-8 tracking-wider`}>波のうねりと、山脈。</h3>
                    <p className='break-all mt-4 text-[14px] leading-6 text-black  font-thin tracking-wider'>
                        関係する文章の入れ込み、テキスト文章編集校正のボリューム量など見極める。最低作させてい字サイ。</p>
                </div>
                <div className='mx-9'>
                    <CommonImgTmb
                        src='/img02.jpg'
                        alt='Image'
                        width={310}
                        height={400}
                    />
                    <p className='text-[10px] tracking-wider font-thin pt-3 pb-12'>プロジェクト名刺</p>
                    <br/>
                    <CommonImgTmb
                        src='/img06.jpg'
                        alt='Image'
                        width={310}
                        height={400}
                    />
                    <p className='text-[10px] tracking-wider pt-3 pb-12'>販売用Tシャツロゴ</p>
                </div>
                <br/>
            </div>
            

            <div className='w-full h-auto flex flex-col items-center justify-center py-[60px] bg-[#f2f2f2]'>
                <div className='w-[60vw] mb-8'>
                    <h3 className={`font-bold text-1xl text-black leading-8 tracking-wider`}>地域課題解決と<br/>アイデンティティ醸成のバランス</h3>
                    <p className='break-all mt-4 text-[14px] leading-6 text-black  font-thin tracking-wider'>
                    関係する文章の入れ込み、テキスト文章編集校正のボリューム量など見極める。最低何行〜最高何行の決め。Webサイトを制作させていただきました。英語と日本語の文字サイズのバランスなど。loremlorem</p>
                </div>
                <div className='mx-9'>
                    <CommonImgTmb
                        src='/img01.jpg'
                        alt='Image'
                        width={310}
                        height={233}
                    />
                    <br/>
                    <CommonImgTmb
                        src='/img01.jpg'
                        alt='Image'
                        width={310}
                        height={233}
                    />
                </div>
            </div>

            <div className='bg-white w-full h-auto flex flex-col items-center justify-center py-[60px]'>
                <div className='w-[60vw] mb-12'>
                </div>
                <div className='mx-9'>
                        <CommonImgTmb
                            src='/img01.jpg'
                            alt='Image'
                            width={310}
                            height={400}
                        />
                        <br/>
                        <CommonImgTmb
                            src='/img01.jpg'
                            alt='Image'
                            width={310}
                            height={400}
                        />
                        <br/>
                        
                    </div>
            </div>


            <div className='bg-emerald-600 w-full h-auto flex flex-col items-center justify-center py-[60px]'>
                <div className='w-[60vw] mb-12'>
                </div>
                <div className='mx-1 flex flex-row gap-2 mt-[-240px]'>
                        <CommonImgTmb
                            src='/web0101.png'
                            alt='Image'
                            width={100}
                            height={300}
                        />
                        <br/>
                        <CommonImgTmb
                            src='/web0102.png'
                            alt='Image'
                            width={100}
                            height={300}
                        />
                        <br/>
                        <CommonImgTmb
                            src='/web0103.png'
                            alt='Image'
                            width={100}
                            height={300}
                        />
                        <br/>
                        <CommonImgTmb
                            src='/web0104.png'
                            alt='Image'
                            width={100}
                            height={300}
                        />
                    </div>
            </div>


            

            {/* フッター手前コンテンツ */}

            <div className='w-full flex items-center justify-center'>
                <Btn className='bg-black text-white w-[60vw] italic text-ml'>Works Top
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
            <div className={styles.section1}></div>
            <Footer />
        </div>
    )
}