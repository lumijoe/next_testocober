// pages/works/Design05.js

import React from 'react';
import Header2 from '../components/Header2';
import Link from 'next/link';
import Footer from '../components/Footer';
import BtnLikeSKillWhite from '@/components/Button/BtnLikeSkillWhite';
import CommonImgTmb from '../components/Works/CommonImgTmb';
import Image from 'next/image';
import Btn from '../components/Button/Btn';
import styles from '../styles/Footer.module.css';

export default function Design05() {
    return (
        <div>
            <Header2 />
            <div className=' h-[330px] pt-[52px] flex justifyーcenter'>
            
            <div className={` ${styles.gradworkbg} w-full h-[330px] justify-center`}></div>
               
                <div className='absolute  w-full justify-center flex pt-[45px]'>
                    <CommonImgTmb 
                        src='/workSpace01.jpg'
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
                    <p style={{ overflowWrap: 'break-word' }}>スペース / 展示会ブース内装 / 地域農家事業者様</p>
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
                    <h3 className={`text-[18px] font-bold text-black leading-8 tracking-wider`}>空間やPOPデザインなど<br/>全てを担当</h3>
                    <p className={`break-all mt-4 text-[14px] leading-6 text-black tracking-wider`}>
                    ボランティアで季節ごとの観光協会の店舗内VMDを手がけていたところ、大阪ギフトショーの展示会のブース内装をやってくれないかとお声がけを頂いた事がきっかけでした。自宅内装も採寸したりソフトを使用するほどの空間好きなので面白そうだなと挑戦しました。元警備員時代にも宝飾展示会の警備で出入りした事のある会場だったため、およその人の動線やスペース戦略などを計画し、資材も調達し当日は搬入から設置、搬出までやり遂げました。
                    途中では内装デザインに追加してPOPもデザインして欲しいとの要望もいただき、柔軟に対応。
                    イラストレーターとMacを事業者様と家電量販店に選びに行き、頂戴しました。Mac現物支給でのデザイン初仕事でした。期間は半年ほど。
                    デザインツールの使い方はグーグルや図書館で技術書を借りるなどして乗り切り、内装とデザインを統一させ、畑から食卓までの空間を提供することができました。事業者様の大賞獲得の一助として関わることができ、デザインで空間と解決に携わることができる充実感を得て、貴重な経験をさせていただきました。わらしべ的にここからグラフィックのお仕事をいただくようになります。
                    以下の画像は準備中です。</p>
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
