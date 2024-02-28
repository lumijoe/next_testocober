// components/Works10.js
// パターン：デザイン、中央スクロール
// ブレークポイントsm:640px

import React from 'react';
import WorksTempWebSite from '../components/WorksTempWebSite';
import styles from '../styles/Footer.module.css';
import BtnLikeSkillBlack from './Button/BtnLikeSkillBlack';
import CommonImgTmb from '../components/Works/CommonImgTmb';
import Image from 'next/image';
import Link from 'next/link';
import BtnLikeY8X12 from '../components/Button/BtnLikeY8X12'

export default function Works10 () {
    return (
       <div className="relative">
            
        {/* bodyの上に装飾 */}
        <div className={`absolute ${styles.section1} smMin553:opacity-0 smMax552:opacity-0 smMax453:top-[660px] smMax401:top-[697px] smMax351:opacity-0  relative`}></div>
        {/* <div className={`absolute ${styles.section1} top-[590px] smMax695:top-[605px] smMax567:top-[640px] smMax552:top-[625px] smMax453:top-[660px] smMax401:top-[697px] smMax351:opacity-0  relative`}></div> */}
        {/* <div className='bg-[#e3e3e3] w-full h-[400px] bottom-[-35px] absolute '>
             <div className='bg-[#e3e3e3] w-full h-[280px] absolute top-[-50px]' style={{ transform: 'skewY(-4deg)' }}></div> 
        </div> */}
        <div className='bg-[#e3e3e3] w-full h-[400px] bottom-[-35px] absolute '></div>


            <WorksTempWebSite
                categoryTitleRotate='LP & Banner'
                categoryTitleNum='02'
                categoryTitleName='ランディングページ / バナー'
                categoryText='ペルソナやデータを元に、瞬間的アプローチと継続的アプローチのバランスをコントロール。サービス体験の向上と継続を目的にPhotoshopなどで制作、コーディングも可能です。'  
            >
                <div className='flex flex-col-reverse h-auto justify-center'>
                    <div className='flex flex-row w-[100vw] pr-[calc(50%)] overflow-x-scroll overflow-auto smMax639:transform smMax639:translate-x-[50px]'>
                        <div className='flex flex-col justify-center relative mb-8 mr-8'>
                            <BtnLikeY8X12 className='text-[12px] py-[7px] px-[36px] max-w-max' style={{ fontFamily: "Noto Sans JP" }}>ランディングページ資料表紙</BtnLikeY8X12>

                            <div className='h-auto w-[290px] bg-white' style={{ boxShadow: '0px 3px 6px rgba(0, 0, 0, 0.1)', borderRadius: '4px', overflow: 'hidden', position: 'relative' }}>
                                <CommonImgTmb 
                                src="/imgLpIntroduction01.png"
                                alt="Image"
                                width={290}
                                height={196}
                                priority
                                style={{ maxWidth: 'none' }}
                                />
                                

                                <div className='py-7 px-[30px] '>
                                    <p className='text-[16px] font-bold tracking-wider leading-[24px] pb-7' style={{ fontFamily: "Noto Sans JP", fontWeight: 500 }}>男女問わず場所も問わない<br/>コロナ期のペアレンツバッグ</p>
                                    <p className='text-[12px] text-[#6c6c6c] leading-[24px]' style={{ fontFamily: "Noto Sans JP", fontWeight: 400 }}>【課題制作】多様性を掲げるバッグメーカー第一弾のブランディング戦略商品。詳細準備中。</p>
                                    <div className='flex flex-wrap-reverse mt-[12px] mb-[5px] gap-[12px]'>
                                    <BtnLikeSkillBlack>Photoshop</BtnLikeSkillBlack><br/>
                                    <BtnLikeSkillBlack>PowerPoint</BtnLikeSkillBlack>
                                    {/* <p className='text-[10px] text-black leading-[24px]' style={{ fontFamily: "Noto Sans JP", fontWeight: 400 }}>有限会社Ethica / 小売業</p> */}
                                    {/* <p className='text-[12px] text-[#6c6c6c] mt-3' style={{ fontFamily: "Noto Sans JP", fontWeight: 300 }}>立ち上げフェーズでの導入により、顧客対応満足度の高いUXの提供が可能に。<br/>Direction / Design / Coding</p> */}
                                </div>
                                
                                </div>
                            </div>
                            <Link href='/'>
                                    <Image
                                        src="/torightWhite.svg"
                                        alt="Icon"
                                        width={52}
                                        height={52}
                                        style={{ position: "absolute", top: "85%", left: "88%" }}
                                    />
                            </Link> 
                        </div>
                        
                        
                        
                        
                    </div>
                </div>
                
            </WorksTempWebSite>
            
       </div>
   
    ) 
}
