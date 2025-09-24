// components/Works/WorksCard.js

import React, { Children } from 'react';
  import Link from 'next/link';
  import CommonImgTmb from './CommonImgTmb';
  import BtnLikeSkillBlack from '../Button/BtnLikeSkillBlack';
  import BtnLikeSkillBlackSmall from '../Button/BtnLikeSkillBlackSmall';
  import LabelWorkType from '../Label/LabelWorkType';
  import LabelWorkAssign from '../Label/LabelWorkAssign';
  import LabelWorkAbout from '../Label/LabelWorkAbout';
  import LabelWorkTerm from '../Label/LabelWorkTerm';
  import LabelWorkNum from '../Label/LabelWorkNum';

  export default function WorksCard({
    // プロップス定義（既存のまま）
    title,
    workType,
    workNum,
    assignType,
    termLabel,
    href,
    imageSrc,
    imageWidth,
    imageHeight,
    imageOverlayText,
    cardHeight = "250px",
    mainTitle,
    dateStatus,
    roles,
    skills,
    useSmallSkills = false,
    additionalImages = [],
    marginRight = "mr-4",
  }) {

    const SkillButton = useSmallSkills ? BtnLikeSkillBlackSmall : BtnLikeSkillBlack;

    return (
      <li className={`flex flex-col justify-center relative mb-6 ${marginRight} bg-opacity-100`}>
        {/* ヘッダーラベル */}
        <LabelWorkAbout className='text-[12px] py-[7px] px-[36px]'>
          {title}
          {workNum && <LabelWorkNum>{workNum}</LabelWorkNum>}
        </LabelWorkAbout>

        {/* カード本体 */}
        <Link href={href} target="_blank" rel="noopener noreferrer">
          <div className={`h-auto w-[${imageWidth}px] relative`}>
            {assignType && <LabelWorkAssign type={assignType} />}
            {termLabel && <LabelWorkTerm>{termLabel}</LabelWorkTerm>}

            {/* 画像部分 */}
            <div className='relative'>
              <CommonImgTmb
                src={imageSrc}
                alt="Image"
                width={imageWidth}
                height={imageHeight}
                priority
                style={{ maxWidth: 'none' }}
              />
              {/* 追加画像を表示 ← これを追加 */}
            {additionalImages && additionalImages.map((img, index) => (
                <CommonImgTmb
                key={index}
                src={img.src}
                alt={img.alt || "Image"}
                width={img.width}
                height={img.height}
                priority
                style={img.style}
                />
            ))}
              {/* オーバーレイ */}
              {imageOverlayText && (
                <div className='absolute' style={{ 
                  bottom:'0', 
                  width:'100%', 
                  height:'60px', 
                  background: 'linear-gradient(to bottom, transparent, rgba(0, 0, 0, 0.9))',
                  zIndex:'1'
                }}>
                  <p className='text-white' style={{ 
                    fontSize:'14px', 
                    paddingTop:'20px', 
                    paddingLeft: '10px', 
                    fontFamily:'Noto Sans JP' 
                  }}>
                    {imageOverlayText}
                  </p>
                </div>
              )}
            </div>

            {/* カード情報部分 */}
            <div className='py-2 px-[10px] bg-white' style={{ 
              height: cardHeight,
              boxShadow: '0px 3px 6px rgba(0, 0, 0, 0.1)', 
              borderRadius: '0px 0px 4px 4px', 
              overflow: 'hidden', 
              position: 'relative' 
            }}>
              <p className='text-[13px] font-bold tracking-wider' style={{ 
                fontFamily: "Noto Sans JP", 
                fontWeight: 500, 
                minHeight:'55px' 
              }}>
                {Array.isArray(mainTitle) ? (
                  mainTitle.map((line, i) => (
                    <React.Fragment key={i}>
                      {line}
                      {i < mainTitle.length - 1 && <br />}
                    </React.Fragment>
                  ))
                ) : mainTitle}
              </p>
              <hr style={{ paddingTop: '0.5rem' }}/>
              <p className='text-[13px] text-[#6c6c6c] leading-[1.3rem] pb-3' style={{ 
                fontFamily: "Noto Sans JP", 
                fontWeight: 300 
              }}>
                <span style={{ color:'#6c6c6c' }}>{dateStatus}</span><br/>
                {roles}
              </p>
              <div className='flex flex-wrap-reverse mb-[8px] gap-[8px]'>
                {skills.map((skill, index) => (
                  <SkillButton key={index}>{skill}</SkillButton>
                ))}
              </div>
            </div>
          </div>
        </Link>
      </li>
    );
  }