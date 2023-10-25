// components/Hero.js(Heroコンポーネント)

// components/Hero.js (Heroコンポーネント)

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import { gsap } from 'gsap';

export default function HorizontalScroll() {
  const containerRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const content = contentRef.current; // contentRef内のdiv要素を取得

    const scrollWidth = content.offsetWidth - container.offsetWidth;

    gsap.to(content, {
      x: -scrollWidth,
      duration: 20, // アニメーションの完了までの時間
      repeat: -1, // 無限に繰り返す
      ease: "linear", // 線形のアニメーション
    });
  }, []);

  return (
    <div
      ref={containerRef}
      className="overflow-x-auto"
      style={{ width: "100%", height: "400px" }}
    >
      <div ref={contentRef} className="flex space-x-4">
        <Image
          src="/image01.jpg"
          alt="Image"
          width={600}
          height={400}
          priority
        />
        <Image
          src="/image01.jpg"
          alt="Image"
          width={600}
          height={400}
          priority
        />
        <Image
          src="/image01.jpg"
          alt="Image"
          width={600}
          height={400}
          priority
        />
      </div>
    </div>
  );
}
