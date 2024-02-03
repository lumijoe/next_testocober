// components/Works09.js
// パターン：デザイン、中央スクロール
// ブレークポイントsm:640px

import React from 'react';
import WorksTempWebSite from '../components/WorksTempWebSite';
import styles from '../styles/Footer.module.css';
import BtnLikeSkillBlack from './Button/BtnLikeSkillBlack';
import CommonImgTmb from '../components/Works/CommonImgTmb';
import Image from 'next/image';
import Link from 'next/link';
import BtnLikeTitleWhite from './Button/BtnLikeTitleWhite';
import AttentionWorkDesignImg from '../components/Attention/AttentionWorkDesignImg';
import AttentionWorkDesignBefore from '../components/Attention/AttentionWorkDesignBefore';
import BtnLikeY8X12 from '../components/Button/BtnLikeY8X12'


// 01ウェブサイト / アプリ
export default function Works09 () {
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
                categoryTitleRotate='WEB SITE & APP'
                categoryTitleNum='01'
                categoryTitleName='ウェブサイト / アプリ'
                categoryText='デザインからサーバーサイドまで、動的サイトもフルスタックに開発可能。XD, Next.js, Node.js, SQLite, Express など。(24’2月末頃を目処に掲載予定)'
            > 

            {/* ここから作品　============================================================================== */}

                <div className='flex flex-col-reverse h-auto justify-center'>
                    <div className='flex flex-row w-[100vw] pr-[calc(50%)] overflow-x-scroll overflow-auto smMax639:transform smMax639:translate-x-[calc(50%-145px)]'>

                        {/* ポートフォリオサイト 
                        ============================================================================================ */}
                        <div className='flex flex-col justify-center relative mb-8 mr-8'>
                            <BtnLikeY8X12 className='text-[12px] py-[7px] px-[36px] max-w-max'>ポートフォリオサイト</BtnLikeY8X12>

                            <div className='h-auto w-[290px] bg-white' style={{ boxShadow: '0px 3px 6px rgba(0, 0, 0, 0.1)', borderRadius: '4px', overflow: 'hidden', position: 'relative' }}>
                                <CommonImgTmb 
                                src="/workWeb03.png"
                                alt="Image"
                                width={290}
                                height={196}
                                priority
                                style={{ maxWidth: 'none' }}
                                />
                                
                                <div className='py-7 px-[30px] '>
                                    <p className='text-[16px] font-bold tracking-wider leading-[24px] pb-7' style={{ fontFamily: "Noto Sans JP", fontWeight: 500 }}>開発中<br/>こちらのサイトです</p>
                                    <p className='text-[12px] text-[#6c6c6c] leading-[24px]' style={{ fontFamily: "Noto Sans JP", fontWeight: 400 }}>詳細準備中<br/><br/><br/></p>
                                    <div className='flex flex-wrap-reverse mt-[12px] mb-[5px] gap-[12px]'>
                                    <BtnLikeSkillBlack className={'mr-8'}>Excel</BtnLikeSkillBlack>
                                    <BtnLikeSkillBlack className={'mr-8'}>PowerPoint</BtnLikeSkillBlack>
                                    {/* <p className='text-[10px] text-black leading-[24px]' style={{ fontFamily: "Noto Sans JP", fontWeight: 400 }}>有限会社Ethica / 小売業</p> */}
                                    {/* <p className='text-[12px] text-[#6c6c6c] mt-3' style={{ fontFamily: "Noto Sans JP", fontWeight: 300 }}>立ち上げフェーズでの導入により、顧客対応満足度の高いUXの提供が可能に。<br/>Direction / Design / Coding</p> */}
                                </div>
                                
                                </div>
                            </div>
                            <Link href='/design03'>
                                    <Image
                                        src="/torightWhite.svg"
                                        alt="Icon"
                                        width={52}
                                        height={52}
                                        style={{ position: "absolute", top: "85%", left: "88%" }}
                                    />
                            </Link> 
                        </div>

                        <div className='flex flex-col justify-center relative mb-8 mr-8'>
                            <BtnLikeY8X12 className='text-[12px] py-[7px] px-[36px] max-w-max'>ポートフォリオサイト</BtnLikeY8X12>

                            <div className='h-auto w-[290px] bg-white items-center  justify-center' style={{ boxShadow: '0px 3px 6px rgba(0, 0, 0, 0.1)', borderRadius: '4px', overflow: 'hidden', position: 'relative' }}>
                                <CommonImgTmb 
                                src="/img07tmb.png"
                                alt="Image"
                                width={265}
                                height={196}
                                priority
                                style={{ maxWidth: 'none', paddingLeft: '30px', paddingTop: '10px' }}
                                />
                                
                                <div className='py-7 px-[30px] '>
                                    <p className='text-[16px] font-bold tracking-wider leading-[24px] pb-7' style={{ fontFamily: "Noto Sans JP", fontWeight: 500 }}>開発中<br/>こちらのサイトです</p>
                                    <p className='text-[12px] text-[#6c6c6c] leading-[24px]' style={{ fontFamily: "Noto Sans JP", fontWeight: 400 }}>詳細準備中</p>
                                    <div className='flex flex-wrap-reverse mt-[12px] mb-[5px] gap-[12px]'>
                                    <BtnLikeSkillBlack>XD</BtnLikeSkillBlack><br/>
                                    <BtnLikeSkillBlack>Next.js</BtnLikeSkillBlack>
                                    <BtnLikeSkillBlack>Photoshop</BtnLikeSkillBlack><br/>
                                    <BtnLikeSkillBlack>Vercel</BtnLikeSkillBlack>
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
                        
                        
                        {/* コーポレートサイト 
                        ============================================================================================ */}
                        <div className='flex flex-col justify-center relative mb-8 mr-8'>
                            <BtnLikeY8X12 className='text-[12px] py-[7px] px-[36px] max-w-max'>コーポレートサイト</BtnLikeY8X12>

                            <div className='h-auto w-[290px] bg-white' style={{ boxShadow: '0px 3px 6px rgba(0, 0, 0, 0.1)', borderRadius: '4px', overflow: 'hidden', position: 'relative' }}>
                                <CommonImgTmb 
                                src="/workWeb01.png"
                                alt="Image"
                                width={280}
                                height={156}
                                priority
                                style={{ maxWidth: 'none', paddingLeft: '3px', paddingTop: '30px' }}
                                />
                                
                                <div className='py-7 px-[30px] '>
                                    <p className='text-[16px] font-bold tracking-wider leading-[24px] pb-7' style={{ fontFamily: "Noto Sans JP", fontWeight: 500 }}>店舗初期のUX向上と<br/>管理課題をCMSで解決</p>
                                    <p className='text-[12px] text-[#6c6c6c] leading-[24px]' style={{ fontFamily: "Noto Sans JP", fontWeight: 400 }}>【課題制作】企業ブランドを発信しながらイベント体験のUX向上と、ブログ管理の脱属人化を目指す。</p>
                                    <div className='flex flex-wrap-reverse mt-[12px] mb-[5px] gap-[12px]'>
                                    <BtnLikeSkillBlack>Photoshop</BtnLikeSkillBlack><br/>
                                    <BtnLikeSkillBlack>WordPress</BtnLikeSkillBlack>
                                    {/* <p className='text-[10px] text-black leading-[24px]' style={{ fontFamily: "Noto Sans JP", fontWeight: 400 }}>有限会社Ethica / 小売業</p> */}
                                    {/* <p className='text-[12px] text-[#6c6c6c] mt-3' style={{ fontFamily: "Noto Sans JP", fontWeight: 300 }}>立ち上げフェーズでの導入により、顧客対応満足度の高いUXの提供が可能に。<br/>Direction / Design / Coding</p> */}
                                </div>
                                
                                </div>
                            </div>
                            <Link href='http://designguys.wp.xdomain.jp/'>
                                    <Image
                                        src="/torightWhite.svg"
                                        alt="Icon"
                                        width={52}
                                        height={52}
                                        style={{ position: "absolute", top: "85%", left: "88%" }}
                                    />
                            </Link> 
                        </div>
                        
                        {/* 
                        ============================================================================================ */}

                    </div>
                </div>
            {/* ここまで作品　============================================================================== */}

            </WorksTempWebSite>
            
       </div>
   
    ) 
}
