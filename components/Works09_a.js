// components/Works09_a.js
// パターン：デザイン、中央スクロール
// ブレークポイントsmMax639(639px以下)sm(640px以上)

import React from 'react';
import WorksTempWebSite from '../components/WorksTempWebSite';
import styles from '../styles/Footer.module.css';
import BtnLikeSkillBlack from './Button/BtnLikeSkillBlack';
import CommonImgTmb from '../components/Works/CommonImgTmb';
import Link from 'next/link';
import BtnLikeY8X12 from '../components/Button/BtnLikeY8X12'


// 01ウェブサイト
export default function Works09 () {
    return (
       <div className="relative">    
        {/* bodyの上に装飾 */}
        <div className={`absolute ${styles.section1} smMin553:opacity-0 smMax552:opacity-0 smMax453:top-[660px] smMax401:top-[697px] smMax351:opacity-0  relative`}></div>
       
        
        <div className='bg-[#e3e3e3] w-full h-[450px] bottom-[-35px] absolute '></div>
            <WorksTempWebSite
                categoryTitleRotate='WEB SITE'
                categoryTitleNum='01'
                categoryTitleName='ウェブサイト（現在編集中）'
                categoryText='フレームワーク〜カンプデザイン〜サーバーサイドまで一貫し、動的サイトもフルスタックに開発可能。XD, Figma, Next.js, Node.js, SQLite, Express など。'
            > 

            {/* ここから作品　============================================================================== */}

                <div className='flex flex-col-reverse h-auto justify-center'>
                    <div className='flex flex-row w-[100vw] pr-[calc(50%)] overflow-x-scroll overflow-auto 
                    smMax639:transform smMax639:translate-x-[50px]
                    sm:transform sm:translate-x-[50px]'>

                       
                        
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
                        </div>
                        {/* ポートフォリオサイト 
                        ============================================================================================ */}
                        <div className='flex flex-col justify-center relative mb-8 mr-8 bg-opacity-100'>
                            <BtnLikeY8X12 className='text-[12px] py-[7px] px-[36px] max-w-max'>
                                旧ポートフォリオサイト
                            </BtnLikeY8X12>
                            <Link href='http://design63.html.xdomain.jp'>
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
                                            2023/02-<br/>Web design / Planning / Develop / Coding /<br/>Deploy
                                        </p>
                                        <div className='flex flex-wrap-reverse mt-[12px] mb-[5px] gap-[12px]'>
                                            <BtnLikeSkillBlack>Vue.js</BtnLikeSkillBlack>
                                            <BtnLikeSkillBlack>選定中</BtnLikeSkillBlack>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </div>
                        
                        
                        {/* ランディングページ 
                        ============================================================================================ */}
                        <div className='flex flex-col justify-center relative mb-8 mr-8 bg-opacity-100'>
                            <BtnLikeY8X12 className='text-[12px] py-[7px] px-[36px] max-w-max'>
                                LP
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
                                            2023/02-<br/>Web design / Planning / Develop / Coding /<br/>Deploy
                                        </p>
                                        <div className='flex flex-wrap-reverse mt-[12px] mb-[5px] gap-[12px]'>
                                            <BtnLikeSkillBlack>Vue.js</BtnLikeSkillBlack>
                                            <BtnLikeSkillBlack>選定中</BtnLikeSkillBlack>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </div>
                        
                    </div>
                </div>
            {/* ここまで作品　============================================================================== */}
            </WorksTempWebSite> 
       </div>
   
    ) 
}
