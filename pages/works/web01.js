// pages/about.js(more Aboutページ)

import React from 'react';
import Layout from '../../components/Layout';
import Btn from '../../components/Button/Btn';
import Link from 'next/link';

export default function About() {
    return (
        <div>
            <Layout>
                <h1>This is more ABOUT page</h1>
                <Btn>
                    <Link href="/test">Test pageへ戻る</Link>
                </Btn>
            </Layout>
        </div>
    )
}