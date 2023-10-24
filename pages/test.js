// pages/test.js(単体テスト、結合テスト用ページ)

import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Layout from '../components/Layout'

export default function test () {
    return (
        <div>
            <Header />
            <Footer />
            <Layout>
                <div>
                    <h2>Layout children</h2>
                </div>
            </Layout>

        </div>
    )
}