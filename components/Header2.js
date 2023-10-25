// components/Header2.js

import React from 'react';

export default function Header2() {
    return(
        <div>
            <header> 
                 {/* グローバルナビゲーション */}
                <div className="header-inner">
                    <button className="navmenu" type="button" tabindex="0" onfocus="toggleFocus(this)" onblur="toggleFocus(this)">
                        <span className="navline"></span>
                    </button>
                    <h1 id="header--maintitle">LUMI KOJO</h1>
                </div>
                 {/* セクション（ナビパネル) */}
                <div id="navpanel" className="navpanel">
                    <div className="navpanel-inner">
                        <h1>Home</h1>
                        <h1>About</h1>
                        <h1>Works</h1>
                    </div>
                </div>
            </header>
        </div>
    )
}