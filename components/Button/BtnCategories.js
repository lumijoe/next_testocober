// components/Butoon/BtnCategories.js(カテゴリボタンコンポーネント)

import React from 'react';
import BtnMore from './BtnMore'

export default function BtnCategories() {
    return (
        <div className='flex'>
            <BtnMore />
            <BtnMore />
            <BtnMore />
        </div>
    )
}