// components/Footer/FooterNav.js

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function FooterNav () {
    // バグエラー回避策：worksareaへ遷移させる＃の代わりの変数を定義（エスケープコード無効・#記述不可）
    const worksarea = `/#works`;
    return (
        <div className='text-white text-2xl italic font-thin pb-[20px]'>
            <ul className='text-center'>
                
                {/* Home */}
                <li className='text-1xl text-white italic mb-4'>
                    <Link href="/">Home</Link></li>
                
                {/* About */}
                <li className='text-1xl text-white italic mb-4'>
                    <Link href="/test4" >About</Link></li>
                
                {/* Works */}
                <li className='text-1xl text-white italic mb-4'>
                    <Link href={worksarea}>Works</Link></li>
                
                {/* GitHub */}
                <li className='flex justify-center mt-3'>
                    <a href="https://github.com/lumijoe" target="_blank">
                        <Image
                            src="/githubwhite.svg"
                            alt="Icon"
                            width={16}
                            height={16}
                        />
                    </a>
                </li>
                <li className='text-[16px] text-white italic  -mt-[4px] mb-2'>Github</li>

                {/* Vercel */}
                <li className='flex justify-center'>
                    <a href="https://vercel.com/lumijoes-projects" target="_blank">
                        <Image
                            src="/vercelwhite.svg"
                            alt="Icon"
                            width={16}
                            height={16}
                        />
                    </a>
                </li>
                <li className='text-[16px] text-white italic  -mt-[4px]'>Vercel</li>
            </ul>
        </div>
    )
}