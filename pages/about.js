//pages/about.js(about詳細ページ)

import React from 'react';
import Header2 from '../components/Header2';
import Image from 'next/image';
import Footer from '../components/Footer';
import Btn from '../components/Button/Btn';
import Link from 'next/link';
import styles from '../styles/Footer.module.css' 
import imgwork from '../public/imgwork.jpg';

export default function About() {
    const urlLinkedin = "https://www.linkedin.com/in/kojo-lumi-5a0873262";

    return (
        <div>
            <Header2 />
            <div className='relative'>
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
            </div>


            <div className='mt-[52px] pl-3.5'> 
            
                <p>loremloremloremloremlorem</p>
                <p>loremloremloremloremlorem</p>
                <p>loremloremloremloremlorem</p>
                <p>loremloremloremloremlorem</p>
                <p>loremloremloremloremlorem</p>
                <p>loremloremloremloremlorem</p>
                <p>loremloremloremloremlorem</p>
                <p>loremloremloremloremlorem</p>
                <p>loremloremloremloremlorem</p>
                <p>loremloremloremloremlorem</p>

                <div>
                    <Btn className="bg-indigo-600 w-full ">
                        <Link href={urlLinkedin} style={{ fontFamily: "Noto Sans JP", fontWeight: 300 }} className='text-[16px]'>Linkedinで詳細を見る</Link>
                    </Btn>
                    
                </div>
            </div>
            <div className={ `${styles.section5}` }></div>
            <Footer />
        </div>
    )
}

/* export default function About() {
    const backgroundImageStyle = {
        backgroundImage: `url('/imgwork.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        position: 'relative',
        height: '40vh',
    };
*/