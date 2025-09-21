// components/Btn/BtnLikeY8X12.js

import React from 'react';

export default function LabelWorkAbout ({ children, className }) {
    // カスタムをコンポーネントで強制使用するためのクラス設定
    
    const LabelWorkAbout = `text-white py-[0.7rem] h-auto border border-black ${className}`

    return (
        <div className='mb-5 mt-12 flex justify-center ' style={{
                    width: '100%'
                }}>
            <span type="button"
                className={
                    `flex items-center justify-center ${LabelWorkAbout}`
                }
                style={{
                    fontFamily: 'Noto Sans JP',
                    position: 'relative',
                    bottom: '-3.5rem',
                    width: '100%',
                    backgroundColor: '#232323'
                }}
            >
                {children}
            </span>
        </div>
    )
}