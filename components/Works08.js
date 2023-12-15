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
                    <BtnLike className="bg-gray-400 rounded-bl-2xl"><span className='text-[18px] tracking-[3px]'>2014-2021:</span>デザイン</BtnLike>
                </div>

                <div className='flex flex-col sm:flex-col justify-center w-[100vw]'>
                    <div className='flex justify-center'> 
                        <div className='flex flex-col mb-8'>
                            <div className='w-[250px]'>
                                <h2 className='font-bold text-1xl'>継続的解決を設計</h2>
                                <p className='break-all mt-2 text-[12px] leading-6 text-[#696969] font-thin tracking-wider'>リハビリ通院をサポート。<br/>通院公共機関や天気情報をはじめ、主治医と共有したい症状メモ機能を搭載。アプリ１つでloremloremlorem簡単に管理でき、リハビリに集中してもらう環境を整えるアプリです。</p>
                            </div>
                            
                        </div>
                    </div>
                    <div className='flex flex-col items-center mb-8'>
                            <BtnLikeSkillBlack>Illustrator</BtnLikeSkillBlack>
                            <BtnLikeSkillBlack>Photoshop</BtnLikeSkillBlack>
                            <BtnLikeSkillBlack>PowerPoint</BtnLikeSkillBlack>
                            <BtnLikeSkillBlack>Excel</BtnLikeSkillBlack>
                            etc...
                    </div>
                </div>
                
                <div className='flex flex-col-reverse h-auto justify-center'>
                    <div className='flex flex-row w-[100vw] overflow-x-scroll overflow-auto'>
                        <div className='flex flex-col justify-center relative'>
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
                                    src="/torightWhite.svg"
                                    alt="Icon"
                                    width={52}
                                    height={52}
                                    style={{ paddingTop: "25px", position: "absolute", top: "50%", left: "5%" }}
                                />
                            </Link>
                            <p className='self-center text-xl py-5'>Graphic</p>
                        </div>
                        <div className='flex flex-col justify-center relative'>
                            <CommonImgTmb 
                            src="/img06.jpg"
                            alt="Image"
                            width={262}
                            height={237}
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
                            <p className='self-center text-xl py-5'>Direction</p>
                        </div>
                        <div className='flex flex-col justify-center relative'>
                            <CommonImgTmb 
                            src="/img05.jpg"
                            alt="Image"
                            width={262}
                            height={237}
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
                            <p className='self-center text-xl py-5'>Contents</p>
                        </div>
                        <div className='flex flex-col justify-center relative'>
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
                                    src="/torightWhite.svg"
                                    alt="Icon"
                                    width={52}
                                    height={52}
                                    style={{ paddingTop: "25px", position: "absolute", top: "50%", left: "5%" }}
                                />
                            </Link>
                            <p className='self-center text-xl py-5'>Direction</p>
                        </div>
                        <div className='flex flex-col justify-center relative'>
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
                                    src="/torightWhite.svg"
                                    alt="Icon"
                                    width={52}
                                    height={52}
                                    style={{ paddingTop: "25px", position: "absolute", top: "50%", left: "5%" }}
                                />
                            </Link>
                            <p className='self-center text-xl py-5'>Space</p>
                        </div>
                        <div className='flex flex-col justify-center relative'>
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
                                    src="/torightWhite.svg"
                                    alt="Icon"
                                    width={52}
                                    height={52}
                                    style={{ paddingTop: "25px", position: "absolute", top: "50%", left: "5%" }}
                                />
                            </Link>
                            <p className='self-center text-xl py-5'>Graphic</p>
                        </div>
                        <div className='flex flex-col justify-center relative'>
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
                                    src="/torightWhite.svg"
                                    alt="Icon"
                                    width={52}
                                    height={52}
                                    style={{ paddingTop: "25px", position: "absolute", top: "50%", left: "5%" }}
                                />
                            </Link>
                            <p className='self-center text-xl py-5'>Graphic</p>
                        </div>
                    </div>
                </div>
                <div className='bg-white w-full h-[15px] mt-8 z-40'></div>
            </WorksTemp>
       </div> 
    ) 
}