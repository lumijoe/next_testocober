// components/HeroScrollLine.js

import React from 'react';

export default function HeroScrollLine () {
  return (
  <div className='absolute z-[1500] italic right:5%; w-[1px] h-[300px] bottom-0 bg-[#0a1b29]  '>
      <span className='absolute top-[-70px] right:5%; text-white tracking-wide origin-left [writing-mode:vertical-rl;] align-middle' >SCROLL</span>
      <div className='absolute z-[1600] right:5%; italic  w-[1px] h-[300px]  bg-white ease animate-lineFlow' ></div>
    </div>
  )
}







// rgba(10,27,41,0.68)#0a1b29
// 縦書き[writing-mode:vertical-rl;]
// tailwind.config.jsでanimation ＠keyframesカスタム