// components/WorksItem.js(WorksItemコンポーネント)

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function WorksItem() {
    return (
        <div className='mt-16'>
            <div className='max-w-md mx-auto bg-white rounded-sm shadow-md overflow-hidden md:max-w-2xl'>
                <div className='md:flex'>
                    <div className='md:shrink-0'>
                        <div style={{ position: "relative", height: "30vh" }}>
                            <Image
                                className='h-60 w-full object-cover md:h-full md:w-48'
                                src="/image01.jpg"
                                alt="Hero img"
                                fill style={{ objectFit: "cover" }}
                                priority
                            />  
                        </div>
                    </div>
                    <div className='p-8'>
                        <div className='uppercase tracking-wide text-sm text-indigo-500 font-semibold'>#Next.js #React #Firebase #Tailwindcss</div>
                        <Link className='block mt-2 text-lg leading-tight font-medium text-balck hover:underline' href="/test">T社 | Webサイト開発
                        </Link>
                        <p className='mt-2 text-slate-500'>Web development</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

