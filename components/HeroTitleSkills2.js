// components/HeroTitleSkills2.js

import React from 'react';
import HeroSkillsA from '../components/Hero/HeroSkillsA'; 
import HeroSkillsB from '../components/Hero/HeroSkillsB'; 


export default function HeroTitleSkills2() {
  return (
    <div className="h-screen flex flex-col">

      {/* 上部エリア(Web development) */}
      <div className="flex-1 flex flex-col justify-end items-center">
            <HeroSkillsA />
      </div>

      {/* 中央エリア(myjob) */}
      <div className="flex flex items-center">
        <div className="w-full text-center">
            <p className='text-white text-4xl italic font-semibold' >Front&nbsp;End<span className='text-white text-2xl italic font-thin'>Web&nbsp;Engineer</span></p>
        </div>
      </div>

      {/* 下部エリア(Web design) */}
      <div className="flex-1 flex flex-col justify-start items-center text-center">
            <HeroSkillsB />
      </div>
    </div>
  );
}