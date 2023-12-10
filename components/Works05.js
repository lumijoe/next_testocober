// components/Works05.js

import React from 'react';
import WorksTemp from '../components/WorksTemp';
import Btn from '../components/Button/Btn';
import BtnCategories from './Button/BtnCategories';
import CommonImgTmb from '../components/Works/CommonImgTmb';
import Image from 'next/image';

export default function Works05 () {
    return (
       <>
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
                <CommonImgTmb 
                src="/img04.jpg"
                alt="Image"
                width={395.5}
                height={227}
                priority
                />
            </WorksTemp>
       </> 
    ) 
}