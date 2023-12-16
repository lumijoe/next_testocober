// components/Works/Works11.js
// モバイルアプリ：収支管理

import React from 'react';
import CommonWorksTempMobile from './Works/CommonWorksTempMobile';

export default function Works11 () {
    return(
        <div>
            <CommonWorksTempMobile
             categoryColor='bg-blue-500'
             year='2022'
             client='Self Production'
             category='通勤収支管理アプリ'
             purpose='支出を習慣化するために'
             description={<>小さい支出から管理を習慣づけるために<br/>通院公共機関や天気情報をはじめ、主治医と共有したい症状メモ機能を搭載。アプリ１つで簡単に管理でき、リハビリに集中してもらう環境を整えるアプリです。</>}
             linkUrlToJump='/about'
             linkUrlImg='/img07tmb.png'
             teckStack0='Glide'
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