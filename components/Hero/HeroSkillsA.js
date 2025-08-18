// components/Hero/HeroSkillsA.js
import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';

export default function HeroTitleSkills() {
    const textRef = useRef(null);

   useLayoutEffect(() => {
    const textElements = gsap.utils.toArray(textRef.current.querySelectorAll('li'));

    // 初期状態を明示的に設定
    gsap.set(textElements, { opacity: 0, y: 20 });

    gsap.fromTo(textElements.reverse(), 
        // from の状態
        {
            opacity: 0,
            y: 20,
        },
        // to の状態  
        {
            opacity: 1,
            y: 0,
            duration: 0.5,
            stagger: 0.8,
            ease: 'power3.inOut',
        }
    );
    
    // 1フレーム遅延で追加のアニメーション
    requestAnimationFrame(() => {
        gsap.to(textElements, {
            opacity: 1, // 確実に1にする
            y: 0,
            duration: 0.1,
            stagger: 0.1,
            ease: 'power3.inOut',
        });
    });
}, []);

    return (
    <div className='text-white text-2xl italic font-thin lg:text-5xl lg:tracking-wider'>
        <ul className='text-center' ref={textRef}>
        <li>NEXT.js</li>
        <li>React</li>
        <li>Firebase</li>
        <li>Docker</li>
        <li>Git, Github</li>
        <li>JavaScript</li>
        </ul>
    </div>
    );
};