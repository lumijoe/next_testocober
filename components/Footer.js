// components/Header.js(Headerコンポーネント)

import React from 'react';
import FooterSkills from './Footer/FooterSkills';
import FooterNav from './Footer/FooterNav';
import FooterCopy from './Footer/FooterCopy';
import Image from '../public/totop.svg';

export default function Footer() {
    return (
        <div className='bg-defaultblack pt-[40px] pb-[40px]'>
            <footer>
                <div>
                    <FooterNav />
                    <span className="border-t-[0.5px] border-gray-500 block w-[88vw] mx-auto"></span>
                    <FooterSkills />
                    <FooterCopy />
                </div>
            </footer>
        </div>
    )
}
