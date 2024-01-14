// pages/works/design01.js

import React from 'react';
import Header2 from '../components/Header2';

import Footer from '../components/Footer';

import CommonImgTmb from '@/components/Works/CommonImgTmb';
import Image from 'next/image';

import styles from '../styles/Footer.module.css';

export default function Design01() {
    return (
        <div>
            <Header2 />
            <div className="bg-white pt-[92px] w-full flex flex-col text-center justify-center items-center">
                <Image
                    src="/design01_01.jpg"
                    alt="jpg資料"
                    width={800}
                    height={800}
                    style={{ paddingBottom: "40px" }}
                />
                <Image
                    src="/design01_01.jpg"
                    alt="jpg資料"
                    width={800}
                    height={800}
                    style={{ paddingBottom: "40px" }}
                />
                <Image
                    src="/design01_01.jpg"
                    alt="jpg資料"
                    width={800}
                    height={800}
                    style={{ paddingBottom: "40px" }}
                />
                <Image
                    src="/design01_01.jpg"
                    alt="jpg資料"
                    width={800}
                    height={800}
                    style={{ paddingBottom: "40px" }}
                />
                <Image
                    src="/design01_01.jpg"
                    alt="jpg資料"
                    width={800}
                    height={800}
                    style={{ paddingBottom: "40px" }}
                />
                <Image
                    src="/design01_01.jpg"
                    alt="jpg資料"
                    width={800}
                    height={800}
                    style={{ paddingBottom: "40px" }}
                />
                
            
            </div>
            <div className={styles.section4}></div>
            <Footer />
        </div>
    )
}
