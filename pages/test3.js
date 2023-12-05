// pages/test3.js

import React from 'react';
import Header2 from '../components/Header2';
import Hero from '../components/Hero';
import Footer from '../components/Footer';
import Navpanel from '@/components/Navpanel';
import Image from 'next/image';

export default function Test3() {
    return (
        <div>
        <Header2 />
        <Hero />
        <br />
        <Image 
        src="/work03.gif"
        alt="Image"
        width={395.5}
        height={227}
        priority
        />
        <p>loremloremlorem</p>
        <p>loremloremlorem</p>
        <p>loremloremlorem</p>
        <p>loremloremlorem</p>
        <Footer />
        </div>
    )
}