// components/About/JobTimeLine.js

import React from 'react';

export default function JobTimeLine ({ year, content, detail }) {
    // detailがnullの場合の処理も設定
    return (
        <>
            {/* <li className='mb-1'>
                <p className='text-white text-sm md:text-2xl'>
                    <span className='text-base md:text-3xl tracking-wider'>
                        {year}</span>年&nbsp;&nbsp;{content}{detail ? <><br/>&emsp;&emsp;&emsp;&emsp;-&nbsp;&nbsp;<span className='text-[12px] text-[#bbbbbb]'>{detail}</span></> : null}
                </p>
            </li> */}
            <li className='mb-1'>
                <p className='text-white text-sm md:text-2xl'>
                    <span className='text-base md:text-3xl tracking-wider'>
                        {year}</span>年&nbsp;&nbsp;{content}{detail ? <>&nbsp;&nbsp;-&nbsp;&nbsp;<span className='text-[12px] text-[#bbbbbb]'>{detail}</span></> : null}
                </p>
            </li>
        </>
    )
};