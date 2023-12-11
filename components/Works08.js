// components/Works08.js
// パターン：デザイン、中央スクロール
// ブレークポイントsm:640px

import React from 'react';
import WorksTemp from '../components/WorksTemp';
import BtnLike from '../components/Button/BtnLike';
import BtnLikeSkillBlack from './Button/BtnLikeSkillBlack';
import CommonImgTmb from '../components/Works/CommonImgTmb';
import Image from 'next/image';
import Link from 'next/link';

export default function Works08 () {
    return (
       <div>
            <WorksTemp>
                <div className='flex justify-center'>
                    <BtnLike className="bg-gray-400"><span className='text-[18px] tracking-[3px]'>2014-2021:</span>デザイン</BtnLike>
                </div>

                <div className='flex flex-col sm:flex-row justify-center'>
                    <div className='flex justify-center'> 
                        <div className='flex flex-row mb-8'>
                            <div className='w-[250px]'>
                                <h2 className='font-bold text-1xl'>継続的解決を設計</h2>
                                <p className='break-all mt-2 text-[12px] leading-6 text-[#696969] font-thin tracking-wider'>リハビリ通院をサポート。<br/>通院公共機関や天気情報をはじめ、主治医と共有したい症状メモ機能を搭載。アプリ１つでloremloremlorem簡単に管理でき、リハビリに集中してもらう環境を整えるアプリです。</p>
                            </div>
                            <Link href='/about'>
                                <Image
                                    src="/toright.svg"
                                    alt="Icon"
                                    width={72}
                                    height={72}
                                    style={{ paddingTop: "25px" }}
                                />
                            </Link>
                        </div>
                    </div>

                    <div className='flex flex-col-reverse h-auto justify-center'>
                        <div className='flex flex-row overflow-x-scroll'>
                            <div className='flex flex-col justify-center relative'>
                                <p className='self-center'>Graphic</p>
                                <CommonImgTmb 
                                src="/img02.jpg"
                                alt="Image"
                                width={262}
                                height={237}
                                priority
                                style={{ maxWidth: 'none' }}
                                />
                                <Link href='/about'>
                                    <Image
                                        src="/toright.svg"
                                        alt="Icon"
                                        width={72}
                                        height={72}
                                        style={{ paddingTop: "25px", position: "absolute", top: "50%" }}
                                    />
                                </Link>
                            </div>
                            <div className='flex flex-col justify-center'>
                                <p className='self-center'>Graphic</p>
                                <CommonImgTmb 
                                src="/img02.jpg"
                                alt="Image"
                                width={262}
                                height={237}
                                priority
                                style={{ maxWidth: 'none' }}
                                />
                            </div>
                            <div className='flex flex-col justify-center'>
                                <p className='self-center'>Graphic</p>
                                <CommonImgTmb 
                                src="/img02.jpg"
                                alt="Image"
                                width={262}
                                height={237}
                                priority
                                style={{ maxWidth: 'none' }}
                                />
                            </div>
                            <div className='flex flex-col justify-center'>
                                <p className='self-center'>Graphic</p>
                                <CommonImgTmb 
                                src="/img02.jpg"
                                alt="Image"
                                width={262}
                                height={237}
                                priority
                                style={{ maxWidth: 'none' }}
                                />
                            </div>
                            <div className='flex flex-col justify-center'>
                                <p className='self-center'>Graphic</p>
                                <CommonImgTmb 
                                src="/img02.jpg"
                                alt="Image"
                                width={262}
                                height={237}
                                priority
                                style={{ maxWidth: 'none' }}
                                />
                            </div>
                        </div>
                        <div className='flex flex-col items-center'>
                            <BtnLikeSkillBlack>Illustrator</BtnLikeSkillBlack>
                            <BtnLikeSkillBlack>Photoshop</BtnLikeSkillBlack>
                            <BtnLikeSkillBlack>PowerPoint</BtnLikeSkillBlack>
                            <BtnLikeSkillBlack>Excel</BtnLikeSkillBlack>
                            etc...
                        </div>
                    </div>
                </div>
            </WorksTemp>
       </div> 
    ) 
}