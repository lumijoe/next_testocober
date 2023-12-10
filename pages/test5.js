// pages/test5.js

import React from 'react';
import Layout from '../components/Layout';
import Hero from '../components/Hero';
import WorksBox from '../components/WorksBox';

export default function Test5() {
    return (
        <div className='bg-white'>
            <Layout>
                <Hero />
                <WorksBox />
            </Layout>
        </div>
    )
}