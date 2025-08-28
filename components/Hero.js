// components/Hero.js(Heroコンポーネント)
// ５パーツ（1：背景自動スクロール画像、2：opacity要素、3：左メインタイトル、4：中央サブタイトル、5：右誘導要素）

import React, { useLayoutEffect, useEffect, useRef } from 'react';
import Image from 'next/image';
import { gsap } from 'gsap';
import HeroSkillsTitle from '../components/Hero/HeroSkillsTitle';
import HeroScrollLine from '../components/HeroScrollLine';
import styles from '../styles/Footer.module.css';

// SSR対応のuseLayoutEffect
const useIsomorphicLayoutEffect = typeof window !== 'undefined' ? useLayoutEffect : useEffect;

export default function Hero() {
  const containerRef = useRef(null);
  const contentRef = useRef(null);

  useIsomorphicLayoutEffect(() => {
    const container = containerRef.current;
    const content = contentRef.current; // contentRef内のdiv要素を取得

    const scrollWidth = content.offsetWidth - container.offsetWidth;

    gsap.to(content, {
      x: -500,        // アニメーション速度
      duration: 10,    // アニメーションの完了までの時間
      repeat: -1,     // 無限に繰り返す
      ease: "linear", // 線形のアニメーション
    });
  }, []);

  return (
    // static relativeを、relativeに修正↓（1217）
    <div className={` relative ${styles.section2} `} style={{ height: `calc(100vh - 56px)` }} >
      <div
        ref={containerRef}
        className="overflow-hidden relative"
        style={{ width: "100vw", height: "100%" }}
      >
        {/* 1：背景自動スクロール画像 */}
        <div ref={contentRef} className="flex">
          <Image
            src="/work04.png"
            alt="Image"
            width={691}
            height={400}
            priority
          />
          <Image
            src="/img06.jpg"
            alt="Image"
            width={600}
            height={400}
            priority
          />
          <Image
            src="/img03.jpg"
            alt="Image"
            width={600}
            height={400}
            priority
          />
          <Image
            src="/img02.jpg"
            alt="Image"
            width={600}
            height={400}
            priority
          />
          <Image
            src="/work04.png"
            alt="Image"
            width={691}
            height={400}
            priority
          />
          <Image
            src="/img06.jpg"
            alt="Image"
            width={600}
            height={400}
            priority
          />
          <Image
            src="/img06.jpg"
            alt="Image"
            width={600}
            height={400}
            priority
          />
        </div>

        {/* 2：全体へのoverlayとTitle等 */}
        <div className='absolute inset-0 bg-gray-950 opacity-80' />
        
          {/* 3：左メインタイトル：PORTFOLIO */}
          <p className="absolute text-white text-8xl italic font-semibold origin-center rotate-90 align-baseline" style={{ left: "-125px" }} >PORTFOLIO</p>
        
          <div>
            {/* ４：中央サブタイトル：エンジニア、技術スタック*/}
            <div className='absolute mx-auto' style={{ left: "25%", right: "25%", top: "-52px" }}>
              <HeroSkillsTitle />
            </div>
            {/* 5：右コンテンツ誘導：スクロール表示、ラインアニメーション */}
            <div className='absolute' style={{ right: "5%", bottom: "0px"}} >
              <HeroScrollLine />
            </div>
          </div>
      </div>
    </div>
  );
}