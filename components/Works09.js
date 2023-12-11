// components/Works09.js
// パターン：ブラウザ、右

import React from 'react';
import WorksTemp from '../components/WorksTemp';
import BtnLikeSkillBlack from './Button/BtnLikeSkillBlack';
import CommonImgTmb from '../components/Works/CommonImgTmb';
import Image from 'next/image';
import Link from 'next/link';

export default function Works09 () {
    return (
       <div>
            <WorksTemp>
                <div className='flex flex-col sm:flex-row justify-center'>  
                    <div className='flex flex-row h-[346px]'>
                        <div className='overflow-hidden'>
                            <CommonImgTmb 
                            src="/img3.jpg"
                            alt="Image"
                            width={380}
                            height={346}
                            layout="responsive"
                            priority
                            style={{ maxWidth: 'none'}}
                            />
                        </div>
                        <div className='flex flex-col items-center py-auto ml-[-50px] pr-4 z-10 '>
                            <BtnLikeSkillBlack>Next.js</BtnLikeSkillBlack>
                            <BtnLikeSkillBlack>Node.js</BtnLikeSkillBlack>
                            <BtnLikeSkillBlack>React</BtnLikeSkillBlack>
                            <BtnLikeSkillBlack>Express</BtnLikeSkillBlack>
                            etc...
                            <Link href='/about'>
                                <Image
                                    src="/torightWhite.svg"
                                    alt="Icon"
                                    width={72}
                                    height={72}
                                    style={{ paddingTop: "25px", rotate: "-45deg" }}
                                />
                            </Link>
                        </div>
                    </div>
                    <h1 className='inline-block text-8xl text-white italic font-thin pl-8 mt-[-50px]'>02<span className='text-white text-sm'>ECサイト / Ethica / 2022.6</span></h1>
                </div>
            </WorksTemp>
       </div> 
    ) 
}