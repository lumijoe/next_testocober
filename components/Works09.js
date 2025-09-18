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
// import BtnLikeTitleWhite from './Button/BtnLikeTitleWhite';
// import AttentionWorkDesignImg from '../components/Attention/AttentionWorkDesignImg';
// import AttentionWorkDesignBefore from '../components/Attention/AttentionWorkDesignBefore';
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
        <div className='bg-[#e3e3e3] w-full h-[450px] bottom-[-35px] absolute '></div>
            <WorksTempWebSite
                categoryTitleRotate='WEB SITE & APP'
                categoryTitleNum='01'
                categoryTitleName='ウェブサイト / アプリ'
                categoryText='デザインから実装まで制作開発。Figma, Next.js, Word Pressなど。（2025年7月31日より一部メンテナンス中につき、接続できません）'
            > 

            {/* ここから作品　============================================================================== */}

                <div className='flex flex-col-reverse h-auto justify-center'>
                    <div className='flex flex-row w-[100vw] pr-[calc(50%)] overflow-x-scroll overflow-auto pl-[calc(50px)] sm:transform sm:translate-x-[50px]'>
                    {/* ↑<div className='flex flex-row w-[100vw] pr-[calc(50%)] overflow-x-scroll overflow-auto 
                    smMax639:transform smMax639:translate-x-[50px]
                    sm:transform sm:translate-x-[50px]'> */}

                        {/* ポートフォリオサイト 
                        ============================================================================================ 
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
                                    <p className='text-[12px] text-[#6c6c6c] leading-[24px]' style={{ fontFamily: "Noto Sans JP", fontWeight: 400 }}>詳細準備中<br/><br/></p>
                                    <div className='flex flex-wrap-reverse mt-[12px] mb-[5px] gap-[12px]'>
                                        <BtnLikeSkillBlack>XD</BtnLikeSkillBlack><br/>
                                        <BtnLikeSkillBlack>Next.js</BtnLikeSkillBlack>
                                        <BtnLikeSkillBlack>Photoshop</BtnLikeSkillBlack><br/>
                                        <BtnLikeSkillBlack>Vercel</BtnLikeSkillBlack>
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
                        */}
                        
                        {/* ポートフォリオサイト 
                        ============================================================================================ */}
                        <div className='flex flex-col justify-center relative mb-8 mr-8 bg-opacity-100'>
                            <BtnLikeY8X12 className='text-[12px] py-[7px] px-[36px] max-w-max'>
                                VPS選択サイト
                            </BtnLikeY8X12>
                            <Link href='https://game-vps.vercel.app/'>
                                <div className='h-auto w-[400px]'>
                                    <CommonImgTmb 
                                    src="/310264_7.png"
                                    alt="Image"
                                    width={400}
                                    height={264}
                                    priority
                                    style={{ maxWidth: 'none' }}
                                    />
                                    <div className='py-5 px-[30px] h-[320px] bg-white' style={{ boxShadow: '0px 3px 6px rgba(0, 0, 0, 0.1)', borderRadius: '0px 0px 4px 4px', overflow: 'hidden', position: 'relative' }} >
                                        <p className='text-[18px] font-bold tracking-wider leading-[36px] pb-5' style={{ fontFamily: "Noto Sans JP", fontWeight: 500 }}>
                                            プロト制作<br/>Claude CodeとFigma AIをVite + Reactでバイブコーディング
                                        </p>                                    
                                        <p className='text-[14px] text-[#6c6c6c] leading-[24px] pb-5' style={{ fontFamily: "Noto Sans JP", fontWeight: 300 }}>
                                            2025/8/15<br/>Vibe Coding / AI direction / Web design / Planning / Coding / Deploy
                                        </p>
                                        <div className='flex flex-wrap-reverse mt-[12px] mb-[5px] gap-[12px]'>
                                            <BtnLikeSkillBlack>Claude Code</BtnLikeSkillBlack>
                                            <BtnLikeSkillBlack>Figma</BtnLikeSkillBlack>
                                            <BtnLikeSkillBlack>Vite+React</BtnLikeSkillBlack>
                                            <BtnLikeSkillBlack>Vercel</BtnLikeSkillBlack>
                                            <BtnLikeSkillBlack>Tailwindcss</BtnLikeSkillBlack>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                            <Link href="https://game-vps.vercel.app/">
                                    <Image
                                        src="/torightWhite.svg"
                                        alt="Icon"
                                        width={52}
                                        height={52}
                                        style={{ position: "absolute", top: "88%", left: "91%" }}
                                    />
                            </Link> 
                        </div>

                        {/* コーポレートサイト 
                        ============================================================================================ */}
                        <div className='flex flex-col justify-center relative mb-8 mr-8 bg-opacity-100'>
                            <BtnLikeY8X12 className='text-[12px] py-[7px] px-[36px] max-w-max'>
                                製造業コーポレートサイト
                            </BtnLikeY8X12>
                            <Link href='https://lkcodetest.sakura.ne.jp/ind1221/'>
                                <div className='h-auto w-[400px]'>
                                    <CommonImgTmb 
                                    src="/310264_4.png"
                                    alt="Image"
                                    width={400}
                                    height={264}
                                    priority
                                    style={{ maxWidth: 'none' }}
                                    />
                                    <div className='py-5 px-[30px] h-[320px] bg-white' style={{ boxShadow: '0px 3px 6px rgba(0, 0, 0, 0.1)', borderRadius: '0px 0px 4px 4px', overflow: 'hidden', position: 'relative' }} >
                                        <p className='text-[18px] font-bold tracking-wider leading-[36px] pb-5' style={{ fontFamily: "Noto Sans JP", fontWeight: 500 }}>
                                            業務モックアップ制作<br/>Word Pressカスタムテーマ構築
                                        </p>                                    
                                        <p className='text-[14px] text-[#6c6c6c] leading-[24px] pb-5' style={{ fontFamily: "Noto Sans JP", fontWeight: 300 }}>
                                            2024-実装中<br/>Web design / Branding design / Planning / Coding / Deploy
                                        </p>
                                        <div className='flex flex-wrap-reverse mt-[12px] mb-[5px] gap-[12px]'>
                                            <BtnLikeSkillBlack>Figma</BtnLikeSkillBlack>
                                            <BtnLikeSkillBlack>Word Press(PHP)</BtnLikeSkillBlack>
                                            <BtnLikeSkillBlack>SCSS</BtnLikeSkillBlack>
                                            <BtnLikeSkillBlack>Bootstrap</BtnLikeSkillBlack>
                                            <BtnLikeSkillBlack>多言語/OR検索</BtnLikeSkillBlack>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                            <Link href="https://lkcodetest.sakura.ne.jp/ind1221/" target="_blank" rel="noopener noreferrer">
                                    <Image
                                        src="/torightWhite.svg"
                                        alt="Icon"
                                        width={52}
                                        height={52}
                                        style={{ position: "absolute", top: "88%", left: "91%" }}
                                    />
                            </Link> 
                        </div>

                        {/* コーポレートサイト 
                        ============================================================================================ */}
                        <div className='flex flex-col justify-center relative mb-8 mr-8 bg-opacity-100'>
                            <BtnLikeY8X12 className='text-[12px] py-[7px] px-[36px] max-w-max'>
                                不動産コーポレートサイト(要PWD①)
                            </BtnLikeY8X12>
                            <Link href='https://atrail.co.jp/'>
                                <div className='h-auto w-[400px]'>
                                    <CommonImgTmb 
                                    src="/310264_6.png"
                                    alt="Image"
                                    width={400}
                                    height={264}
                                    priority
                                    style={{ maxWidth: 'none' }}
                                    />
                                    <div className='py-5 px-[30px] h-[320px] bg-white' style={{ boxShadow: '0px 3px 6px rgba(0, 0, 0, 0.1)', borderRadius: '0px 0px 4px 4px', overflow: 'hidden', position: 'relative' }} >
                                        <p className='text-[18px] font-bold tracking-wider leading-[36px] pb-5' style={{ fontFamily: "Noto Sans JP", fontWeight: 500 }}>
                                            業務モックアップ制作(要PWD①)<br/>Word Pressカスタムテーマ構築
                                        </p>                                    
                                        <p className='text-[14px] text-[#6c6c6c] leading-[24px] pb-5' style={{ fontFamily: "Noto Sans JP", fontWeight: 300 }}>
                                            2024<br/>Web design(ロゴ以外) / Branding design / Planning / Coding / Deploy
                                        </p>
                                        <div className='flex flex-wrap-reverse mt-[12px] mb-[5px] gap-[12px]'>
                                            <BtnLikeSkillBlack>Figma</BtnLikeSkillBlack>
                                            <BtnLikeSkillBlack>Word Press(PHP)</BtnLikeSkillBlack>
                                            <BtnLikeSkillBlack>SCSS</BtnLikeSkillBlack>
                                            <BtnLikeSkillBlack>Bootstrap</BtnLikeSkillBlack>
                                            {/* <BtnLikeSkillBlack></BtnLikeSkillBlack> */}
                                        </div>
                                    </div>
                                </div>
                            </Link>
                            <Link href="https://atrail.co.jp/" target="_blank" rel="noopener noreferrer">
                                    <Image
                                        src="/torightWhite.svg"
                                        alt="Icon"
                                        width={52}
                                        height={52}
                                        style={{ position: "absolute", top: "88%", left: "91%" }}
                                    />
                            </Link> 
                        </div>

                        {/* ポートフォリオサイト 
                        ============================================================================================ */}
                        <div className='flex flex-col justify-center relative mb-8 mr-8 bg-opacity-100'>
                            <BtnLikeY8X12 className='text-[12px] py-[7px] px-[36px] max-w-max'>
                                現ポートフォリオサイト
                            </BtnLikeY8X12>
                            <Link href='/'>
                                <div className='h-auto w-[400px]'>
                                    <CommonImgTmb 
                                    src="/310264_3.png"
                                    alt="Image"
                                    width={400}
                                    height={264}
                                    priority
                                    style={{ maxWidth: 'none' }}
                                    />
                                    <div className='py-5 px-[30px] h-[320px] bg-white' style={{ boxShadow: '0px 3px 6px rgba(0, 0, 0, 0.1)', borderRadius: '0px 0px 4px 4px', overflow: 'hidden', position: 'relative' }} >
                                        <p className='text-[18px] font-bold tracking-wider leading-[36px] pb-5' style={{ fontFamily: "Noto Sans JP", fontWeight: 500 }}>
                                            個人制作<br/>Next.jsをVercelでデプロイ
                                        </p>                                    
                                        <p className='text-[14px] text-[#6c6c6c] leading-[24px] pb-5' style={{ fontFamily: "Noto Sans JP", fontWeight: 300 }}>
                                            2023/10-<br/>Web design / Branding design / Planning / Coding / Deploy
                                        </p>
                                        <div className='flex flex-wrap-reverse mt-[12px] mb-[5px] gap-[12px]'>
                                            <BtnLikeSkillBlack>XD</BtnLikeSkillBlack>
                                            <BtnLikeSkillBlack>Next.js</BtnLikeSkillBlack>
                                            <BtnLikeSkillBlack>Photoshop</BtnLikeSkillBlack>
                                            <BtnLikeSkillBlack>Vercel</BtnLikeSkillBlack>
                                            <BtnLikeSkillBlack>GSAP</BtnLikeSkillBlack>
                                            <BtnLikeSkillBlack>Tailwindcss</BtnLikeSkillBlack>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                            <Link href="/">
                                    <Image
                                        src="/torightWhite.svg"
                                        alt="Icon"
                                        width={52}
                                        height={52}
                                        style={{ position: "absolute", top: "88%", left: "91%" }}
                                    />
                            </Link> 
                        </div>

                        {/* アプリ 
                        ============================================================================================ */}
                        <div className='flex flex-col justify-center relative mb-8 mr-8 bg-opacity-100'>
                            <BtnLikeY8X12 className='text-[12px] py-[7px] px-[36px] max-w-max'>
                                息子用家バイト勤務管理アプリ
                            </BtnLikeY8X12>
                            <Link href='https://lumijoe.github.io/jobtime/'>
                                <div className='h-auto w-[400px]'>
                                    <CommonImgTmb 
                                    src="/310264_1.png"
                                    alt="Image"
                                    width={400}
                                    height={264}
                                    priority
                                    style={{ maxWidth: 'none' }}
                                    />
                                    <div className='py-5 px-[30px] h-[320px] bg-white' style={{ boxShadow: '0px 3px 6px rgba(0, 0, 0, 0.1)', borderRadius: '0px 0px 4px 4px', overflow: 'hidden', position: 'relative' }} >
                                        <p className='text-[18px] font-bold tracking-wider leading-[36px] pb-5' style={{ fontFamily: "Noto Sans JP", fontWeight: 500 }}>
                                            家族案件<br/>JSのFullCalendarを使用し<br/>削除や追加をフロントで保存
                                        </p>                                    
                                        <p className='text-[14px] text-[#6c6c6c] leading-[24px] pb-5' style={{ fontFamily: "Noto Sans JP", fontWeight: 300 }}>
                                            2022/01-開発中<br/>Web design / Planning / Develop / Coding / Deploy 
                                        </p>
                                        <div className='flex flex-wrap-reverse mt-[12px] mb-[5px] gap-[12px]'>
                                            <BtnLikeSkillBlack>FullCalendar</BtnLikeSkillBlack>
                                            <BtnLikeSkillBlack>HTML/CSS/JavaScript</BtnLikeSkillBlack>
                                            <BtnLikeSkillBlack>localStorage</BtnLikeSkillBlack>
                                            
                                        </div>
                                    </div>
                                </div>
                            </Link>
                            <Link href="https://lumijoe.github.io/jobtime/" target="_blank" rel="noopener noreferrer">
                                    <Image
                                        src="/torightWhite.svg"
                                        alt="Icon"
                                        width={52}
                                        height={52}
                                        style={{ position: "absolute", top: "88%", left: "91%" }}
                                    />
                            </Link> 
                        </div>

                                {/* コーポレートサイト 
                        ============================================================================================ */}
                        <div className='flex flex-col justify-center relative mb-8 mr-8 bg-opacity-100'>
                            <BtnLikeY8X12 className='text-[12px] py-[7px] px-[36px] max-w-max'>コーポレートサイト</BtnLikeY8X12>
                            <Link href='http://designguys.wp.xdomain.jp'>
                                <div className='h-auto w-[400px]' >
                                    <CommonImgTmb 
                                    src="/310264.png"
                                    alt="Image"
                                    width={400}
                                    height={264}
                                    priority
                                    style={{ maxWidth: 'none' }}
                                    />
                                    <CommonImgTmb 
                                    src="/310264_5.png"
                                    alt="Image"
                                    width={400}
                                    height={264}
                                    priority
                                    style={{ maxWidth: 'none', position: 'absolute', zIndex: 30, top: '101px' }}
                                    />
                                   
                                    <CommonImgTmb 
                                    src="/workWeb02.gif"
                                    alt="Image"
                                    width={356}
                                    height={264}
                                    priority
                                    style={{ maxWidth: 'none', position: 'absolute', zIndex: 20, top: '236px', left: '10px' }}
                                    />
                                    
                                    <div className='py-5 px-[30px] h-[320px] bg-white' style={{ boxShadow: '0px 3px 6px rgba(0, 0, 0, 0.1)', borderRadius: '0px 0px 4px 4px', overflow: 'hidden', position: 'relative' }} >
                                        <p className='text-[18px] font-bold tracking-wider leading-[36px] pb-5' style={{ fontFamily: "Noto Sans JP", fontWeight: 500 }}>課題制作(架空案件)<br/>小売業CMS「サスティナブル提案」</p>                                    
                                        <p className='text-[14px] text-[#6c6c6c] leading-[24px] pb-5' style={{ fontFamily: "Noto Sans JP", fontWeight: 300 }}>2022/12-2023/01<br/>Web design / Branding design / Planning / CMS / Deploy</p>
                                        <div className='flex flex-wrap-reverse mt-[12px] mb-[5px] gap-[12px]'>
                                            <BtnLikeSkillBlack>Photoshop</BtnLikeSkillBlack>
                                            <BtnLikeSkillBlack>WordPress</BtnLikeSkillBlack>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                            <Link href="http://designguys.wp.xdomain.jp" target="_blank" rel="noopener noreferrer">
                                    <Image
                                        src="/torightWhite.svg"
                                        alt="Icon"
                                        width={52}
                                        height={52}
                                        style={{ position: "absolute", top: "88%", left: "91%" }}
                                    />
                            </Link> 
                        </div>

                        {/* ポートフォリオサイト 
                        ============================================================================================ */}
                        <div className='flex flex-col justify-center relative mb-8 mr-8 bg-opacity-100'>
                            <BtnLikeY8X12 className='text-[12px] py-[7px] px-[36px] max-w-max'>
                                旧ポートフォリオサイト
                            </BtnLikeY8X12>
                            <Link href='https://lumijoe.github.io/xf_test01/'>
                                <div className='h-auto w-[400px]'>
                                    <CommonImgTmb 
                                    src="/310264_8.png"
                                    alt="Image"
                                    width={400}
                                    height={264}
                                    priority
                                    style={{ maxWidth: 'none' }}
                                    />
                                    <div className='py-5 px-[30px] h-[320px] bg-white' style={{ boxShadow: '0px 3px 6px rgba(0, 0, 0, 0.1)', borderRadius: '0px 0px 4px 4px', overflow: 'hidden', position: 'relative' }} >
                                        <p className='text-[18px] font-bold tracking-wider leading-[36px] pb-5' style={{ fontFamily: "Noto Sans JP", fontWeight: 500 }}>
                                            個人制作<br/>HTMLをXFREEでデプロイ
                                        </p>                                    
                                        <p className='text-[14px] text-[#6c6c6c] leading-[24px] pb-5' style={{ fontFamily: "Noto Sans JP", fontWeight: 300 }}>
                                            2022/10-2022/12<br/>Web design / Branding design / Planning / Coding / Deploy
                                        </p>
                                        <div className='flex flex-wrap-reverse mt-[12px] mb-[5px] gap-[12px]'>
                                            <BtnLikeSkillBlack>XD</BtnLikeSkillBlack>
                                            <BtnLikeSkillBlack>HTML</BtnLikeSkillBlack>
                                            <BtnLikeSkillBlack>CSS</BtnLikeSkillBlack>
                                            <BtnLikeSkillBlack>XFREE</BtnLikeSkillBlack>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                            <Link href="https://lumijoe.github.io/xf_test01/" target="_blank" rel="noopener noreferrer">
                                    <Image
                                        src="/torightWhite.svg"
                                        alt="Icon"
                                        width={52}
                                        height={52}
                                        style={{ position: "absolute", top: "88%", left: "91%" }}
                                    />
                            </Link> 
                        </div>
                        
                        
                        {/* アプリ 
                        ============================================================================================ */}
                        <div className='flex flex-col justify-center relative mb-8 mr-8 bg-opacity-100'>
                            <BtnLikeY8X12 className='text-[12px] py-[7px] px-[36px] max-w-max'>
                                通勤用ミニ家計簿アプリ
                            </BtnLikeY8X12>
                            <Link href='https://cashnyan-prototypever-3-2.onrender.com'>
                                <div className='h-auto w-[400px]'>
                                    <CommonImgTmb 
                                    src="/310264_10.png"
                                    alt="Image"
                                    width={400}
                                    height={264}
                                    priority
                                    style={{ maxWidth: 'none' }}
                                    />
                                    <div className='py-5 px-[30px] h-[320px] bg-white' style={{ boxShadow: '0px 3px 6px rgba(0, 0, 0, 0.1)', borderRadius: '0px 0px 4px 4px', overflow: 'hidden', position: 'relative' }} >
                                        <p className='text-[18px] font-bold tracking-wider leading-[36px] pb-5' style={{ fontFamily: "Noto Sans JP", fontWeight: 500 }}>
                                            家族案件<br/>Node.jsでサーバーサイドを構築しRender.comでデプロイ
                                        </p>                                    
                                        <p className='text-[14px] text-[#6c6c6c] leading-[24px] pb-5' style={{ fontFamily: "Noto Sans JP", fontWeight: 300 }}>
                                            2022/01-開発中<br/>Web design / Planning / Develop / Coding / Deploy 
                                        </p>
                                        <div className='flex flex-wrap-reverse mt-[12px] mb-[5px] gap-[12px]'>
                                            <BtnLikeSkillBlack>Next.js</BtnLikeSkillBlack>
                                            <BtnLikeSkillBlack>Express</BtnLikeSkillBlack>
                                            <BtnLikeSkillBlack>Bootstrap</BtnLikeSkillBlack>
                                            <BtnLikeSkillBlack>Node.js</BtnLikeSkillBlack>
                                            <BtnLikeSkillBlack>Render.com</BtnLikeSkillBlack>
                                            
                                        </div>
                                    </div>
                                </div>
                            </Link>
                            <Link href="https://cashnyan-prototypever-3-2.onrender.com" target="_blank" rel="noopener noreferrer">
                                    <Image
                                        src="/torightWhite.svg"
                                        alt="Icon"
                                        width={52}
                                        height={52}
                                        style={{ position: "absolute", top: "88%", left: "91%" }}
                                    />
                            </Link> 
                        </div>
                        
                        {/* アプリ 
                        ============================================================================================ */}
                        <div className='flex flex-col justify-center relative mb-8 mr-8 bg-opacity-100'>
                            <BtnLikeY8X12 className='text-[12px] py-[7px] px-[36px] max-w-max'>
                                リハビリサポートアプリ
                            </BtnLikeY8X12>
                            <Link href='/'>
                                <div className='h-auto w-[400px]'>
                                    <CommonImgTmb 
                                    src="/310264_0.png"
                                    alt="Image"
                                    width={400}
                                    height={264}
                                    priority
                                    style={{ maxWidth: 'none' }}
                                    />
                                    <div className='py-5 px-[30px] h-[320px] bg-white' style={{ boxShadow: '0px 3px 6px rgba(0, 0, 0, 0.1)', borderRadius: '0px 0px 4px 4px', overflow: 'hidden', position: 'relative' }} >
                                        <p className='text-[18px] font-bold tracking-wider leading-[36px] pb-5' style={{ fontFamily: "Noto Sans JP", fontWeight: 500 }}>
                                            家族案件<br/>通院に必要な天気や交通情報など「Re:BORN(リボーン)」
                                        </p>                                    
                                        <p className='text-[14px] text-[#6c6c6c] leading-[24px] pb-5' style={{ fontFamily: "Noto Sans JP", fontWeight: 300 }}>
                                            2022/11-2022/12<br/>Web design / Planning / Develop / Coding / Deploy
                                        </p>
                                        <div className='flex flex-wrap-reverse mt-[12px] mb-[5px] gap-[12px]'>
                                            <BtnLikeSkillBlack>Glide</BtnLikeSkillBlack>
                                            <BtnLikeSkillBlack>Vue.js</BtnLikeSkillBlack>
                                            <BtnLikeSkillBlack>Vuetify</BtnLikeSkillBlack>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </div>
                        
                        {/* アプリ 
                        ============================================================================================ */}
                        <div className='flex flex-col justify-center relative mb-8 mr-8 bg-opacity-100'>
                            <BtnLikeY8X12 className='text-[12px] py-[7px] px-[36px] max-w-max'>
                                Todoアプリ
                            </BtnLikeY8X12>
                            <Link href='https://github.com/lumijoe/vuetify_y_todo'>
                                <div className='h-auto w-[400px]'>
                                    <CommonImgTmb 
                                    src="/310264_0.png"
                                    alt="Image"
                                    width={400}
                                    height={264}
                                    priority
                                    style={{ maxWidth: 'none' }}
                                    />
                                    <div className='py-5 px-[30px] h-[320px] bg-white' style={{ boxShadow: '0px 3px 6px rgba(0, 0, 0, 0.1)', borderRadius: '0px 0px 4px 4px', overflow: 'hidden', position: 'relative' }} >
                                        <p className='text-[18px] font-bold tracking-wider leading-[36px] pb-5' style={{ fontFamily: "Noto Sans JP", fontWeight: 500 }}>
                                            個人制作<br/>旅行や家事準備をシンプルに管理
                                        </p>                                    
                                        <p className='text-[14px] text-[#6c6c6c] leading-[24px] pb-5' style={{ fontFamily: "Noto Sans JP", fontWeight: 300 }}>
                                            2023/01-<br/>Web design / Planning / Develop / Coding / Deploy
                                        </p>
                                        <div className='flex flex-wrap-reverse mt-[12px] mb-[5px] gap-[12px]'>
                                            <BtnLikeSkillBlack>Vue.js</BtnLikeSkillBlack>
                                            <BtnLikeSkillBlack>Vuetify</BtnLikeSkillBlack>
                                            <BtnLikeSkillBlack>Render.com</BtnLikeSkillBlack>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </div>
                        
                
                        
                        {/* ECサイト 
                        ============================================================================================ */}
                        <div className='flex flex-col justify-center relative mb-8 mr-8 bg-opacity-100'>
                            <BtnLikeY8X12 className='text-[12px] py-[7px] px-[36px] max-w-max'>
                                ECサイト
                            </BtnLikeY8X12>
                            <Link href='/'>
                                <div className='h-auto w-[400px]'>
                                    <CommonImgTmb 
                                    src="/310264_0.png"
                                    alt="Image"
                                    width={400}
                                    height={264}
                                    priority
                                    style={{ maxWidth: 'none' }}
                                    />
                                    <div className='py-5 px-[30px] h-[320px] bg-white' style={{ boxShadow: '0px 3px 6px rgba(0, 0, 0, 0.1)', borderRadius: '0px 0px 4px 4px', overflow: 'hidden', position: 'relative' }} >
                                        <p className='text-[18px] font-bold tracking-wider leading-[36px] pb-5' style={{ fontFamily: "Noto Sans JP", fontWeight: 500 }}>
                                            個人制作(架空案件)<br/>初期設計中です
                                        </p>                                    
                                        <p className='text-[14px] text-[#6c6c6c] leading-[24px] pb-5' style={{ fontFamily: "Noto Sans JP", fontWeight: 300 }}>
                                            2023/02-<br/>Web design / Planning / Develop / Coding / Deploy
                                        </p>
                                        <div className='flex flex-wrap-reverse mt-[12px] mb-[5px] gap-[12px]'>
                                            <BtnLikeSkillBlack>Vue.js</BtnLikeSkillBlack>
                                            <BtnLikeSkillBlack>選定中</BtnLikeSkillBlack>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </div>
                        
                        {/* コーポレートサイト 
                        ============================================================================================ */}
                        {/* <div className='flex flex-col justify-center relative mb-8 mr-8 bg-opacity-100'>
                            <BtnLikeY8X12 className='text-[12px] py-[7px] px-[36px] max-w-max'>コーポレートサイト</BtnLikeY8X12>
                            <Link href='/'>
                                <div className='h-auto w-[400px]' >
                                    <CommonImgTmb 
                                    src="/310264_7.png"
                                    alt="Image"
                                    width={400}
                                    height={264}
                                    priority
                                    style={{ maxWidth: 'none' }}
                                    />
                                    <CommonImgTmb 
                                    src="/workweb0202.gif"
                                    alt="Image"
                                    width={280}
                                    height={264}
                                    priority
                                    style={{ maxWidth: 'none', position: 'absolute', zIndex: 25, top: '248px', left: '50px' }}
                                    />
                                    <CommonImgTmb 
                                    src="/310264_5.png"
                                    alt="Image"
                                    width={400}
                                    height={264}
                                    priority
                                    style={{ maxWidth: 'none', position: 'absolute', zIndex: 30, top: '101px' }}
                                    />
                                   
                                    
                                    
                                    <div className='py-5 px-[30px] h-[320px] bg-white' style={{ boxShadow: '0px 3px 6px rgba(0, 0, 0, 0.1)', borderRadius: '0px 0px 4px 4px', overflow: 'hidden', position: 'relative' }} >
                                        <p className='text-[18px] font-bold tracking-wider leading-[36px] pb-5' style={{ fontFamily: "Noto Sans JP", fontWeight: 500 }}>課題制作(架空案件)<br/>小売業CMS「サスティナブル提案」</p>                                    
                                        <p className='text-[14px] text-[#6c6c6c] leading-[24px] pb-5' style={{ fontFamily: "Noto Sans JP", fontWeight: 300 }}>2022/12-2023/01<br/>Web design / Branding design / Planning / CMS / Deploy</p>
                                        <div className='flex flex-wrap-reverse mt-[12px] mb-[5px] gap-[12px]'>
                                            <BtnLikeSkillBlack>Photoshop</BtnLikeSkillBlack>
                                            <BtnLikeSkillBlack>WordPress</BtnLikeSkillBlack>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </div> */}
                             
                                    {/* <span style={{ content: "", display: 'block', borderLeft: '1px solid #e60010', height: '24px', position: 'absolute' }}></span> */}
                                    {/* <span style={{ content: "", display: 'block', borderLeft: '1.5px solid white', height: '233px', position: 'absolute', top: '180px', right: '4%' }}></span> */}
             
                    </div>
                </div>
            {/* ここまで作品　============================================================================== */}
            </WorksTempWebSite> 
       </div>
   
    ) 
}
