// components/Butoon/BtnLikeSkillBlack.js
import React from 'react';

export default function BtnLikeSkillBlack ({ children, className }) {
    const buttonClass = `${className}`
    return (
       
        <div style={{ display: 'inline-block' }}>
            <div type="button " className={`align-left rounded-full tracking-wider text-white italic bg-[#232323] px-5 py-[2px] shadow-xl shadow-bg-gray-900/30 text-thin text ${buttonClass}`}>#<span>{children}</span></div>
        </div>
    )
}
