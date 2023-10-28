//pages/about.js(about詳細ページ)

import React from 'react';
import Header2 from '../components/Header2';
import Image from 'next/image';
import Footer from '../components/Footer';
import Btn from '../components/Button/Btn';
import Link from 'next/link';
import styles from '@/styles/Home.module.css' 
import imgwork from '../public/imgwork.jpg';

export default function About() {
    return (
        <div>
            <Header2 />
            <div>
                <div style={{ position: "relative", height: "40vh" }}>
                    <Image
                        className='h-60 w-full object-contain md:h-full md:w-48 hover:object-scale-down'
                        src={imgwork}
                        alt="Work img"
                        fill={true}
                        style={{ objectFit: "cover", backgroundAttachment: 'fixed' }}
                        priority
                    />  
                </div>
                <div className='absolute inset-0 bg-gray-950 opacity-60' style={{ height: "40vh" }}/>
            </div>

            <div className='mt-[52px]'> 
            
                <p>loremloremloremloremlorem</p>
                <p>loremloremloremloremlorem</p>
                <p>loremloremloremloremlorem</p>
                <p>loremloremloremloremlorem</p>
                <p>loremloremloremloremlorem</p>
                <p>loretypesampleoremlorem</p>
                <p>loremloremloremloremlorem</p>
                <p>loremloremloremloremlorem</p>
                <p>loremloremloremloremlorem</p>
                <p>loremloremloremloremlorem</p>
                <p>loremloremloremloremlorem</p>
                <div>
                    <Btn><Link href="/test2">テストページ２に遷移</Link></Btn>
                    <Btn><Link href="/test">テストページ１に遷移</Link></Btn>
                    <Btn><Link href="/test3">テストページ3に遷移</Link></Btn>
                </div>
            </div>
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

    return (
        <div>
            <Header2 />
            <div style={backgroundImageStyle}>
                <div className="absolute inset-0 bg-gray-950 opacity-70" style={{ height: "40vh" }} />
            </div>
            <div className='mt-[52px]'>*/