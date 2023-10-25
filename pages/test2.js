// pages/test2.js

import React from 'react';
import Header2 from '../components/Header2';
import Hero from '../components/Hero';
import Card from '../components/Card';
import BtnCategories from '@/components/Button/BtnCategories';
import WorksItem from '@/components/WorksItem';


export default function test2() {
    return (
        <div>
            <Header2 />
            <Hero className="mt-0.8px" />
            <div>
                <Card />
            </div>
            <div>
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