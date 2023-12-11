// components/Works06.js
// パターン：モバイル、左

import React from 'react';
import WorksTemp from '../components/WorksTemp';
import Btn from '../components/Button/Btn';
import BtnLikeSkillBlack from './Button/BtnLikeSkillBlack';
import CommonImgTmb from '../components/Works/CommonImgTmb';
import Image from 'next/image';
import Link from 'next/link';

export default function Works06 () {
    return (
       <div>
            <WorksTemp>
                <div className='pl-8'>
                    <Btn className="bg-red-400"><span className='text-[18px] tracking-[3px]'>2023:</span>リハビリアプリ</Btn>
                    <div className='flex flex-row mb-8'>
                        <div className='w-[250px] pr-8'>
                            <h2 className='font-bold text-1xl'>レジリエンス向上のために</h2>
                            <p className='break-all mt-2 text-[12px] leading-7 text-[#696969] font-thin tracking-wider'>リハビリ通院をサポート。<br/>通院公共機関や天気情報をはじめ、主治医と共有したい症状メモ機能を搭載。アプリ１つで簡単に管理でき、リハビリに集中してもらう環境を整えるアプリです。</p>
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

                 <div className='flex flex-row mr-8 h-auto'>
                    <div className=' ml-6 overflow-x-visible overflow-y-visible'>
                        <CommonImgTmb 
                        src="/img07tmb.png"
                        alt="Image"
                        width={262}
                        height={237}
                        priority
                        style={{ maxWidth: 'none', marginBottom: '-38px' }}
                        />
                    </div>
                    <div className='flex flex-col items-center h-full ml-[-20px]'>
                        <BtnLikeSkillBlack>Glide</BtnLikeSkillBlack>
                        <BtnLikeSkillBlack>Glide Sheet</BtnLikeSkillBlack>
                    </div>
                </div>
            </WorksTemp>
       </div> 
    ) 
}