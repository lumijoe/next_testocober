// components/Hero.js(Heroコンポーネント)

// components/Hero.js (Heroコンポーネント)

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import { gsap } from 'gsap';


export default function Hero() {
  const containerRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const content = contentRef.current; // contentRef内のdiv要素を取得

    const scrollWidth = content.offsetWidth - container.offsetWidth;

    gsap.to(content, {
      x: -1500,        // アニメーション速度
      duration: 10,    // アニメーションの完了までの時間
      repeat: -1,     // 無限に繰り返す
      ease: "linear", // 線形のアニメーション
    });
  }, []);

  return (
    <div className='static'>
      <div
        ref={containerRef}
        className="overflow-hidden relative"
        style={{ width: "100vw", height: "100vh" }}
      >
        <div ref={contentRef} className="flex relative">
          <Image
            src="/img01.jpg"
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
            src="/img03.jpg"
            alt="Image"
            width={600}
            height={400}
            priority
          />
          <Image
            src="/img04.jpg"
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
          <Image
            src="/img01.jpg"
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
            src="/img03.jpg"
            alt="Image"
            width={600}
            height={400}
            priority
          />
          <Image
            src="/img04.jpg"
            alt="Image"
            width={600}
            height={400}
            priority
          />
          <Image
            src="/img05.jpg"
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
        <div className='absolute inset-0 bg-gray-950 opacity-50' />
        <div>
          <p className='absolute text-white text-8xl italic font-semibold origin-center rotate-90 align-baseline' style={{ top: "42vh", left: "-125px" }}>PORTFOLIO</p>
        </div>

      </div>
    </div>
  );
}
