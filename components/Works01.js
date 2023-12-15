// components/Works/Works01.js
// デスクトップサイト：コーポレートサイト

import React from 'react';
import CommonWorksTempDesktop from './Works/CommonWorksTempDesktop';

export default function Works01 () {
    return(
        <div>
            <CommonWorksTempDesktop
             categoryColor='bg-red-400'
             year='2023'
             category='コーポレートサイト'
             purpose='ライフスタイルを支えるために'
             description={<>警備経験は私のデザインのルーツです。<br/>Web空間での課題解決を念頭に、
             <br/>クリエイティブと実用性のバランスを調整しながら
             より良いUIやUXの実現に向き合っています。</>}
             linkUrlToJump='/about'
             linkUrlImg='/work04.png'
             teckStack0='Next.js'
             teckStack1='Node.js'
             teckStack2='React'
             teckStack3='Express'
            />
        </div>
    )
}

/*
categoryColor
categoryColorFont
year
category
purpose
description, 
linkUrlToJump, 
linkUrlImg, 
teckStack
children,
例：他コンポーネントより
<JobTimeLine year='2021' content={<><span className='text-xl thin'>Web</span>へ転向</>} detail=自治体 />
*/