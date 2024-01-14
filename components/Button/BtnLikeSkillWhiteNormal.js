// components/Butoon/BtnLikeSkillWhiteNormal.js
import React from 'react';

export default function BtnLikeSkillWhiteNormal ({ children, className, style }) {
    const buttonClass = `${className}`;
    const buttonStyle = `${style}`;
    return (
       
        <div style={{ display: 'inline-block' }}>
            <div type="button " className={`align-left rounded-full tracking-wider text-white bg-black px-5 py-[8px] shadow-xl shadow-bg-gray-900/30 text-thin text ${buttonClass} ${buttonStyle}`} style={{ fontStyle: "Noto Sans JP" }}>#<span>{children}</span></div>
        </div>
    )
}

