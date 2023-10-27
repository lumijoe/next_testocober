// components/Navpanel.js

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';


export default function Navpanel() {
    // エリアへ遷移する＃は変数で扱う（エスケープコードが効かない為）
    const worksarea = `/#works`;
    
    return (
        <div className='bg-black h-screen opacity-90 w-[97vw] '>
            <div id="navpanel" className="navpanel">
                <div className='text-white text-2xl italic font-thin pl-[3vw] pb-[50vw] pt-[calc(50vw-52px)]'>
                    <ul className='text-center'>
                        <li className='text-5xl text-white italic mb-4'>
                            <Link href="/">Home</Link></li>
                        <li className='text-5xl text-white italic mb-4'>
                            <Link href="/about">About</Link></li>
                        <li className='text-5xl text-white italic mb-4'><Link href={worksarea}>Works</Link></li>
                        <li className='flex justify-center mt-3'>
                            <a href="https://github.com/lumijoe" target="_blank">
                                <Image
                                    src="/githubwhite.svg"
                                    alt="Icon"
                                    width={32}
                                    height={32}
                                />
                            </a>
                        </li>
                        <li className='text-[12px] text-white italic  -mt-[4px]'>Github</li>
                        <li className='flex justify-center mt-3'>
                            <a href="https://vercel.com/lumijoes-projects" target="_blank">
                                <Image
                                    src="/vercelwhite.svg"
                                    alt="Icon"
                                    width={32}
                                    height={32}
                                />
                            </a>
                        </li>
                        <li className='text-[12px] text-white italic  -mt-[4px]'>Vercel</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
