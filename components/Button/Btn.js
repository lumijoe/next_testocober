// components/Btn/Btn.js(Btnコンポーネント)

import React from 'react';


export default function Btn ({ children, className }) {
    // ボタン毎にカスタムカラーをコンポーネントで強制使用するための設定
    const buttonWorksClass = ` rounded-full  text-white hover:bg-indigo-500  px-auto py-[20px] w-[230px] shadow-xl shadow-bg-gray-900/30 h-[25px] ${className}`

    return (
        <div className='mb-8 py-8 mt-12'>
            <button type="button" className={buttonWorksClass}>{children}</button>
        </div>
    )
}