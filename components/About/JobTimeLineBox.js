// components/About/JobTimeLineBox.js
import React from 'react';
import JobTimeLine from '../About/JobTimeLine';


export default function JobTimeLineBox () {
    return (
        <div className=' ss:mx-[5%]'>
            <p className='text-white tracking-wider' style={{ fontFamily: "Noto Sans JP", fontWeight: 400 }}>小城 ルミ<br/>Coder & Word Press Dev. - 2025</p>
            <br/>
            <JobTimeLine year='2024' content='フロントエンドまわり、ディレクション' detail='/ 広告会社'/>
            <JobTimeLine year='2023' content='フロントエンドまわり' detail='/ インターン'/>
            <JobTimeLine year='2021' content={<><span className=' thin' style={{ fontFamily: "Noto Sans JP", fontWeight: 300 }}>WEB</span>転向キャチアップ</>} />
            <JobTimeLine year='2018' content='店舗開発戦略ディレクション' detail='/ 産官'/>
            <JobTimeLine year='2016' content='ディレクション、グラフィック' detail='/ 官インハウス'/>
            <JobTimeLine year='2014' content='企画、グラフィック' detail="/ 産官学民"/>
            <JobTimeLine year='2010' content='企業オウンドメディア編集'/>
            <JobTimeLine year='1997' content='短期大学卒' detail='/ 英米語、タイピング、グローバル応用'/>
            <JobTimeLine year='1976' content='生まれ'/>
        </div>
    )
}