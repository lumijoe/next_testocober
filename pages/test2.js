// pages/test2.js

import React from 'react';
import Header2 from '../components/Header2';
import Card from '../components/Card';
import BtnCategories from '@/components/Button/BtnCategories';
import WorksItem from '@/components/WorksItem';
import Hero from '@/components/Hero';
import HeroScrollLine from '@/components/HeroScrollLine';


export default function test2() {
    return (
        <div className='relative'>
            <Header2 />
            <Hero />
            <div>
                <Card />
            </div>
            <div>
                <h2>NEXT.js</h2>
                <BtnCategories />
            </div>
            <div>
                <WorksItem />
                <WorksItem />
                <WorksItem />
                <WorksItem />
            </div>
        </div>
    )
}