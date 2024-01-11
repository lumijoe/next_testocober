// components/Works08.js
// パターン：デザイン、中央スクロール
// ブレークポイントsm:640px

import React from 'react';
import WorksTempWebSite from '../components/WorksTempWebSite';
import BtnLike from '../components/Button/BtnLike';
import BtnLikeSkillBlack from './Button/BtnLikeSkillBlack';
import CommonImgTmb from '../components/Works/CommonImgTmb';
import Image from 'next/image';
import Link from 'next/link';
import BtnLikeTitleWhite from './Button/BtnLikeTitleWhite';
import AttentionWorkDesignImg from '../components/Attention/AttentionWorkDesignImg';
import AttentionWorkDesignBefore from '../components/Attention/AttentionWorkDesignBefore';

export default function Works09 () {
    return (
       <div>
            <WorksTempWebSite
                categoryTitleRotate='WEB SITE & APP'
                categoryTitleNum='01'
                categoryTitleName='ウェブサイト / ウェブアプリ'
                categoryText='コミニティデザイン：産官学民領域で総合計画等に基づいたディレクションやグラフィック制作を担当。
                フィールドワークを通じた中長期プロジェクトの参画も含め、デザインの工程や種類を幅広く担当した事例です。
                -2014-2021 / 産官学民'
            >
                <div className='flex flex-col-reverse h-auto justify-center'>
                    <div className='flex flex-row w-[100vw] overflow-x-scroll overflow-auto'>
                        <div className='flex flex-col justify-center relative mb-8 mr-3'>
                        <BtnLikeTitleWhite className='text-sm'>To Do アプリ</BtnLikeTitleWhite>
                        <div className='h-[475px] w-[290px] bg-white' style={{ boxShadow: '0px 3px 6px rgba(0, 0, 0, 0.1)' }}>
                            <CommonImgTmb 
                            src="/img02.jpg"
                            alt="Image"
                            width={290}
                            height={196}
                            priority
                            style={{ maxWidth: 'none' }}
                            />
                            <Link href='/about'>
                                <Image
                                    src="/torightWhite.svg"
                                    alt="Icon"
                                    width={52}
                                    height={52}
                                    style={{ paddingTop: "25px", position: "absolute", top: "50%", left: "5%" }}
                                />
                            </Link>
                            <div className='py-6 px-4'>
                                <p className='text-1xl font-bold pb-4'>店舗初期のUX向上と<br/>管理課題をCMSで解決</p>
                                <p className='text-[14px] text-[#696969]'>Direction, Web Design, Code, Fullstack</p>
                                <p className='text-[12px] text-[#696969] text-inherit-50 pb-2'>会社情報/商品情報/ショッピング機能ほか</p>
                                <div className='flex flex-wrap-reverse mb-8 gap-[4px]'>
                                <BtnLikeSkillBlack>Illustrator</BtnLikeSkillBlack>
                                <BtnLikeSkillBlack>Photoshop</BtnLikeSkillBlack>
                                <BtnLikeSkillBlack>PowerPoint</BtnLikeSkillBlack>
                                <BtnLikeSkillBlack>Excel</BtnLikeSkillBlack>
                            </div>
                            </div>
                        </div>
                            
                        </div>
                        <div className='flex flex-col justify-center relative mb-8 mr-3'>
                        <BtnLikeTitleWhite className='text-sm'>グラフィック / ロゴほか</BtnLikeTitleWhite>
                            <CommonImgTmb 
                            src="/img06.jpg"
                            alt="Image"
                            width={360}
                            height={320}
                            priority
                            style={{ maxWidth: 'none' }}
                            />
                            <Link href='/about'>
                                <Image
                                    src="/torightWhite.svg"
                                    alt="Icon"
                                    width={52}
                                    height={52}
                                    style={{ paddingTop: "25px", position: "absolute", top: "50%", left: "5%" }}
                                />
                            </Link>
                            
                        </div>
                        <div className='flex flex-col justify-center relative mb-8 mr-3'>
                        <BtnLikeTitleWhite className='text-sm'>ストラテジック / 土地活用事業</BtnLikeTitleWhite>
                            <CommonImgTmb 
                            src="/workStrategy01.jpg"
                            alt="Image"
                            width={360}
                            height={320}
                            priority
                            style={{ maxWidth: 'none' }}
                            />
                            <AttentionWorkDesignImg />
                            <Link href='/about'>
                                <Image
                                    src="/torightWhite.svg"
                                    alt="Icon"
                                    width={52}
                                    height={52}
                                    style={{ paddingTop: "25px", position: "absolute", top: "50%", left: "5%" }}
                                />
                            </Link>
                        </div>
                        <div className='flex flex-col justify-center relative mb-8 mr-3'>
                        <BtnLikeTitleWhite className='text-sm'>ストラテジック / 産官開発事業</BtnLikeTitleWhite>
                            <CommonImgTmb 
                            src="/workStrategy02.jpg"
                            alt="Image"
                            width={360}
                            height={320}
                            priority
                            style={{ maxWidth: 'none' }}
                            />
                            <AttentionWorkDesignImg />
                            <Link href='/about'>
                                <Image
                                    src="/torightWhite.svg"
                                    alt="Icon"
                                    width={52}
                                    height={52}
                                    style={{ paddingTop: "25px", position: "absolute", top: "50%", left: "5%" }}
                                />
                            </Link>
                            
                        </div>

                        <div className='flex flex-col justify-center relative mb-8 mr-3'>
                            <BtnLikeTitleWhite className='text-sm'>スペース / ギフトショーブース内装</BtnLikeTitleWhite>
                            <CommonImgTmb 
                            src="/workSpace01.jpg"
                            alt="Image"
                            width={360}
                            height={320}
                            priority
                            style={{ maxWidth: 'none' }}
                            />
                            <Link href='/about'>
                                <Image
                                    src="/torightWhite.svg"
                                    alt="Icon"
                                    width={52}
                                    height={52}
                                    style={{ paddingTop: "25px", position: "absolute", top: "50%", left: "5%" }}
                                />
                            </Link>
                        </div>
                        
                        <div className='flex flex-col justify-center relative mb-8 mr-3'>
                            <BtnLikeTitleWhite className='text-sm'>スペース / 駅中店舗内装</BtnLikeTitleWhite>
                            <CommonImgTmb 
                            src="/workSpace02.jpg"
                            alt="Image"
                            width={360}
                            height={320}
                            priority
                            style={{ maxWidth: 'none' }}
                            />
                            <AttentionWorkDesignBefore />
                            <Link href='/about'>
                                <Image
                                    src="/torightWhite.svg"
                                    alt="Icon"
                                    width={52}
                                    height={52}
                                    style={{ paddingTop: "25px", position: "absolute", top: "50%", left: "5%" }}
                                />
                            </Link>
                            
                        </div>
                    </div>
                </div>
                <div className='bg-white w-full h-[15px] mt-8 z-40'></div>
            </WorksTempWebSite>
       </div> 
    ) 
}
