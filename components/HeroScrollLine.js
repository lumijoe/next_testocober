// components/HeroScrollLine.js
// tailwind.config.jsでanimation ＠keyframesカスタム
// [writing-mode:vertical-rl;]

import React from 'react';

export default function HeroScrollLine () {
  return (
  <div className='absolute z-[1500] italic w-[1px] h-[280px] bottom-0 bg-[#0a1b29] flex-col align-middle'>
    <span className='absolute top-[-50px] text-white tracking-wider [line-height:0;] origin-bottom-left rotate-90  align-baseline'>SCROLL</span>
    <div className='absolute z-[1600]  italic  w-[1px] h-[280px] bg-white ease animate-lineFlow'></div>
  </div>
  )
}





