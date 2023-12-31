// components/Butoon/BtnLikeSkillBlack.js
import React from 'react';
import styles from '../../styles/Footer.module.css';


export default function BtnLikeSkillBlack ({ children }) {
    return (
        <div className="py-1">
            <div type="button " className="align-left rounded-full tracking-wider text-white italic bg-[#232323] text-left pl-5 py-1 w-[120px] shadow-xl shadow-bg-gray-900/30 border border-black">#<span>{children}</span></div>
        </div>
    )
}