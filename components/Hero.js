// components/Hero.js(Heroコンポーネント)

import React from 'react';
import Image from 'next/image';

export default function Hero() {
    return (
        <div>
            <Image
                src="/image01.jpg"
                alt="Hero img"
                width={600}
                height={600}
                priority
              />
        </div>
    )
}
