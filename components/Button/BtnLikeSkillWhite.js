// components/Button/BtnLikeSKillWhite.js

import Reacr from 'react';

export default function BtnLikeSKillWhite({ children }) {
    return(
        <>
            
            <p type="button " className=" py-1 rounded-full tracking-wider text-black italic bg-white px-5 py-1 w-auto">#<span>{children}</span></p>
       
        </>
    )
}