// components/Butoon/BtnLikeSkillBlackSmall.js
import React from 'react';

export default function BtnLikeSkillBlackSmall ({ children, className, style }) {
    const buttonClass = `${className}`;
    const buttonStyle = `${style}`;
    return (
       
        <div style={{ display: 'inline-block' }}>
            <div type="button " className={`align-left rounded-full tracking-wider text-white italic bg-[#232323] px-3 py-[2px] shadow-xl shadow-bg-gray-900/30 text-thin text ${buttonClass} ${buttonStyle}`}>#<span>{children}</span></div>
        </div>
    )
}

