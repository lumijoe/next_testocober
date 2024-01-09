// components/Header.js(Headerコンポーネント)

import React from 'react';
import FooterSkills from './Footer/FooterSkills';
import FooterNav from './Footer/FooterNav';
import FooterCopy from './Footer/FooterCopy';
import Image from 'next/image';
import Link from 'next/link';


export default function Footer() {
    return (
        <footer className='bg-black pt-[40px] pb-[40px] relative'>
                <div>
                    <FooterNav />
                    <span className="border-t-[0.5px] border-[dimgray] block w-[88vw] mx-auto"></span>
                    <FooterSkills />
                    <FooterCopy />
                    <Link href='#'className='absolute bottom-[80px] right-[20px]'>
                        <Image 
                            src="/totop.svg"
                            alt="Icon"
                            width={60}
                            height={60}
                        />
                    </Link>
                </div>
        </footer>
    )
}
