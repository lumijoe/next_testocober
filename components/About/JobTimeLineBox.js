// components/About/JobTimeLineBox.js
import React from 'react';
import JobTimeLine from '../About/JobTimeLine';


export default function JobTimeLineBox () {
    return (
        <div>
            <JobTimeLine year='2022' content='フロントエンド制作開発' />
            <JobTimeLine year='2021' content={<><span className='text-[18px] thin'>Web</span>へ転向</>} />
            <JobTimeLine year='2018' content='店舗戦略ディレクション' detail='産官開発'/>
            <JobTimeLine year='2016' content='ディレクション、グラフィック制作' detail='官インハウス'/>
            <JobTimeLine year='2014' content='企画、空間、グラフィック制作' detail="産官学民"/>
            <JobTimeLine year='2010' content='企業オウンドメディア編集担当'/>
            <JobTimeLine year='1997' content='短期大学卒' detail='英米語、タイピング、グローバル応用'/>
            <JobTimeLine year='1976' content='生まれ'/>
        </div>
    )
}