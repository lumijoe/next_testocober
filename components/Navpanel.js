// components/Navpanel.js

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';


export default function Navpanel({ closeNavpanel }) {
    // バグエラー回避策：worksareaへ遷移させる＃の代わりの変数を定義（エスケープコード無効・#記述不可）
    const worksarea = `/#works`;
    
    return (
        <div className='bg-black h-screen opacity-90 w-[97vw] '>
            <div id="navpanel" className="navpanel">
                <div className='text-white text-2xl italic font-thin pl-[3vw] pb-[50vw] pt-[calc(50vw-52px)]'>
                    <ul className='text-center'>
                        
                        {/* Home */}
                        <li className='text-5xl text-white italic mb-4'>
                            <Link href="/" onClick={closeNavpanel}>Home</Link></li>
                        
                        {/* About */}
                        <li className='text-5xl text-white italic mb-4'>
                            <Link href="/test4" onClick={closeNavpanel}>About</Link></li>
                        
                        {/* Works */}
                        <li className='text-5xl text-white italic mb-4'>
                            <Link href={worksarea} onClick={closeNavpanel}>Works</Link></li>
                        
                        {/* GitHub */}
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

                        {/* Vercel */}
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
