// components/Btn/Btn.js(Btnコンポーネント)

import React from 'react';

export default function Btn({ children }) {
    return (
        <div className="bg-white mb-8 py-8">
            <button type="button" className="mx-6 rounded-full  bg-gray-900 text-white hover:bg-indigo-500  px-8 py-1 w-auto shadow-xl shadow-bg-gray-900/30
            ">{ children }</button>
        </div>
    )
}
