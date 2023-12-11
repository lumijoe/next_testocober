// components/Works01.js

import React from 'react';
import WorksTemp from '../components/WorksTemp';
import Btn from '../components/Button/Btn';
import BtnCategories from './Button/BtnLikeSkillBlack';
import Image from 'next/image';

export default function Works01 () {
    return (
       <div>
            <WorksTemp>
                <Btn className="bg-emerald-600">ECサイト</Btn>
                <h1>キャッチコピー</h1>
                <Image
                    src="/toright.svg"
                    alt="Icon"
                    width={52}
                    height={52}
                />
                <BtnCategories />
                <Image 
                src="/img04.jpg"
                alt="Image"
                width={395.5}
                height={227}
                priority
                /> 
            </WorksTemp>
       </div> 
    ) 
}