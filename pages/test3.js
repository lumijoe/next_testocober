// pages/test3.js

import React from 'react';
import Layout from '../components/Layout';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import Image from 'next/image';

export default function Test3() {
    return (
        <div>
            <Layout>
                <Hero />
                <Image 
                src="/work03.gif"
                alt="Image"
                width={395.5}
                height={227}
                priority
                />
                <Image 
                src="/7.1m_gifcompresser.gif"
                alt="Image"
                width={395.5}
                height={227}
                priority
                />
                <Image 
                src="7.6m_iloveimg.gif"
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