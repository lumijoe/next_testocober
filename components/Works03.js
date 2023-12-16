// components/Works/Works10.js
// パターン：モバイル、左
// ブレークポイントsm:640px



import React from 'react';
import CommonWorksTempMobile from './Works/CommonWorksTempMobile';

export default function Works3 () {
    return(
        <div>
            <CommonWorksTempMobile
             categoryColor='bg-slate-400'
             categoryColorFont='text-blue-500'
             year='2021'
             client='個人制作'
             category='リハビリアプリ'
             purpose='レジリエンス向上のために'
             description={<>リハビリ通院をサポート。<br/>通院公共機関や天気情報をはじめ、主治医と共有したい症状メモ機能を搭載。アプリ１つで簡単に管理でき、リハビリに集中してもらう環境を整えるアプリです。</>}
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