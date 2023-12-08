// pages/test3.js

import React from 'react';
import Layout from '../components/Layout';
import Hero from '../components/Hero';
import Image from 'next/image';
import WorksBox from '../components/WorksBox';

export default function Test3() {
    return (
        <div className='bg-white'>
            <Layout>
                <Hero />
                
                <WorksBox />
            </Layout>
        </div>
    )
}