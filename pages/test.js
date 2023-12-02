// pages/test.js(単体テスト、結合テスト用ページ)

import React from 'react'
import Hero from '../components/Hero'
import Layout from '../components/Layout'
import BtnMore from '../components/Button/BtnMore'
import BtnCategories from '../components/Button/BtnCategories'
import Card2 from '../components/Card2';
import WorksItem from '../components/WorksItem';


export default function test () {
    return (
        <div>
            <Layout>
                <Hero />
                <Card2 />
                <div>
                    <WorksItem />
                    <WorksItem />
                    <WorksItem />
                </div>
            </Layout>
        </div>
    )
}
