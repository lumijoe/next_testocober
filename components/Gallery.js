// components/gallery.js
import React from 'react'
import Image from 'next/image';

export default function Gallery() {
    return (
        <div>
            <div className="flex flex-row overflow-x-auto space-x-4">
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
    )
}

