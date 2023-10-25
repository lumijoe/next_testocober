// components/Butoon/BtnCategories.js(カテゴリボタンコンポーネント)

import React from 'react';
import Btn from './Btn'

export default function BtnCategories() {
    return (
        <div className='flex justify-center'>
            <Btn className="bg-gray-300"><p>All</p></Btn>
            <Btn><p>Web</p></Btn>
            <Btn><p>Contetns</p></Btn>
        </div>
    )
}