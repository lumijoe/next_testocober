// components/Works/Works02.js
// デスクトップサイト：ECサイト

import React from 'react';
import CommonWorksTempDesktop from './Works/CommonWorksTempDesktop';

export default function Works02 () {
    return(
        <div>
            <CommonWorksTempDesktop
             categoryColor='bg-emerald-600'
             year='2023'
             client='個人制作'
             category={<><span className='text-[18px] tracking-[3px]'>EC</span>サイト</>} 
             purpose='エシカル体験のために'
             description={<>警備経験は私のデザインのルーツです。<br/>Web空間での課題解決を念頭に、
             <br/>クリエイティブと実用性のバランスを調整しながら
             より良いUIやUXの実現に向き合っています。</>}
             linkUrlToJump='/web01'
             linkUrlImg='/workWeb01.png'
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
client
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