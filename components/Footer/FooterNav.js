// components/Footer/FooterNav.js

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function FooterNav () {
    // バグエラー回避策：worksareaへ遷移させる＃の代わりの変数を定義（エスケープコード無効・#記述不可）
    const worksarea = `/#works`;
    const skillsarea = `/about#skills`;

    return (
        <div className='text-white italic pb-[40px] font-thin'>
            <ul className='text-center'>
                
                {/* Home */}
                <li className='text-[30px] text-white italic mb-4'>
                    <Link href="/">Home</Link></li>

                {/* Skills */}
                <li className='text-[30px] text-white italic mb-4'>
                    <Link href={skillsarea}>Skills</Link></li>

                {/* About */}
                <li className='text-[30px] text-white italic mb-4'>
                    <Link href="/about" >About</Link></li>
                
                {/* Works */}
                <li className='text-[30px] text-white italic mb-4'>
                    <Link href={worksarea}>Works</Link></li>

                {/* GitHub */}
                <li className='flex justify-center mb-4'>
                    <a href="https://github.com/lumijoe" target="_blank">
                        <Image
                            src="/githubwhite.svg"
                            alt="Icon"
                            width={32}
                            height={32}
                        />
                    </a>
                </li>
                <li className='text-[16px] text-white italic mt-[-12px]'>
                    <a href="https://github.com/lumijoe" target="_blank">
                        Github
                    </a>
                </li>

                {/* Vercel
                <li className='flex justify-center mt-8'>
                    <Link href="https://vercel.com/lumijoes-projects" target="_blank">
                        <Image
                            src="/vercelwhite.svg"
                            alt="Icon"
                            width={24}
                            height={24}
                        />
                    </Link>
                </li> */}
            </ul>
        </div>
    )
}