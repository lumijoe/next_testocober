// pages/test.js(単体テスト、結合テスト用ページ)

import React from 'react'
import Hero from '../components/Hero'
import Layout from '../components/Layout'
import WorksBox2 from '../components/WorksBox2'
import styles from '../styles/test.module.css';

export default function test () {
    return (
        <div>
            <Layout>
                <Hero />
                <div>
                    <div className={` ${styles.section1}`}></div>
                <WorksBox2 />
                </div>
        </Layout>
      </div>
    )
}