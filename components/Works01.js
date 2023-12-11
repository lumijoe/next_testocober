// components/Works01.js
// パターン：ブラウザ、右

import React from 'react';
import WorksTemp from '../components/WorksTemp';
import BtnLike from '../components/Button/BtnLike';
import BtnLikeSkillBlack from './Button/BtnLikeSkillBlack';
import CommonImgTmb from '../components/Works/CommonImgTmb';
import Image from 'next/image';
import Link from 'next/link';

export default function Works01 () {
    return (
       <div>
            <WorksTemp>
                <h1 className='inline-block text-8xl text-white italic font-thin pl-8 mt-8 '>2023</h1>
                <div className='flex justify-center mt-[-100px]'>
                    <BtnLike className="b border-[white]"><span className='text-[18px] text-white tracking-[3px]'>EC</span>サイト</BtnLike>
                </div>

                <div className='flex flex-col sm:flex-row justify-center'>
                    <div className='flex justify-center'>
                        <div className='flex flex-row mb-8'>
                            <div className='w-[250px] pr-2'>
                                <h2 className='font-semibold text-1xl'>エシカルな<br/>ライフスタイルを支える</h2>
                                <p className='break-all mt-2 text-[12px] leading-6 text-white font-thin tracking-wider'>#エシカル #ライフスタイル #ブランディング
                                <br/></p>
                            </div>
                            <Link href='/about'>
                                <Image
                                    src="/toright.svg"
                                    alt="Icon"
                                    width={72}
                                    height={72}
                                    style={{ paddingTop: "25px", rotate: "-45deg" }}
                                />
                            </Link>
                        </div>
                    </div>
                      
                    <div className='flex flex-row ml-8 h-auto'>
                        <div className='flex flex-col items-center py-auto'>
                            <BtnLikeSkillBlack>Next.js</BtnLikeSkillBlack>
                            <BtnLikeSkillBlack>Node.js</BtnLikeSkillBlack>
                            <BtnLikeSkillBlack>React</BtnLikeSkillBlack>
                            <BtnLikeSkillBlack>Express</BtnLikeSkillBlack>
                            etc...
                        </div>
                        <div className='ml-[15px] overflow-hidden'>
                            <CommonImgTmb 
                            src="/work04.png"
                            alt="Image"
                            width={380}
                            height={346}
                            layout="responsive"
                            priority
                            style={{ maxWidth: 'none', paddingLeft: '-20px' }}
                            />
                        </div>
                    </div>
                </div>
            </WorksTemp>
       </div> 
    ) 
}
