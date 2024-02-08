// components/Works09.js
// パターン：デザイン、中央スクロール
// ブレークポイントsm:640px

import React from 'react';
import WorksTempWebSite from '../components/WorksTempWebSite';
import styles from '../styles/Footer.module.css';
import BtnLikeSkillBlack from './Button/BtnLikeSkillBlack';
import CommonImgTmb from '../components/Works/CommonImgTmb';
import Image from 'next/image';
import Link from 'next/link';
import BtnLikeTitleWhite from './Button/BtnLikeTitleWhite';
import AttentionWorkDesignImg from '../components/Attention/AttentionWorkDesignImg';
import AttentionWorkDesignBefore from '../components/Attention/AttentionWorkDesignBefore';
import BtnLikeY8X12 from '../components/Button/BtnLikeY8X12'


// 01ウェブサイト / アプリ
export default function Works09_b () {
    return (
       <div className="relative"> 
         
        {/* bodyの上に装飾 */}
        <div className={`absolute ${styles.section1} smMin553:opacity-0 smMax552:opacity-0 smMax453:top-[660px] smMax401:top-[697px] smMax351:opacity-0  relative`}></div>
        {/* <div className={`absolute ${styles.section1} top-[590px] smMax695:top-[605px] smMax567:top-[640px] smMax552:top-[625px] smMax453:top-[660px] smMax401:top-[697px] smMax351:opacity-0  relative`}></div> */}
        {/* <div className='bg-[#e3e3e3] w-full h-[400px] bottom-[-35px] absolute '>
             <div className='bg-[#e3e3e3] w-full h-[280px] absolute top-[-50px]' style={{ transform: 'skewY(-4deg)' }}></div> 
        </div> */}
        <div className='bg-[#e3e3e3] w-full  bottom-[-35px] absolute '></div>
        <h1>以下編集中</h1>
    

            {/* ここから作品　============================================================================== */}

            <div className="flex bg-gray-200">
  <div className="flex-none w-48 relative">
    <Image 
        src="/310264_10.png" 
        alt="" 
        className="absolute inset-0 w-full h-full object-cover" 
        loading="lazy" 
        width={200}
        height={200}
    />
  </div>
  <form className="flex-auto p-6">
    <div className="flex flex-wrap">
      <h1 className="flex-auto text-lg font-semibold text-slate-900">
        MainTitle
      </h1>
      <div className="text-lg font-semibold text-slate-500">
        tab
      </div>
      <div className="w-full flex-none text-sm font-medium text-slate-700 mt-2">
        SubTitle
      </div>
    </div>
    <div className="flex items-baseline mt-4 mb-6 pb-6 border-b border-slate-200">
      <div className="space-x-2 flex text-sm">
        <label>
          <input className="sr-only peer" name="size" type="radio" value="xs" checked />
          <div className="w-9 h-9 rounded-lg flex items-center justify-center text-slate-700 peer-checked:font-semibold peer-checked:bg-slate-900 peer-checked:text-white">
            1
          </div>
        </label>
        <label>
          <input className="sr-only peer" name="size" type="radio" value="s" />
          <div className="w-9 h-9 rounded-lg flex items-center justify-center text-slate-700 peer-checked:font-semibold peer-checked:bg-slate-900 peer-checked:text-white">
            2
          </div>
        </label>
        <label>
          <input className="sr-only peer" name="size" type="radio" value="m" />
          <div className="w-9 h-9 rounded-lg flex items-center justify-center text-slate-700 peer-checked:font-semibold peer-checked:bg-slate-900 peer-checked:text-white">
            3
          </div>
        </label>
        <label>
          <input className="sr-only peer" name="size" type="radio" value="l" />
          <div className="w-9 h-9 rounded-lg flex items-center justify-center text-slate-700 peer-checked:font-semibold peer-checked:bg-slate-900 peer-checked:text-white">
            4
          </div>
        </label>
        <label>
          <input className="sr-only peer" name="size" type="radio" value="xl" />
          <div className="w-9 h-9 rounded-lg flex items-center justify-center text-slate-700 peer-checked:font-semibold peer-checked:bg-slate-900 peer-checked:text-white">
            5
          </div>
        </label>
      </div>
    </div>
    <div className="flex space-x-4 mb-6 text-sm font-medium">
      <div className="flex-auto flex space-x-4">
        <button className="h-10 px-6 font-semibold rounded-md bg-black text-white" type="submit">
          More
        </button>
        <button className="h-10 px-6 font-semibold rounded-md border border-slate-200 text-slate-900" type="button">
          Go to Back
        </button>
      </div>
      <button className="flex-none flex items-center justify-center w-9 h-9 rounded-md text-slate-300 border border-slate-200" type="button" aria-label="Like">
        <svg width="20" height="20" fill="currentColor" aria-hidden="true">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" />
        </svg>
      </button>
    </div>
    <p className="text-sm text-slate-700">
      loremloremloremlorem
    </p>
  </form>
</div>

<div class="grid grid-flow-col grid-rows-2 grid-cols-3 gap-8">
  <div>
    <Image src="/310264_0.png" alt="" loading="lazy" width={300} height={300} />
  </div>
  <div class="col-start-3">
    <Image src="/310264_0.png" alt="" loading="lazy" width={300} height={300}/>
  </div>
  <div>
    <Image src="/310264_0.png" alt="" loading="lazy" width={300} height={300}/>
  </div>
  <div>
    <Image src="/310264_0.png" alt="" loading="lazy" width={300} height={300}/>
  </div>
  <div class="row-start-1 col-start-2 col-span-2">
    <Image src="/310264_0.png" alt="" loading="lazy" width={300} height={300}/>
  </div>
</div>

            {/* ここまで作品　============================================================================== */}

        
            
       </div>
   
    ) 
}
