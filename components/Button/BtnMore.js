// components/Button/BtnMore.js(Moreボタンコンポーネント)

import React from 'react';

export default function BtnMore() {
    return (
        <div className="bg-white mb-8 py-8">
            <button type="button" className="mx-6 rounded-full  bg-gray-900 text-white hover:bg-indigo-500  px-2 py-1 w-40 shadow-xl shadow-bg-gray-900/30
            ">More</button>
            <button type="button" className="mx-6 rounded-full  bg-gray-900 text-white hover:bg-cyan-500  px-2 py-1 w-40 shadow-xl shadow-bg-gray-900
            ">More</button>
            <button type="button" className="mx-6 rounded-full shadow-md bg-gray-900 text-white hover:bg-pink-500  px-8 py-3 w-40 
            ">More</button>
            <button type="button" className="mx-6 rounded-full shadow-md bg-gray-900 text-white hover:bg-sky-500  px-8 py-3 w-40
            ">More</button>
        </div>
    )
}
