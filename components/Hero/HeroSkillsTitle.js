// components/Hero/HeroSkillsTitle.js

import React from 'react';
import HeroSkillsA from './HeroSkillsA'; 
import HeroSkillsB from './HeroSkillsB'; 


export default function HeroSkillsTitle() {
  return (
    <div className=" flex flex-col" style={{ height: `calc(100vh - 52px)`}}>

      {/* 上部エリア(Web development) */}
      <div className="flex-1 flex flex-col justify-end items-center">
            <HeroSkillsA />
      </div>

      {/* 中央エリア(myjob) */}
      <div className="flex">
        <div className="w-full text-center">
            {/* <p className='text-white text-4xl italic font-semibold lg:text-8xl' >Front&nbsp;End<span className='text-white text-2xl italic font-thin lg:text-6xl'>Web&nbsp;Engineer</span></p> */}
            <p className='text-white text-4xl italic font-semibold lg:text-8xl' >Design,&nbsp;Code,&nbsp;<span className='text-white text-2xl italic font-thin lg:text-6xl'>for&nbsp;Solution</span></p>
        </div>
      </div>

      {/* 下部エリア(Web design) */}
      <div className="flex-1 flex flex-col justify-start items-center text-center">
            <HeroSkillsB />
      </div>
    </div>
  );
}