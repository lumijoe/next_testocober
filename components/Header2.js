// components/Header2.js

import React, { useState, useEffect } from 'react';
import Image from 'next/image'; 
import Navpanel from '../components/Navpanel';

export default function Header2() {
    const [isNavpanelOpen, setIsNavpanelOpen] = useState(false);
    // クリックされるごとに表示非表示を繰り返すトグル設定
    const toggleNavpanel = () => {
        setIsNavpanelOpen(!isNavpanelOpen);
    };
    // リンクをクリックされたら必ず非表示にする設定
    const closeNavpanel = () => {
        setIsNavpanelOpen(false);
    };

    return (
        <div className='fixed z-50 h-14 ' >
            <div className="flex flex-row w-screen h-14 bg-black align-middle z-500">
                <div className="flex-1 justify-center my-auto pl-3.5">
                    <Image
                        src={isNavpanelOpen ? "/navbarclose.svg" : "/navbar.svg"}
                        alt="Icon"
                        width={32}
                        height={32}
                        onClick={toggleNavpanel}
                    />
                </div>
                <div className="flex justify-center m-auto">
                    <h1 className='text-white text-center italic text-2xl translate-no'>LUMI KOJO</h1>
                </div>
                <div className="flex-1 my-auto pr-3.5 justify-center"></div>
            </div>

            {/* Navpanelの出現方法の設定（左から右、速さ） */}
            <style jsx>{`
                .navpanel {
                    transform: translateX(-100%);
                    transition: transform 0.3s ease-in-out;
                }

                .navpanel.open {
                    transform: translateX(0);
                }
            `}</style>

            {/* Navpanelコンポーネント */}
            <div id="navpanel" className={`navpanel ${isNavpanelOpen ? 'open' : ''}`}>
                <Navpanel closeNavpanel={closeNavpanel} />
            </div>
        </div>
    );
}
