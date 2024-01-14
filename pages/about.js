//pages/about.js(about詳細ページ)

import React from 'react';
import Header2 from '../components/Header2';
import Image from 'next/image';
import Footer from '../components/Footer';
import Btn from '../components/Button/Btn';
import Link from 'next/link';
import styles from '../styles/Footer.module.css' 
import imgwork from '../public/imgwork.jpg';

import JobTimeLineBox from '../components/About/JobTimeLineBox';
import JobText from '../components/About/JobText';



export default function About() {
    const urlLinkedin = "https://www.linkedin.com/in/kojo-lumi";

    return (
        <div>
            <Header2 />
            <div className='relative '>
                <div style={{ position: "relative", height: "40vh" }}>
                    <Image
                        className='h-60 w-full object-contain md:h-full md:w-48 hover:object-scale-down fixed'
                        src={imgwork}
                        alt="Work img"
                        fill={true}
                        style={{ objectFit: "cover", backgroundAttachment: 'fixed' }}
                        priority
                    />  
                   
                </div>
                
                <div className='absolute inset-0 bg-gray-950 opacity-60' style={{ height: "40vh" }}/>
                <div className={`text-[40px] md:text-[60px] italic font-medium absolute text-white top-[132px] text-center ${styles.redline} w-full `}>About</div>
                
            </div>

            {/* キャリアリスト */}
            <div className=' bg-black px-3.5 py-20 h-auto justify-center items-center w-full flex '>
                <JobTimeLineBox />
            </div>

            {/* テキスト */}
            <div className='px-3.5'>
                <JobText />
                <div class="relative bg-pink-300 w-full h-[500px]" id='skills'>
                    <h1 className={`text-[40px] md:text-[60px] italic font-medium text-center pt-[132px] ${styles.redline} w-full `}>Skills</h1>
                </div>

                <div >
                    <Link href={urlLinkedin} style={{ fontFamily: "Noto Sans JP", fontWeight: 300 }} className='text-[16px]'><Btn className="bg-indigo-600 w-full "><b>Linkedin</b>で詳細を見る</Btn></Link>
                </div>
                
            </div>
            <div className={ `${styles.section5}` }></div>
            <Footer />
        </div>
    )
}

