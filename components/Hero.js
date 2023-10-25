// components/Hero.js(Heroコンポーネント)

import React from 'react';
import Image from 'next/image';
import { gsap } from 'gsap';
import { useEffect, useRef } from 'react';

export default function Hero() {
    const imageRef = useRef(null);

    useEffect(() => {
        const image = imageRef.current;

        gsap.from(image, { opacity:0, duration:1, delay:1 });    
    })

    return (
        <div>
            <div ref={imageRef}>
                <Image
                    src="/image01.jpg"
                    alt="Hero img"
                    width={600}
                    height={600}
                    priority
                />
            </div>
        </div>
    )
}
