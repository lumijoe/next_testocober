// pages/works/Design06.js

import React from 'react';
import Header2 from '../components/Header2';
import Link from 'next/link';
import Footer from '../components/Footer';
import BtnLikeSKillWhite from '@/components/Button/BtnLikeSkillWhite';
import CommonImgTmb from '../components/Works/CommonImgTmb';
import Image from 'next/image';
import Btn from '../components/Button/Btn';
import styles from '../styles/Footer.module.css';

export default function Design06() {
    return (
        <div>
            <Header2 />
            <div className=' h-[330px] pt-[52px] flex justifyーcenter'>
            
            <div className={` ${styles.gradworkbg} w-full h-[330px] justify-center`}></div>
               
                <div className='absolute  w-full justify-center flex pt-[45px]'>
                    <CommonImgTmb 
                        src='/workSpace02.jpg'
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
                    <p style={{ overflowWrap: 'break-word' }}>スペース / 駅中店舗内装リニューアル / 阪南市観光協会事務所兼物産販売所</p>
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
                    <h3 className={`text-[18px] font-bold text-black leading-8 tracking-wider`}>防犯対策と<br/>町の人に活用してもらいたい思い</h3>
                    <p className={`break-all mt-4 text-[14px] leading-6 text-black tracking-wider`}>
                    見てもらいたい店舗があるとお声がけを頂いたことがきっかけです。それまで、ボランティア活動をしていたことがあり、公共空間の使い方が面白いと新聞の一面に取り上げていただき、面白い人だと声をかけていただきました。空間へのこだわり、楽しいだけでなく公共空間は防犯対策も必要だとの話から、新入社員で空間コーディネートを任せていただいた話や、警備員時代の防犯の話、店舗動線の話にもなった次第です。現場を見に行くと、課題はたくさんありました。店舗空間を作っていき、季節ごとに任せていただけるようになり、設備をリニューアルする機会があるから内装を考えてくださいとのご依頼もいただきました。予算とカスタム性とメンテナンス性も考えて、イケアで調達することを決定。店舗責任者の方とイケアの方も含めて打ち合わせをし、組み立ては町の方とDIYをしようと企画。イベントをすることで店舗リニューアルの宣伝にもなると考えました。町で活動している方々が早速たくさん来てくださり、みんなで組み立て完成させ、入りにくく狭かった店舗にフォーカルポイントをおくことで、パンフレット、物販、事務ゾーンなど、活用していただけるようになり、防犯対策もホッとしたとおしゃっていただけました。
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
