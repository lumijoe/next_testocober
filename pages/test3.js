// pages/test3.js

import React from 'react';
import Layout from '../components/Layout';
import Hero from '../components/Hero';
import Image from 'next/image';
import video_mp4 from "."

export default function Test3() {
    return (
        <div>
            <Layout>
                <Hero />
                <Image 
                src="/img02.jpg"
                alt="Image"
                width={395.5}
                height={227}
                priority
                />
                
                <p>loremloremlorem</p>
                <p>loremloremlorem</p>
                <p>loremloremlorem</p>
                <p>loremloremlorem</p>
            </Layout>
        </div>
    )
}