// components/Works07.js
// パターン：モバイル、左
// ブレークポイントsm:640px

import React from 'react';
import WorksTemp from '../components/WorksTemp';
import BtnLike from '../components/Button/BtnLike';
import BtnLikeSkillBlack from './Button/BtnLikeSkillBlack';
import CommonImgTmb from '../components/Works/CommonImgTmb';
import Image from 'next/image';
import Link from 'next/link';

export default function Works03 () {
    return (
       <div>
            <WorksTemp>
                <div className='flex justify-center'>
                    <BtnLike className="bg-blue-500"><span className='text-[18px] tracking-[3px]'>2023:</span>収支管理アプリ</BtnLike>
                </div>

                <div className='flex flex-col sm:flex-row justify-center'>
                    <div className='flex justify-center'> 
                        <div className='flex flex-row mb-8'>
                            <div className='w-[250px]'>
                                <h2 className='font-bold text-1xl'>収支を楽しい習慣にするために</h2>
                                <p className='break-all mt-2 text-[12px] leading-6 text-[#696969] font-thin tracking-wider'>通勤の小さな収支管理をサポート<br/>通院公共機関や天気情報をはじめ、毎日開きたくなるアプリを目指し趣味画像も登録可能。楽しみながら収支管理が整うアプリです。</p>
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

                    <div className='flex flex-row h-auto justify-center ss:flex-col-reverse'>
                        <div className='  overflow-visible'>
                            <CommonImgTmb 
                            src="/img07tmb.png"
                            alt="Image"
                            width={262}
                            height={237}
                            priority
                            style={{ maxWidth: 'none', marginBottom: '-38px' }}
                            />
                        </div>
                        <div className='flex flex-col items-center pt-[20%]  ss:ml-[-80px] ss:pt-0 z-20'>
                            <BtnLikeSkillBlack>Glide</BtnLikeSkillBlack>
                            <BtnLikeSkillBlack>GlideTables</BtnLikeSkillBlack>
                        </div>
                    </div>
                </div>
            </WorksTemp>
       </div> 
    ) 
}