// components/Header2.js

import React from 'react';

export default function Header2() {
    return(
        <div>
            <header className=' relative bg-stone-950 h-0.8px'> 
                 {/* グローバルナビゲーション */}
                <div className="header-inner fixed">
                    <button className="navmenu" type="button" tabindex="0" onfocus="toggleFocus(this)" onblur="toggleFocus(this)">
                        <span className="navline text-white" ></span>
                    </button>
                    <h1 id="header--maintitle" className='text-black'>LUMI KOJO</h1>
                </div>
                 {/* セクション（ナビパネル) */}
                <div id="navpanel" className="navpanel ">
                    <div className="navpanel-inner flex flex-row justify-between">
                        <h1 className='text-white'>Home</h1>
                        <h1 className='text-white'>About</h1>
                        <h1 className='text-white'>Works</h1>
                    </div>
                </div>
            </header>
        </div>
    )
}