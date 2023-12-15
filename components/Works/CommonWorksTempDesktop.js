// components/Works/CommonWorksTempDesktop.js
// デスクトップイメージ

import React from 'react';
import Link from 'next/link';
import BtnLike from '../Button/BtnLike';
import BtnLikeSkillBlack from '../Button/BtnLikeSkillBlack';
import CommonSvgToRight from './CommonSvgToRight';
import CommonImgTmb from './CommonImgTmb';



export default function CommonWorksTempMobile(
    { categoryColor, categoryColorFont, year, category, purpose, description, children, linkUrlToJump, linkUrlImg, teckStack }) {
        
        
    return (
        <div className='w-full justify-center'>            
            <div className='flex justify-center'>
                <BtnLike className={`rounded-bl-2xl ${categoryColor}`}>{category}</BtnLike>
            </div>

            <div className='flex flex-col sm:flex-row justify-center'>
                <div className='flex justify-center'> 
                    <div className='flex flex-row mb-8'>
                        <div className='w-[250px]'>
                            <h2 className={`text-[18px] tracking-[3px] ${categoryColorFont}`}>2021</h2>
                            <h3 className={`font-bold text-1xl ${categoryColorFont}`}>{purpose}</h3>
                            <p className='break-all mt-2 text-[12px] leading-6 text-[#696969] font-thin tracking-wider'>
                                {description}
                            </p>
                        </div>
                        <Link href={linkUrlToJump}>
                            <CommonSvgToRight />
                        </Link>
                    </div>
                </div>

                <div className='flex flex-row h-auto justify-center ss:flex-col-reverse'>
                    <div className='  overflow-visible'>
                        <CommonImgTmb 
                            src={linkUrlImg}
                            alt="Image"
                            width={262}
                            height={237}
                            priority
                            style={{ maxWidth: 'none', marginBottom:'-38px' }}                            
                        />
                    </div>
                    <div className='flex flex-col items-center pt-[20%]  ss:ml-[-80px] ss:pt-0 z-20'>
                        <BtnLikeSkillBlack>{teckStack}</BtnLikeSkillBlack>
                    </div>
                </div>
            </div>

            <div className='bg-black w-full h-[15px] mt-8 z-40'></div>

            {children}
        </div>
    )

}