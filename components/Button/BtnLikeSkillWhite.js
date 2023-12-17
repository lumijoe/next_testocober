// components/Button/BtnLikeSKillWhite.js

import Reacr from 'react';

export default function BtnLikeSKillWhite({ children }) {
    return(
        <div>
            <div className="py-1">
            <div type="button " className="align-left rounded-full tracking-wider text-black italic bg-white text-left pl-5 py-1 w-[120px] shadow-xl shadow-bg-gray-900/30">#<span>{children}</span></div>
        </div>
        </div>
    )
}