// components/Btn/BtnLikeY8X12.js

import React from 'react';

export default function BtnLikeY8X12 ({ children, className }) {
    // カスタムカラーをコンポーネントで強制使用するためのクラス設定
    
    const buttonLikeY8X12Class = `rounded-full text-black bg-white py-[3px] h-10 border border-black ${className}`

    return (
        <div className='mb-8 mt-12'>
            <span type="button" className={`flex items-center justify-center ${buttonLikeY8X12Class}`}>{children}</span>
        </div>
    )
}