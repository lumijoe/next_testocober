
import React from 'react';

export default function SkillBlack ({ children }) {
    return (
       
        <div>
            <div type="button " className="align-left rounded-full tracking-wider text-white italic bg-[#232323]  px-5 py-[2px] shadow-xl shadow-bg-gray-900/30 font-thin w-content">#<span>{children}</span></div>
        </div>
    )
}