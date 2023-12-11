// components/Works10.js
// パターン：ブラウザ、右

import React from 'react';
import WorksTemp from '../components/WorksTemp';
import BtnLikeSkillBlack from './Button/BtnLikeSkillBlack';
import CommonImgTmb from '../components/Works/CommonImgTmb';
import Image from 'next/image';
import Link from 'next/link';

export default function Works10 () {
    return (
       <div>
            <WorksTemp>
                <div className='flex flex-col sm:flex-row justify-center'>  
                    <div className='flex flex-row h-[346px]'>
                        <div className='overflow-hidden justify-self-center'>
                            <CommonImgTmb 
                            src="/img02.jpg"
                            alt="Image"
                            width={500}
                            height={346}
                            layout="responsive"
                            priority
                            style={{ maxWidth: 'none'}}
                            />
                        </div>
                        <div className='flex flex-col items-center py-auto ml-[-50px] pr-4 z-10 '>
                            <BtnLikeSkillBlack>Illustrator</BtnLikeSkillBlack>
                            <BtnLikeSkillBlack>Photoshop</BtnLikeSkillBlack>
                            <BtnLikeSkillBlack>PowerPoint</BtnLikeSkillBlack>
                            <BtnLikeSkillBlack>Excel</BtnLikeSkillBlack>
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
                    <h1 className='inline-block text-8xl text-white italic font-thin pl-8 mt-[-50px]'>06<span className='text-white text-sm'>パンフレット / 自治体 / 2016.6</span></h1>
                </div>
            </WorksTemp>
       </div> 
    ) 
}