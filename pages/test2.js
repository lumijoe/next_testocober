// pages/test2.js

// CommonImgTmbを使用したサイトtest5(使用していないtest3との比較)



import React from 'react';
import Layout from '../components/Layout';
import Hero from '../components/Hero';
import WorksBox2 from '../components/WorksBox2';

export default function Test2() {
    return (
        <div className='text-white'>
            <Layout>
                <Hero />
                <div className='bg-[#232323]'>
                <WorksBox2 />
                </div>
            </Layout>
            
        </div>
    )
}