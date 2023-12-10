// components/Works05.js

import React from 'react';
import WorksTemp from '../components/WorksTemp';
import Btn from '../components/Button/Btn';
import BtnSkillBlack from './Button/BtnSkillBlack';
import CommonImgTmb from '../components/Works/CommonImgTmb';
import Image from 'next/image';
import Link from 'next/link';

export default function Works05 () {
    return (
       <div>
            <WorksTemp>
                <Btn className="bg-emerald-600 ">2023:ECサイト</Btn>
                <div className='flex-row mb-8'>
                    <div className='flex'>
                        <div className='w-[275px] pr-8'>
                            <h2 className='font-semibold text-1xl'>エシカル体験のために</h2>
                            <p className='break-all mt-2 text-[12px] leading-6 text-[#696969] font-thin tracking-wider'>警備経験は私のデザインのルーツです。<br/>Web空間での課題解決を念頭に、
                            <br/>クリエイティブと実用性のバランスを調整しながら
                            より良いUIやUXの実現に向き合っています。</p>
                        </div>
                        <Link href='/about'>
                            <Image
                                src="/toright.svg"
                                alt="Icon"
                                width={72}
                                height={72}
                            />
                        </Link>
                    </div>
                </div>
                <div className='flex-row'>
                    <div className='flex'>
                        <div className='flex flex-col items-center h-full'>
                            <BtnSkillBlack>Next.js</BtnSkillBlack>
                            <BtnSkillBlack>Node.js</BtnSkillBlack>
                            <BtnSkillBlack>React</BtnSkillBlack>
                            <BtnSkillBlack>Express</BtnSkillBlack>
                            etc...
                        </div>
                        <CommonImgTmb 
                        src="/img04tmb.png"
                        alt="Image"
                        width={262}
                        height={237}
                        priority
                        />
                    </div>
                </div>
            </WorksTemp>
       </div> 
    ) 
}