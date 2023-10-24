// pages/test.js(単体テスト、結合テスト用ページ)

import React from 'react'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Footer from '../components/Footer'
import Layout from '../components/Layout'
import BtnMore from '../components/Button/BtnMore'
import BtnCategories from '../components/Button/BtnCategories'
import Card from '../components/Card'


export default function test () {
    return (
        <div>
            <Header />
            <Hero />
            <Footer />
            <Layout>
                <div>
                    <h2>Layout children</h2>
                    <BtnMore />
                </div>
                <Card />
                <div>
                    <BtnCategories />
                </div>
            </Layout>
        </div>
    )
}