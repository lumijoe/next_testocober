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
        <div>
            <Header2 />
            <div className=' h-auto'>
                <div className='bg-black w-full h-[330px]'/>
                <div className={` ${styles.gradworkdetail} w-full h-[45px]`}/>
                <p className='text-white text-[12px] absolute top-[calc(56px)] italic text-center'>Web Site : 2023</p>
                <div className='absolute top-[175px] w-full justify-center flex'>
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
                
            </div>

            <div className='bg-[#f2f2f2] w-full h-[40vh] flex flex-col items-center justify-center mb-8'>
                <div className='w-[80vw]'>
                    <p style={{ overflowWrap: 'break-word' }}>ECサイト / 個人制作</p>
                    <Link href='http://design63.html.xdomain.jp/'>http://design63.html.xdomain.jp/</Link>
                    <p>ログイン認証機能 / Top / カート機能 / ブログ / 事業内容
                        プライバシーポリシー / SPA / API / データベースなど
                        シンプルな画像と透明感ある画像を採用し
                        海やエシカルが好きな顧客のUXを高め、シンプルさにリンク
                        したUIを構築しています。</p>
                    <div className='flex flex-row gap-3 w-[80vw] flex-wrap'>
                    <BtnLikeSKillWhite>Node.js</BtnLikeSKillWhite>
                    <BtnLikeSKillWhite>JavaScript</BtnLikeSKillWhite>
                    <BtnLikeSKillWhite>React</BtnLikeSKillWhite>
                    <BtnLikeSKillWhite>Next.js</BtnLikeSKillWhite>
                    <BtnLikeSKillWhite>Firebase</BtnLikeSKillWhite>
                    <BtnLikeSKillWhite>Node.js</BtnLikeSKillWhite>
                    <BtnLikeSKillWhite>Next.js</BtnLikeSKillWhite>
                    
                </div>
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
                    <h3 className={`font-bold text-1xl text-black leading-8 tracking-wider`}>町中の景色に<br/>統一したデザインを展開</h3>
                    <p className='break-all mt-4 text-[14px] leading-6 text-black  font-thin tracking-wider'>
                        関係する文章の入れ込み、テキスト文章編集校正のボリューム量など見極める。最低作させてい字サイ。編集中です。</p>
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
                    <p className='text-[10px] tracking-wider pt-3 pb-12'>のぼりA</p>
                    <br/>
                    <CommonImgTmb
                        src='/img06.jpg'
                        alt='Image'
                        width={310}
                        height={400}
                    />
                    <p className='text-[10px] tracking-wider pt-3 pb-12'>のぼりB：２自治体共通</p>
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
                <div className='w-[50vw] mb-8'>
                    <h3 className={`font-bold text-1xl text-black leading-8 tracking-wider`}>山のうねりと、山脈。<br/>景色とリンクさせる。</h3>
                    <p className='break-all mt-4 text-[14px] leading-6 text-black  font-thin tracking-wider'>・町の自然豊かな景色<br/>・町民の温かさや情熱<br/>・幅広い年代層への訴求トーン</p>
                </div>
                <div className='w-[50vw] h-auto'>
                    <CommonImgTmb
                        src='/web01font.jpg'
                        alt='Image'
                        width={200}
                        height={130}
                    />
                    <p className='text-[14px] tracking-wider pt-3 pb-1'>font name this area</p>
                    <br/>
                    <div className='flex flex-row mr-0  w-[80vw] h-auto overflow-x-scroll overflow-auto '>
                        <div>
                            <div className='w-[100px] h-[140px] bg-slate-600 mb-3'/>
                            <p className='text-[12px]  '>HEX<br/>#00test</p>
                            <p className='text-[12px] '>RGB<br/>0 0 0</p>
                            <p className='text-[12px]  '>CMYK<br/>160 163 164 100</p>
                            <p className='text-[10px]  '>自治体の堅実さ</p>
                        </div>
                        <div>
                        <div className='w-[100px] h-[140px] bg-pink-300 mb-3'/>
                            <p className='text-[12px]  '>HEX<br/>#00test</p>
                            <p className='text-[12px] '>RGB<br/>0 0 0</p>
                            <p className='text-[12px]  '>CMYK<br/>160 163 164 100</p>
                            <p className='text-[10px]  '>自治体の堅実さ</p>
                        </div>
                        <div>
                        <div className='w-[100px] h-[140px] bg-blue-300 mb-3'/>
                            <p className='text-[12px]  '>HEX<br/>#00test</p>
                            <p className='text-[12px] '>RGB<br/>0 0 0</p>
                            <p className='text-[12px]  '>CMYK<br/>160 163 164 100</p>
                            <p className='text-[10px]  '>自治体の堅実さ</p>
                        </div>
                        <div>
                        <div className='w-[100px] h-[140px] bg-green-600 mb-3'/>
                            <p className='text-[12px]  '>HEX<br/>#00test</p>
                            <p className='text-[12px] '>RGB<br/>0 0 0</p>
                            <p className='text-[12px]  '>CMYK<br/>160 163 164 100</p>
                            <p className='text-[10px]  '>自治体の堅実さ</p>
                        </div>
                        <div>
                        <div className='w-[100px] h-[140px] bg-gray-400 mb-3'/>
                            <p className='text-[12px]  '>HEX<br/>#00test</p>
                            <p className='text-[12px] '>RGB<br/>0 0 0</p>
                            <p className='text-[12px]  '>CMYK<br/>160 163 164 100</p>
                            <p className='text-[10px]  '>自治体の堅実さ</p>
                        </div>
                    </div>
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
                        <CommonImgTmb
                            src='/img01.jpg'
                            alt='Image'
                            width={310}
                            height={400}
                        />
                    </div>
            </div>

            <div className={`${styles.section1} pb-[]`}></div>
            <div className='bg-emerald-600 w-full h-auto flex flex-col items-center justify-center py-[60px]'>
                <div className='w-[60vw] mb-12'>
                </div>
                <div className='flex flex-col items-center'>
                    <CommonImgTmb
                        src='/web01end.png'
                        alt='Image'
                        width={300}
                        height={300}
                    />
                    <Btn className='bg-black w-[40vw] italic text-ml'>サイトを見る
                    <Link href="http://design63.html.xdomain.jp/" className='pl-8'>
                        <Image
                            src="/toright.svg"
                            alt="Icon"
                            width={40}
                            height={40}
                        />
                    </Link>
                </Btn>
                </div>
            </div>


            

            {/* フッター手前コンテンツ */}

            <div className='w-full flex items-center justify-center mt-[60px]'>
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