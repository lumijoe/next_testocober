// components/Works10_a.js
// パターン：デザイン、中央スクロール
// ブレークポイントsmMax639(639px以下)sm(640px以上)

import React from 'react';
import WorksTempWebSite from '../components/WorksTempWebSite';
import styles from '../styles/Footer.module.css';
import BtnLikeSkillBlack from './Button/BtnLikeSkillBlack';
import CommonImgTmb from '../components/Works/CommonImgTmb';
import Image from 'next/image';
import Link from 'next/link';
import BtnLikeY8X12 from '../components/Button/BtnLikeY8X12'

// 02ウェブアプリ
export default function Works10 () {
    return (
       <div className="relative">   
        {/* bodyの上に装飾 */}
        <div className={`absolute ${styles.section1} smMin553:opacity-0 smMax552:opacity-0 smMax453:top-[660px] smMax401:top-[697px] smMax351:opacity-0  relative`}></div>
        
        <div className='bg-[#e3e3e3] w-full h-[400px] bottom-[-35px] absolute '></div>
            <WorksTempWebSite
                categoryTitleRotate='WEB APP'
                categoryTitleNum='02'
                categoryTitleName='ウェブアプリ（現在編集中）'
                categoryText='課題解決を目的に継続的アクセスを促すべく、視覚的心理的アプローチでUI,UXに注力。ノーコード開発やフレームワークを使用した実装も対応。' 
            >

                {/* ここから作品
                　============================================================================== */}
            
                <div className='flex flex-col-reverse h-auto justify-center'>
                    <div className='flex flex-row w-[100vw] pr-[calc(50%)] overflow-x-scroll overflow-auto 
                    smMax639:transform smMax639:translate-x-[50px]
                    sm:transform sm:translate-x-[50px] '>

                        {/* アプリ 
                        ============================================================================================ */}
                        <div className='flex flex-col justify-center relative mb-8 mr-8 bg-opacity-100'>
                            <BtnLikeY8X12 className='text-[12px] py-[7px] px-[36px] max-w-max'>
                                通勤用ミニ家計簿アプリ（プロトタイプβ）
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
                                            家族案件<br/>Node.jsでサーバーサイドを構築<br/>React実装をRender.comでデプロイ
                                        </p>                                    
                                        <p className='text-[14px] text-[#6c6c6c] leading-[24px] pb-5' style={{ fontFamily: "Noto Sans JP", fontWeight: 300 }}>
                                            2023/10-開発中<br/>Web design / Planning / Develop / Coding / Deploy 
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
                                            個人制作<br/>旅行や家事準備をシンプルに管理<br/>Vue実装をRender.comでデプロイ
                                        </p>                                    
                                        <p className='text-[14px] text-[#6c6c6c] leading-[24px] pb-5' style={{ fontFamily: "Noto Sans JP", fontWeight: 300 }}>
                                            2024/02-<br/>Web design / Planning / Develop / Coding / Deploy
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
                        
                        {/* アプリ 
                        ============================================================================================ */}
                        <div className='flex flex-col justify-center relative mb-8 mr-8 bg-opacity-100'>
                            <BtnLikeY8X12 className='text-[12px] py-[7px] px-[36px] max-w-max'>
                                リハビリサポートアプリ（プロトタイプα）
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
                                            家族案件<br/>通院に必要な天気や交通情報など<br/>ノーコード開発
                                        </p>                                    
                                        <p className='text-[14px] text-[#6c6c6c] leading-[24px] pb-5' style={{ fontFamily: "Noto Sans JP", fontWeight: 300 }}>
                                            2022/11-2022/12<br/>Planning / Glide Develop
                                        </p>
                                        <div className='flex flex-wrap-reverse mt-[12px] mb-[5px] gap-[12px]'>
                                            <BtnLikeSkillBlack>Glide</BtnLikeSkillBlack>
                                           
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </div>

                        {/* アプリ 
                        ============================================================================================ */}
                        <div className='flex flex-col justify-center relative mb-8 mr-8 bg-opacity-100'>
                            <BtnLikeY8X12 className='text-[12px] py-[7px] px-[36px] max-w-max'>
                                通勤用ミニ家計簿アプリ（プロトタイプα）
                            </BtnLikeY8X12>
                            <Link href='https://cashnyan-prototypever-3-2.onrender.com'>
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
                                            家族案件<br/>通勤用の細かい収支を管理<br/>ノーコード開発
                                        </p>                                    
                                        <p className='text-[14px] text-[#6c6c6c] leading-[24px] pb-5' style={{ fontFamily: "Noto Sans JP", fontWeight: 300 }}>
                                            2022/01-2022/02<br/>Planning / Glide Develop
                                        </p>
                                        <div className='flex flex-wrap-reverse mt-[12px] mb-[5px] gap-[12px]'>
                                            <BtnLikeSkillBlack>Glide</BtnLikeSkillBlack>
                                            
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </div>
                        
                    </div>
                </div>
                
            </WorksTempWebSite>
            
       </div>
   
    ) 
}
