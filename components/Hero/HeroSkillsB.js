// components/Hero/HeroSkillsB.js
import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';

export default function HeroTitleSkills() {
    const textRef = useRef(null);

    useLayoutEffect(() => {
        const textElements = textRef.current.querySelectorAll('li');

        // 初期状態を明示的に設定
        gsap.set(textElements, { opacity: 0, y: 20 });

        gsap.fromTo(textElements, 
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
                stagger: 0.5, // 元の数値そのまま
                ease: 'power3.inOut',
            }
        );
        
        // 1フレーム遅延で追加のアニメーション
        requestAnimationFrame(() => {
            gsap.to(textElements, {
                opacity: 1,
                y: 0,
                duration: 0.1,
                stagger: 0.05, // 元の数値そのまま
                ease: 'power3.inOut',
            });
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
