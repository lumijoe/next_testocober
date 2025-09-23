// components/Btn/BtnLikeY8X12.js

import React from 'react';

export default function LabelWorkAbout ({ children, className }) {
    // カスタムをコンポーネントで強制使用するためのクラス設定
    
    const LabelWorkAbout = `rounded-full text-black bg-white py-[3px] h-auto border border-black ${className}`

    return (
        <div className='mt-12 flex justify-center'>
            <span type="button"
                className={
                    `flex items-center justify-center ${LabelWorkAbout}`
                }
                style={{
                    fontFamily: 'Noto Sans JP',
                    position: 'relative'
                    
                }}
            >
                {children}
            </span>
        </div>
    )
}