// components/Navpanel.js

import React from 'react';
import Image from 'next/image';


export default function Navpanel() {
    return (
        <div className='bg-black h-screen opacity-90 w-[97vw] '>
            <div id="navpanel" className="navpanel">
                <div className='text-white text-2xl italic font-thin pl-[3vw] pb-[50vw] pt-[calc(50vw-52px)]'>
                    <ul className='text-center'>
                        <li className='text-5xl text-white italic mb-4'>Home</li>
                        <li className='text-5xl text-white italic mb-4'>About</li>
                        <li className='text-5xl text-white italic mb-4'>Works</li>
                        <li className='flex justify-center mt-3'>
                            <Image
                                src="/githubwhite.svg"
                                alt="Icon"
                                width={32}
                                height={32}
                            />
                        </li>
                        <li className='text-[12px] text-white italic  -mt-[4px]'>Github</li>
                        <li className='flex justify-center mt-3'>
                        <Image
                            src="/vercelwhite.svg"
                            alt="Icon"
                            width={32}
                            height={32}
                        />  
                        </li>
                        <li className='text-[12px] text-white italic  -mt-[4px]'>Vercel</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
