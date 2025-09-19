// components/Works012.js
// パターン：デザイン、中央スクロール
// ブレークポイントsm:640px

import React from 'react';
import WorksTempWebSite from '../components/WorksTempWebSite';
import styles from '../styles/Footer.module.css';
import BtnLikeSkillBlack from './Button/BtnLikeSkillBlack';
import CommonImgTmb from '../components/Works/CommonImgTmb';
import Image from 'next/image';
import Link from 'next/link';
import BtnLikeY8X12 from '../components/Button/BtnLikeY8X12';
import LabelWorkType from '../components/Label/LabelWorkType';
import LabelWorkAssign from '../components/Label/LabelWorkAssign';


// 01ウェブサイト / アプリ
export default function Works12 () {
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
                categoryTitleRotate='WEB SITE, LP & BANNER'
                categoryTitleNum='02 : team'
                categoryTitleName='ウェブサイト / ランディングページ / バナー'
                categoryText='モックアップ以外の公式サイト案件です。担当分野や領域、ワイヤーフレームからサイトまでご紹介しています。'
            > 

            {/* ここから作品　============================================================================== */}

                <div className='flex flex-col-reverse h-auto justify-center'>
                    <div className='flex flex-row w-[100vw] pr-[calc(50%)] overflow-x-scroll overflow-auto pl-[calc(50px)] sm:transform sm:translate-x-[50px]'>
                    {/* ↑<div className='flex flex-row w-[100vw] pr-[calc(50%)] overflow-x-scroll overflow-auto 
                    smMax639:transform smMax639:translate-x-[50px]
                    sm:transform sm:translate-x-[50px]'> */}
                        

                        {/* コーポレートサイト 
                        ============================================================================================ */}
                        <div className='flex flex-col justify-center relative mb-8 mr-8 bg-opacity-100'>
                            <BtnLikeY8X12 className='text-[12px] py-[7px] px-[36px] max-w-max'>
                                製造業リニューアルサイト
                                <LabelWorkType type="work" />
                                <LabelWorkAssign type="team" />
                            </BtnLikeY8X12>
                            <Link href='https://worklist-for-pf.vercel.app/'>
                                <div className='h-auto w-[400px]'>
                                    <CommonImgTmb 
                                    src="/000.png"
                                    alt="Image"
                                    width={400}
                                    height={264}
                                    priority
                                    style={{ maxWidth: 'none' }}
                                    />
                                    <div className='py-5 px-[30px] h-[320px] bg-white' style={{ boxShadow: '0px 3px 6px rgba(0, 0, 0, 0.1)', borderRadius: '0px 0px 4px 4px', overflow: 'hidden', position: 'relative' }} >
                                        <p className='text-[18px] font-bold tracking-wider leading-[36px] pb-5' style={{ fontFamily: "Noto Sans JP", fontWeight: 500 }}>
                                            業務制作<br/>
                                        </p>                                    
                                        {/* <p className='text-[14px] text-[#6c6c6c] leading-[24px] pb-5' style={{ fontFamily: "Noto Sans JP", fontWeight: 300 }}>
                                            2024-実装途中<br/>Web design / Branding design / Planning / Coding / Deploy
                                        </p>
                                        <div className='flex flex-wrap-reverse mt-[12px] mb-[5px] gap-[12px]'>
                                            <BtnLikeSkillBlack>Figma</BtnLikeSkillBlack>
                                            <BtnLikeSkillBlack>Word Press(PHP)</BtnLikeSkillBlack>
                                            <BtnLikeSkillBlack>SCSS</BtnLikeSkillBlack>
                                            <BtnLikeSkillBlack>Bootstrap</BtnLikeSkillBlack>
                                            <BtnLikeSkillBlack>多言語/OR検索</BtnLikeSkillBlack>
                                        </div> */}
                                    </div>
                                </div>
                            </Link>
                            <Link href="https://worklist-for-pf.vercel.app/" target="_blank" rel="noopener noreferrer">
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
                                LP制作
                                <LabelWorkType type="work" />
                                <LabelWorkAssign type="team" />
                            </BtnLikeY8X12>
                            <Link href='https://worklist-for-pf.vercel.app/'>
                                <div className='h-auto w-[400px]'>
                                    <CommonImgTmb 
                                    src="/000.png"
                                    alt="Image"
                                    width={400}
                                    height={264}
                                    priority
                                    style={{ maxWidth: 'none' }}
                                    />
                                    <div className='py-5 px-[30px] h-[320px] bg-white' style={{ boxShadow: '0px 3px 6px rgba(0, 0, 0, 0.1)', borderRadius: '0px 0px 4px 4px', overflow: 'hidden', position: 'relative' }} >
                                        <p className='text-[18px] font-bold tracking-wider leading-[36px] pb-5' style={{ fontFamily: "Noto Sans JP", fontWeight: 500 }}>
                                            業務制作
                                        </p>                                    
                                        {/* <p className='text-[14px] text-[#6c6c6c] leading-[24px] pb-5' style={{ fontFamily: "Noto Sans JP", fontWeight: 300 }}>
                                            2024<br/>Web design(ロゴ以外) / Branding design / Planning / Coding / Deploy
                                        </p>
                                        <div className='flex flex-wrap-reverse mt-[12px] mb-[5px] gap-[12px]'>
                                            <BtnLikeSkillBlack>Figma</BtnLikeSkillBlack>
                                            <BtnLikeSkillBlack>Word Press(PHP)</BtnLikeSkillBlack>
                                            <BtnLikeSkillBlack>SCSS</BtnLikeSkillBlack>
                                            <BtnLikeSkillBlack>Bootstrap</BtnLikeSkillBlack>
                                            
                                        </div> */}
                                    </div>
                                </div>
                            </Link>
                            <Link href="https://worklist-for-pf.vercel.app/" target="_blank" rel="noopener noreferrer">
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
                                公式サイトデバッグ
                                <LabelWorkType type="work" />
                                <LabelWorkAssign type="team" />
                            </BtnLikeY8X12>
                            <Link href='https://worklist-for-pf.vercel.app/'>
                                <div className='h-auto w-[400px]'>
                                    <CommonImgTmb 
                                    src="/000.png"
                                    alt="Image"
                                    width={400}
                                    height={264}
                                    priority
                                    style={{ maxWidth: 'none' }}
                                    />
                                    <div className='py-5 px-[30px] h-[320px] bg-white' style={{ boxShadow: '0px 3px 6px rgba(0, 0, 0, 0.1)', borderRadius: '0px 0px 4px 4px', overflow: 'hidden', position: 'relative' }} >
                                        <p className='text-[18px] font-bold tracking-wider leading-[36px] pb-5' style={{ fontFamily: "Noto Sans JP", fontWeight: 500 }}>
                                            業務<br/>
                                        </p>                                    
                                        {/* <p className='text-[14px] text-[#6c6c6c] leading-[24px] pb-5' style={{ fontFamily: "Noto Sans JP", fontWeight: 300 }}>
                                            2024-実装途中<br/>Web design / Branding design / Planning / Coding / Deploy
                                        </p>
                                        <div className='flex flex-wrap-reverse mt-[12px] mb-[5px] gap-[12px]'>
                                            <BtnLikeSkillBlack>Figma</BtnLikeSkillBlack>
                                            <BtnLikeSkillBlack>Word Press(PHP)</BtnLikeSkillBlack>
                                            <BtnLikeSkillBlack>SCSS</BtnLikeSkillBlack>
                                            <BtnLikeSkillBlack>Bootstrap</BtnLikeSkillBlack>
                                            <BtnLikeSkillBlack>多言語/OR検索</BtnLikeSkillBlack>
                                        </div> */}
                                    </div>
                                </div>
                            </Link>
                            <Link href="https://worklist-for-pf.vercel.app/" target="_blank" rel="noopener noreferrer">
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
                                サイトリニューアル、過去記事引越、CMS開発
                                <LabelWorkType type="work" />
                                <LabelWorkAssign type="team" />
                            </BtnLikeY8X12>
                            <Link href='https://worklist-for-pf.vercel.app/'>
                                <div className='h-auto w-[400px]'>
                                    <CommonImgTmb 
                                    src="/000.png"
                                    alt="Image"
                                    width={400}
                                    height={264}
                                    priority
                                    style={{ maxWidth: 'none' }}
                                    />
                                    <div className='py-5 px-[30px] h-[320px] bg-white' style={{ boxShadow: '0px 3px 6px rgba(0, 0, 0, 0.1)', borderRadius: '0px 0px 4px 4px', overflow: 'hidden', position: 'relative' }} >
                                        <p className='text-[18px] font-bold tracking-wider leading-[36px] pb-5' style={{ fontFamily: "Noto Sans JP", fontWeight: 500 }}>
                                            業務制作<br/>
                                        </p>                                    
                                        {/* <p className='text-[14px] text-[#6c6c6c] leading-[24px] pb-5' style={{ fontFamily: "Noto Sans JP", fontWeight: 300 }}>
                                            2024-実装途中<br/>Web design / Branding design / Planning / Coding / Deploy
                                        </p>
                                        <div className='flex flex-wrap-reverse mt-[12px] mb-[5px] gap-[12px]'>
                                            <BtnLikeSkillBlack>Figma</BtnLikeSkillBlack>
                                            <BtnLikeSkillBlack>Word Press(PHP)</BtnLikeSkillBlack>
                                            <BtnLikeSkillBlack>SCSS</BtnLikeSkillBlack>
                                            <BtnLikeSkillBlack>Bootstrap</BtnLikeSkillBlack>
                                            <BtnLikeSkillBlack>多言語/OR検索</BtnLikeSkillBlack>
                                        </div> */}
                                    </div>
                                </div>
                            </Link>
                            <Link href="https://worklist-for-pf.vercel.app/" target="_blank" rel="noopener noreferrer">
                                    <Image
                                        src="/torightWhite.svg"
                                        alt="Icon"
                                        width={52}
                                        height={52}
                                        style={{ position: "absolute", top: "88%", left: "91%" }}
                                    />
                            </Link> 
                        </div>

                        
                    </div>
                </div>
            {/* ここまで作品　============================================================================== */}
            </WorksTempWebSite>
       </div>
    )
}
