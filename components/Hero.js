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
      x: -800,        // アニメーション速度
      duration: 5,    // アニメーションの完了までの時間
      repeat: -1,     // 無限に繰り返す
      ease: "linear", // 線形のアニメーション
    });
  }, []);

  return (
    <div>
      <h1 className='bg-sky-700'>HERO AREA TOP</h1>
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
            src="/image03.jpg"
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
            src="/image03.jpg"
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
        <div className='absolute inset-0 bg-black opacity-70' />
        <div className='absolute relative inset-0'>
          <p className='absolute text-white text-8xl -left-1/2 rotate-90'>PORTFOLIO</p>
        </div>

      </div>
    </div>
  );
}
