// components/Header.js(Headerコンポーネント)

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
    return (
        <div className='relative h-18'>
            <header className=" fixed bg-gray-900 shadow text-white ">
                <div className="w-full max-w-screen-xl mx-auto p-4">
                    <div className="sm:flex sm:items-center sm:justify-between">
                        <Link href="/test" className="flex items-center mb-4 sm:mb-0">
                            <Image
                                className="h-8 mr-3"
                                src="/navbar.svg"
                                alt="nav img"
                                width={600}
                                height={600}
                                priority
                            />
                            
                            <span className="self-center text-2xl font-light whitespace-nowrap text-white">LUMI KOJO</span>
                        </Link>
                        <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-white sm:mb-0">
                            <li>
                                <Link href="." className="mr-4 hover:underline md:mr-6 ">Home</Link>
                            </li>
                            <li>
                                <Link href="/about" className="mr-4 hover:underline md:mr-6">About</Link>
                            </li>
                            <li>
                                <Link href="/test" className="mr-4 hover:underline md:mr-6 ">Works</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </header>
        </div>
    )
}


