// components/HeroTitleSkills2.js

import React from 'react';
import HeroSkillsA from '../components/Hero/HeroSkillsA'; 
import HeroSkillsB from '../components/Hero/HeroSkillsB'; 

export default function HeroTitleSkills2() {
  return (
    <div className="h-screen flex flex-col">

      {/* 上のエリア */}
      <div className="flex-1 bg-sky-700 flex flex-col justify-end items-center">
            <HeroSkillsA />
      </div>

      {/* 真ん中のエリア */}
      <div className="flex bg-gray-600 flex items-center">
        <div className="w-full text-center">
            {/* テキスト２行の塊りをここに配置 */}
            <p className='text-white text-4xl italic font-semibold' >Front&nbsp;End<span className='text-white text-2xl italic font-thin'>Web&nbsp;Engineer</span></p>
        </div>
      </div>

      {/* 下のエリア */}
      <div className="flex-1 bg-pink-700 flex flex-col justify-start items-center text-center">
            <HeroSkillsB />
      </div>
    </div>
  );
}