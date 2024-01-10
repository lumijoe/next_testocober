//pages/about.js(about詳細ページ)

import React from 'react';
import Header2 from '../components/Header2';
import Image from 'next/image';
import Footer from '../components/Footer';
import Btn from '../components/Button/Btn';
import Link from 'next/link'; 
import imgwork from '../public/imgwork.jpg';
import styles from '../styles/Footer.module.css';

export default function aboutTest() {
    return (
        <div>
            {/* 1：ヘッダー */}
            <Header2 />

            {/* 2：固定画像 */}
            <div className='relative'>
                <div style={{ position: "relative", height: "376px" }}>
                    <Image
                        className='h-60 w-full object-contain md:h-full md:w-48 hover:object-scale-down fixed'
                        src={imgwork}
                        alt="Work img"
                        fill={true}
                        style={{ objectFit: "cover", backgroundAttachment: 'fixed' }}
                        priority
                    />  
                </div>
                <div className='absolute inset-0 bg-gray-950 opacity-60' style={{ height: "376px" }}/>
                
            </div>

            <div className='bg-slate-400 w-full h-auto'> 
            
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
                
            </div>
            <div className={` ${styles.section1}`}></div>
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