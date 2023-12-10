// pages/test3.js

import React from 'react';
import Layout from '../components/Layout';
import Hero from '../components/Hero';
import WorksBox2 from '../components/WorksBox2';

export default function Test3() {
    return (
        <div className='bg-white'>
            <Layout>
                <Hero />
                <WorksBox2 />
            </Layout>
        </div>
    )
}