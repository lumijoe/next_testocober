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

<div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-5xl">
  <div className="md:flex">
    <div className="md:shrink-0 md:bg-white">
      <Image className="h-48 w-full object-cover md:h-full md:w-[40vw]" src="/310264_10.png" alt="Modern building architecture"
        width={500}
        height={800}
      />
    </div>
    <div className="p-8">
      <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">SubTitle</div>
      <a href="#" className="block mt-1 text-lg leading-tight font-medium text-black hover:underline">Maintitle explain or copy edit 日本語テキスト</a>
      <p className="mt-2 text-slate-500">日本語入力とその他日本語入力とその他日本語入力とその他日本語入力とその他</p>
    </div>
  </div>
</div>

<div className="py-6 px-4 sm:p-6 md:py-10 md:px-8">
  <div className="max-w-4xl mx-auto grid grid-cols-1 lg:max-w-5xl lg:gap-x-20 lg:grid-cols-2">
    <div className="relative p-3 col-start-1 row-start-1 flex flex-col-reverse rounded-lg bg-gradient-to-t from-black/75 via-black/0 sm:bg-none sm:row-start-2 sm:p-0 lg:row-start-1">
      <h1 className="mt-1 text-lg font-semibold text-white sm:text-slate-900 md:text-2xl dark:sm:text-white">テスト編集中</h1>
      <p className="text-sm leading-4 font-medium text-white sm:text-slate-500 dark:sm:text-slate-400">サブテキスト編集中</p>
    </div>
    <div className="grid gap-4 col-start-1 col-end-3 row-start-1 sm:mb-6 sm:grid-cols-4 lg:gap-6 lg:col-start-2 lg:row-end-6 lg:row-span-6 lg:mb-0">
      <Image src="/img06.jpg" alt="" className="w-full h-60 object-cover rounded-lg sm:h-52 sm:col-span-2 lg:col-span-full" loading="lazy" 
        width={500}
        height={800}
      />
      <Image src="/img02.jpg" alt="" className="hidden w-full h-52 object-cover rounded-lg sm:block sm:col-span-2 md:col-span-1 lg:row-start-2 lg:col-span-2 lg:h-32" loading="lazy" 
        width={500}
        height={800}
      />
      <Image src="/img06.jpg" alt="" className="hidden w-full h-52 object-cover rounded-lg md:block lg:row-start-2 lg:col-span-2 lg:h-32" loading="lazy"
        width={500}
        height={800}
      />
    </div>
    <dl className="mt-4 text-xs font-medium flex items-center row-start-2 sm:mt-1 sm:row-start-3 md:mt-2.5 lg:row-start-2">
      <dt className="sr-only">Reviews</dt>
      <dd className="text-indigo-600 flex items-center dark:text-indigo-400">
        <svg width="24" height="24" fill="none" aria-hidden="true" className="mr-1 stroke-current dark:stroke-indigo-500">
          <path d="m12 5 2 5h5l-4 4 2.103 5L12 16l-5.103 3L9 14l-4-4h5l2-5Z"  stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
        <span>4.89 <span className="text-slate-400 font-normal">(128)</span></span>
      </dd>
      <dt className="sr-only">Location</dt>
      <dd className="flex items-center">
        <svg width="2" height="2" aria-hidden="true" fill="currentColor" className="mx-3 text-slate-300">
          <circle cx="1" cy="1" r="1" />
        </svg>
        <svg width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="mr-1 text-slate-400 dark:text-slate-500" aria-hidden="true">
          <path d="M18 11.034C18 14.897 12 19 12 19s-6-4.103-6-7.966C6 7.655 8.819 5 12 5s6 2.655 6 6.034Z" />
          <path d="M14 11a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z" />
        </svg>
        Map
      </dd>
    </dl>
    <div className="mt-4 col-start-1 row-start-3 self-center sm:mt-0 sm:col-start-2 sm:row-start-2 sm:row-span-2 lg:mt-6 lg:col-start-1 lg:row-start-3 lg:row-end-4">
      <button type="button" className="bg-indigo-600 text-white text-sm leading-6 font-medium py-2 px-3 rounded-lg">詳細を確認する</button>
    </div>
    <p className="mt-4 text-sm leading-6 col-start-1 sm:col-span-2 lg:mt-6 lg:row-start-4 lg:col-span-1 dark:text-slate-400">
      テキスト編集、テキスト編集、lorem loremテキスト編集、テキスト編集、lorem loremテキスト編集、テキスト編集、lorem loremテキスト編集、テキスト編集、lorem loremテキスト編集、テキスト編集、lorem loremテキスト編集、テキスト編集、lorem lorem
    </p>
  </div>
</div>


            {/* ここまで作品　============================================================================== */}

        
            
       </div>
   
    ) 
}
