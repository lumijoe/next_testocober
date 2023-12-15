// components/Works/CommonWorksTempDesktop.js
// デスクトップイメージ

import React from 'react';
import Link from 'next/link';
import BtnLike from '../Button/BtnLike';
import BtnLikeSkillBlack from '../Button/BtnLikeSkillBlack';
import CommonSvgToRight from './CommonSvgToRight';
import CommonImgTmb from './CommonImgTmb';



export default function CommonWorksTempDesktop(
    { categoryColor, categoryColorFont, year, category, purpose, description, children, linkUrlToJump, linkUrlImg, teckStack0, teckStack1, teckStack2, teckStack3, }) {
        
        
    return (
        <div className='w-full justify-center'>            
            <div className='flex justify-center'>
                <BtnLike className={`rounded-bl-2xl ${categoryColor}`}>{category}</BtnLike>
            </div>

            <div className='flex flex-col sm:flex-row justify-center'>
                <div className='flex justify-center'> 
                    <div className='flex flex-row mb-8'>
                        <div className='w-[250px] pr-2'>
                            <h2 className={`text-[18px] tracking-[3px] ${categoryColorFont}`}>{year}</h2>
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

                <div className='flex flex-row ml-8 h-auto z-20'>
                    <div className='flex flex-col items-center py-auto'> 
                        <BtnLikeSkillBlack>{teckStack0}</BtnLikeSkillBlack>
                        <BtnLikeSkillBlack>{teckStack1}</BtnLikeSkillBlack>
                        <BtnLikeSkillBlack>{teckStack2}</BtnLikeSkillBlack>
                        <BtnLikeSkillBlack>{teckStack3}</BtnLikeSkillBlack>
                        etc...
                    </div>
                    <div className='ml-[15px] overflow-hidden'>
                        <CommonImgTmb 
                        src={linkUrlImg}
                        alt="Image"
                        width={380}
                        height={346}
                        layout='responsive'
                        priority
                        style={{ maxWidth: 'none', paddingLeft:'-20px' }}                            
                        />    
                    </div>
                </div>  
            </div>
            <div className='bg-black w-full h-[15px] mt-8 z-40'></div>

            {children}
        </div>
    )

}