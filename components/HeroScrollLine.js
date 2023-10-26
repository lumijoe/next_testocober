// components/HeroScrollLine.js(HeroScrollLine.js)

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function ScrollText() {
  const lineRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const lineElement = lineRef.current;
    const textElement = textRef.current;

    // テキストのスタイル設定
    textElement.style.display = 'flex';
    textElement.style.alignItems = 'center';

    // 横線のスタイル設定
    lineElement.style.width = '160px';
    lineElement.style.height = '0.7px';
    lineElement.style.backgroundColor = 'white';
    lineElement.style.transform = "rotate(90deg)";

    // GSAPアニメーション設定
    if (typeof window !== 'undefined') {
      // クライアントサイドのみで実行
      gsap.fromTo(
        lineElement,
        {
          y: '-160px', // 上からスタート
        },
        {
          y: '100vh',// 右までアニメーション
          duration: 5, // アニメーションの時間
          backgroundColor: 'white', // 赤色に設定
          ease: 'cubic-bezier(0.42, 0, 0.2, 1)',  // イージング設定
        }
      );
    }
  }, []);

  return (
    <div ref={textRef}>
      <span className='text-white rotate-90 align-top font-thin italic text-1xl'>scroll</span>
      <div ref={lineRef}></div>
    </div>
  );
}

