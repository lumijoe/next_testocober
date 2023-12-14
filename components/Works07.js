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

export default function Works07 () {
    return (
       <div>
            <WorksTemp>
                <div className='flex justify-center'>
                    <BtnLike className="bg-amber-400 rounded-bl-2xl"><span className='text-[18px] tracking-[3px]'>2023:</span>リハビリアプリ</BtnLike>
                </div>

                <div className='flex flex-col sm:flex-row justify-center'>
                    <div className='flex justify-center'> 
                        <div className='flex flex-row mb-8'>
                            <div className='w-[250px]'>
                                <h2 className='font-bold text-1xl'>レジリエンス向上のために</h2>
                                <p className='break-all mt-2 text-[12px] leading-6 text-[#696969] font-thin tracking-wider'>リハビリ通院をサポート。<br/>通院公共機関や天気情報をはじめ、主治医と共有したい症状メモ機能を搭載。アプリ１つで簡単に管理でき、リハビリに集中してもらう環境を整えるアプリです。</p>
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
                        </div>
                    </div>
                </div>
                <div className='bg-black w-full h-[15px] mt-8 z-40'></div>
            </WorksTemp>
       </div> 
    ) 
}