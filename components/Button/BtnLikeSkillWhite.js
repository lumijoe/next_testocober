// components/Button/BtnLikeSKillWhite.js

import React from 'react';

export default function BtnLikeSKillWhite({ children }) {
    return(
        <div>
            <p type="button" className="rounded-full tracking-wider text-black italic bg-white px-5 py-1 w-auto">#<span>{children}</span></p>
        </div>
    )
}