// components/Works07.js

import React from 'react';
import WorksTemp from '../components/WorksTemp';
import Btn from '../components/Button/Btn';
import BtnLikeSkillBlack from './Button/BtnLikeSkillBlack';
import CommonImgTmb from '../components/Works/CommonImgTmb';
import Image from 'next/image';
import Link from 'next/link';

export default function Works07 () {
    return (
       <div>
            <WorksTemp>
                <Btn className="bg-amber-400">2023:旅行アプリ</Btn>
                <div className='flex-row mb-8'>
                    <div className='flex'>
                        <div className='w-[275px] pr-8'>
                            <h2 className='font-bold text-1xl'>レジリエンス向上のために</h2>
                            <p className='break-all mt-2 text-[12px] leading-6 text-[#696969] font-thin tracking-wider'>リハビリ通院をサポート。<br/>通院公共機関や天気情報をはじめ、主治医と共有したい症状メモ機能を搭載。
                            <br/>アプリ１つで簡単に管理でき、リハビリに集中してもらう環境を整えるアプリです。</p>
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
                <div className='flex-row'>
                    <div className='flex'>
                        
                        <CommonImgTmb 
                        src="/img07tmb.png"
                        alt="Image"
                        width={262}
                        height={237}
                        priority
                        />
                        <div className='flex flex-col items-center h-full'>
                            <BtnLikeSkillBlack>Glide</BtnLikeSkillBlack>
                            <BtnLikeSkillBlack>Glide Sheet</BtnLikeSkillBlack>
                        </div>
                    </div>
                </div>
            </WorksTemp>
       </div> 
    ) 
}