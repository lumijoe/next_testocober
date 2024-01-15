// pages/works/Design04.js

import React from 'react';
import Header2 from '../components/Header2';
import Link from 'next/link';
import Footer from '../components/Footer';
import BtnLikeSKillWhite from '@/components/Button/BtnLikeSkillWhite';
import CommonImgTmb from '../components/Works/CommonImgTmb';
import Image from 'next/image';
import Btn from '../components/Button/Btn';
import styles from '../styles/Footer.module.css';

export default function Design04() {
    return (
        <div>
            <Header2 />
            <div className=' h-[330px] pt-[52px] flex justifyーcenter'>
            
            <div className={` ${styles.gradworkbg} w-full h-[330px] justify-center`}></div>
               
                <div className='absolute  w-full justify-center flex pt-[45px]'>
                    <CommonImgTmb 
                        src='/workStrategy02.jpg'
                        alt="Image"
                        width={320}
                        height={200}
                        layout='responsive'
                        priority
                        style={{ maxWidth: 'none', paddingLeft:'-20px', boxShadow: '10px 5px 6px rgba(0, 0, 0, 0.1)', borderRadius: '4px', overflow: 'hidden' }}
                                               
                    />    
                </div>
                
            </div>

            <div className='bg-white w-full h-[40vh] flex flex-col items-center justify-center mb-8 mt-[82px]'>
                <div className='w-[80vw]'>
                    <p style={{ overflowWrap: 'break-word' }}>ストラテジー / 産官開発事業 / カルチュア・コンビニエンス・クラブ株式会社 / 蔦屋書店和歌山市民図書館内 </p>
                    {/* <Link href='http://designguys.wp.xdomain.jp/'>http://designguys.wp.xdomain.jp/</Link>
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
                    
                </div> */}
                </div>     
            </div>

            {/* 内容  */}

            <div className='w-full h-auto flex flex-col items-center justify-center py-[60px]'>
                <div className='w-[80vw] mb-8'>
                    <h3 className={`text-[18px] font-bold text-black leading-8 tracking-wider`}>企業ブランドと<br/>アイデンティティのバランス</h3>
                    <p className={`break-all mt-4 text-[14px] leading-6 text-black tracking-wider`}>
                    ブランドコンセプト力のある蔦屋書店ではライフスタイルの提案がメイン。地域色に合わせた店舗コンセプトが課題であり、地域課題の解決も担う企業の社会的役割も外せないところ。3日に渡って、東京から尾道まで自社店舗や他社店舗も出張にて視察。本部研修も経て和歌山市に馴染むべくカスタムする必要がありました。インプットしたものを地域の人々の暮らしに合うように、企業ブランドにも合うように。
                    コンセプトは食と暮らしに決定。
                    オープンフェアではエシカルを打ち出し、蔦屋に期待されるライフスタイル提案ともリンクさせました。
                    以下画像は準備中です。</p>
                </div>
                {/* <div className='mx-9'>
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
                </div> */}
            </div>
            
            
            <div className={styles.section5}></div>
            <Footer />
        </div>
    )
}
