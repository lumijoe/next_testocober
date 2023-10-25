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

        {/* component/Heroのoverlay */}
        <div className='absolute inset-0 bg-gray-950 opacity-50' />
        
        {/* overlay上のHeroTitle */}
        <div>
          {/* main title PORTFOLIO */}
          <p className='absolute text-white text-8xl italic font-semibold origin-center rotate-90 align-baseline' style={{ left: "-125px" }} >PORTFOLIO</p>
          {/* sub title my carrrer */}
          <div className='absolute relative' style={{ left: "25vw", lineHeight: "2px" }}>
            <p className='text-white text-4xl italic font-semibold origin-center align-baseline' >Front&nbsp;End<span className='text-white text-2xl italic font-thin origin-center align-baseline'>Web&nbsp;Engineer</span></p>
          </div>
       
        
        {/* overlay,title,より上のskills */}
        <div className='absolute' style={{ left: "40vw", lineHeight: "1px", bottom: "35vh" }}>
          <p className='text-white text-2xl italic font-thin align-baseline'>
            <ul className='text-center'>
              <li>GSAP</li>
              <li>HTML, CSS</li>
              <li>WordPress</li>
              <li>XD, Figma</li>
              <li>Photoshop</li>
              
             
            </ul>
          </p>
        </div>
        <div className='absolute' style={{ left: "40vw", lineHeight: "1px", bottom: "65vh" }}>
          <p className='text-white text-2xl italic font-thin align-baseline'>
            <ul className='text-center'>
              <li>NEXT.js</li>
              <li>React</li>
              <li>Vercel</li>
              <li>Git, Github</li>
              <li>JavaScript</li>
              <li>Tailwindcss</li>
              <li>Firebase</li>
            </ul>
          </p>
        </div>
      </div>
      </div>
    </div>
  );
}
