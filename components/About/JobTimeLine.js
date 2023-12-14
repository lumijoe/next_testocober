// components/About/JobTimeLine.js

import React from 'react';

export default function JobTimeLine ({ year, content, detail }) {
    // detailがnullの場合の処理も設定
    return (
        <>
            <li className='mb-1'>
                <p className='text-white text-sm md:text-2xl'>
                    <span className='text-base md:text-3xl tracking-wider italic text-thin'>
                        {year}</span>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    {content}
                    {detail ? <>&nbsp;&nbsp;<span className='text-[#bbbbbb]'>-</span>&nbsp;&nbsp;<span className='text-[12px] text-[#bbbbbb]'>{detail}</span></> : null}    
                </p>
            </li>
        </>
    )
};
/* 
　使用例：英語と日本語混在のテキストサイズ指定も可能
<JobTimeLine year='2021' content={<><span className='text-xl thin'>Web</span>へ転向</>} detail=自治体 />
*/