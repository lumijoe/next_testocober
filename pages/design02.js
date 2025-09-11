// pages/works/Design02.js

import React from 'react';
import Header2 from '../components/Header2';
import Footer from '../components/Footer';
import Image from 'next/image';
import styles from '../styles/Footer.module.css';
import Btn from '../components/Button/Btn';

export default function Design02() {
    // PDFのURL化サイト
    const urlWorksDesign02 = "https://online.updf.com/index/share/ja-JP?shareId=249c45ae-81a5-4f3c-a03b-55ad8b384d93";


    return (
        <div>
            <Header2 />
            <div className="bg-white pt-[132px] w-full flex flex-col text-center justify-center items-center">
                {/* <h1 style={{ fontFamily: "Noto Sans JP", fontWeight: 400 }}>下記資料はPDFをURL化するサービスサイト<br/>「UPDF」でもご覧いただけます
                <div >
                    <a href={urlWorksDesign02} style={{ fontFamily: "Noto Sans JP", fontWeight: 300 }} className='text-[16px] target="_blank" rel="noopener noreferrer"'><Btn className="bg-indigo-600 w-full "><b>UPDF</b>で資料を見る</Btn></a>
                </div>

                </h1> */}
                <Image
                    src="/design02_01.jpg"
                    alt="jpg資料"
                    width={800}
                    height={800}
                    style={{ paddingBottom: "40px" }}
                />
                <Image
                    src="/design02_02.jpg"
                    alt="jpg資料"
                    width={800}
                    height={800}
                    style={{ paddingBottom: "40px" }}
                />
                <Image
                    src="/design02_03.jpg"
                    alt="jpg資料"
                    width={800}
                    height={800}
                    style={{ paddingBottom: "40px" }}
                />
                <Image
                    src="/design02_04.jpg"
                    alt="jpg資料"
                    width={800}
                    height={800}
                    style={{ paddingBottom: "40px" }}
                />
                <Image
                    src="/design02_05.jpg"
                    alt="jpg資料"
                    width={800}
                    height={800}
                    style={{ paddingBottom: "40px" }}
                />
               
            
            </div>
            <div className={styles.section5}></div>
            <Footer />
        </div>
    )
}
