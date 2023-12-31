// components/Hero/HeroSkillsB.js

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function  HeroTitleSkills() {
  const textRef = useRef(null);

  useEffect(() => {
    const textElements = textRef.current.querySelectorAll('li');

    // アニメーションの設定
    gsap.from(textElements, {
      opacity: 0, // 最初は不透明度を0に設定
      y: 20, // 上方向に20px移動
      duration: 0.5,
      stagger: 0.5, // 要素ごとに遅延させる（v1-1）
      ease: 'power3.inOut', // イージング
    });

    gsap.to(textElements, {
      opacity: 1, // 最終的に不透明度を1に設定
      y: 0, // 移動を元に戻す
      duration: 0.1,
      stagger: 0.05, // 要素ごとに遅延させる（v1-0.5）
      ease: 'power3.inOut',
    });

  }, []);

  return (
    <div className='text-white text-2xl italic font-thin lg:text-5xl lg:tracking-wider'>
        <ul className='text-center' ref={textRef}>
          <li>GSAP</li>
          <li>Tailwindcss</li>
          <li>HTML, CSS</li>
          <li>WordPress</li>
          <li>XD</li>
          <li>Figma</li>
          <li>Photoshop</li>
        </ul>
    </div>
  );
};
