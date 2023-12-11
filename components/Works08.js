// components/Works08.js

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
                <BtnLike className="bg-slate-500">2014-2021:デザイン</BtnLike>
                <div className='flex-row mb-8'>
                    <div className='flex'>
                        <div className='w-[275px] pr-8'>
                            <h2 className='font-bold text-1xl'>継続的解決の設計のために</h2>
                            <p className='break-all mt-2 text-[12px] leading-6 text-[#696969] font-thin tracking-wider'>デザイン領域を一貫担当。<br/>グラフィックデザインからディレクションまで
                                ヒアリングを元に課題から解決を見出し
                                最終利用者の「日常に馴染む解決」をコンセプトに
                                生活に寄り添ったデザインを手掛けてきました。</p>
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
                        <div className='flex flex-col items-center h-full'>
                            <BtnLikeSkillBlack>Illustrator</BtnLikeSkillBlack>
                            <BtnLikeSkillBlack>Photoshop</BtnLikeSkillBlack>
                            <BtnLikeSkillBlack>Excel</BtnLikeSkillBlack>
                            <BtnLikeSkillBlack>PowerPoint</BtnLikeSkillBlack>
                            etc...
                        </div>
                        <CommonImgTmb 
                        src="/img02.jpg"
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