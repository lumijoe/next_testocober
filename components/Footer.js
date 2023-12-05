// components/Header.js(Headerコンポーネント)

import React from 'react';
import FooterSkills from './Footer/FooterSkills';
import FooterNav from './Footer/FooterNav';
import FooterCopy from './Footer/FooterCopy';
import Image from 'next/image';

export default function Footer() {
    return (
        <div className='bg-black pt-[40px] pb-[40px] relative'>
            <footer>
                <div>
                    <FooterNav />
                    <span className="border-t-[0.5px] border-gray-200 block w-[88vw] mx-auto"></span>
                    <FooterSkills />
                    <FooterCopy />
                    <a href='#'className='absolute bottom-[42px] right-[20px]'>
                        <Image 
                            src="/totop.svg"
                            alt="Icon"
                            width={48}
                            height={48}
                        />
                    </a>
                </div>
            </footer>
        </div>
    )
}
