//pages/about.js(about詳細ページ)

import React from 'react';
import Header2 from '../components/Header2';
import Image from 'next/image';
import Footer from '../components/Footer';
import Btn from '../components/Button/Btn';
import Link from 'next/link';
import styles from '@/styles/Home.module.css' 

export default function About() {
    return (
        <div>
            <Header2 />
            <div style={{ position: "relative", height: "40vh" }}>
                <Image
                    className='h-60 w-full object-contain md:h-full md:w-48 hover:object-scale-down'
                    src="/image01.jpg"
                    alt="Hero img"
                    fill style={{ objectFit: "cover" }}
                    priority
                />  
            </div>
             {/* Works =====================================================*/}
            <div className='mt-[52px]' id="works"> 
                <div className={styles.center} >
                    <h2 className="text-8xl text-black italic">About</h2>
                </div>

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
                    <Btn><Link href="/test2">テストページ２に遷移</Link></Btn>
                    <Btn><Link href="/test">テストページ１に遷移</Link></Btn>
                    <Btn><Link href="/test3">テストページ3に遷移</Link></Btn>
                </div>
            </div>
            <Footer />
        </div>
    )
}