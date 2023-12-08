// components/Btn/Btn.js(Btnコンポーネント)

import React from 'react';


export default function Btn ({ children, className }) {
    // ボタン毎にカスタムカラーをコンポーネントで強制使用するための設定
    const buttonWorksClass = `mx-6 rounded-full  text-white hover:bg-indigo-500  px-8 py-1 w-auto shadow-xl shadow-bg-gray-900/30 h-[25px] ${className}`

    return (
        <div className='mb-8 py-8'>
            <button type="button" className={buttonWorksClass}>{children}</button>
        </div>
    )
}