// components/Works04.js
// パターン：ブラウザ、右

import React from 'react';
import WorksTemp from '../components/WorksTemp';
import BtnLike from '../components/Button/BtnLike';
import BtnLikeSkillBlack from './Button/BtnLikeSkillBlack';
import CommonImgTmb from '../components/Works/CommonImgTmb';
import Image from 'next/image';
import Link from 'next/link';

export default function Works04 () {
    return (
       <div>
            <WorksTemp>
                <div className='flex justify-center'>
                    <BtnLike className="bg-green-500"><span className='text-[18px] tracking-[3px]'>2023:EC</span>サイト</BtnLike>
                </div>

                <div className='flex flex-col sm:flex-row justify-center'>
                    <div className='flex justify-center'>
                        <div className='flex flex-row mb-8'>
                            <div className='w-[250px] pr-2'>
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
                                    style={{ paddingTop: "25px" }}
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
                <div className='bg-black w-full h-[15px] mt-8 z-40'></div>
            </WorksTemp>
       </div> 
    ) 
}
