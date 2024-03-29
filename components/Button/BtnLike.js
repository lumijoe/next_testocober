// components/Btn/BtnLike.js

import React from 'react';

export default function BtnLike ({ children, className }) {
    // カスタムカラーをコンポーネントで強制使用するためのクラス設定
    // const buttonLikeClass = ` rounded-full  text-white hover:bg-indigo-500  px-auto py-[23px] w-[180px] shadow-xl shadow-bg-gray-900/30 text-[14px] h-[25px] ${className}`
    const buttonLikeClass = `rounded-full text-white px-auto py-[23px] w-[280px]   text-[16px] h-[50px] border ${className}`

    return (
        <div className='my-12 py-8 '>
            <span type="button" className={`flex items-center justify-center ${buttonLikeClass}`}>{children}</span>
        </div>
    )
}