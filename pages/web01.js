// pages/works/web01.js(works詳細ページ)

import React from 'react';
import Header2 from '../components/Header2';
import Link from 'next/link';
import Footer from '../components/Footer';
import BtnLikeSKillWhite from '@/components/Button/BtnLikeSkillWhite';
import CommonImgTmb from '@/components/Works/CommonImgTmb';
import Image from 'next/image';
import Btn from '../components/Button/Btn';
import styles from '../styles/Footer.module.css';
/*
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';

// 必要なSwiperの追加モジュールをインストール
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

 
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"

// Artworkオブジェクトの配列を定義
const works = [
    {
        artist: "Ornella Binni",
        art: "https://images.unsplash.com/photo-1465869185982-5a1a7522cbcb?auto=format&fit=crop&w=300&q=80",
    },
    {
        artist: "Tom Byrom",
        art: "https://images.unsplash.com/photo-1548516173-3cabfa4607e9?auto=format&fit=crop&w=300&q=80",
    },
    {
        artist: "Vladimir Malyavko",
        art: "https://images.unsplash.com/photo-1494337480532-3725c85fd2ab?auto=format&fit=crop&w=300&q=80",
    },
];
*/

export default function Web01() {
    return (
        <div>
            <Header2 />
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
         {/*  

            <ScrollArea className="w-96 whitespace-nowrap rounded-md border">
                <div className="flex w-max space-x-4 p-4">
                    {works.map((artwork, index) => (
                        <figure key={index} className="shrink-0">
                            <div className="overflow-hidden rounded-md">
                                <Image
                                    src={artwork.art}
                                    alt={`Photo by ${artwork.artist}`}
                                    className="aspect-[3/4] h-fit w-fit object-cover"
                                />
                            </div>
                            <figcaption className="pt-2 text-xs text-muted-foreground">
                                Photo by{" "}
                                <span className="font-semibold text-foreground">
                                    {artwork.artist}
                                </span>
                            </figcaption>
                        </figure>
                    ))}
                </div>
                <ScrollBar orientation="horizontal" />
            </ScrollArea>

            
            {/* <Swiper
                autoplay={{ delay: 1700 }}
                navigation
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
                parallax={{ parallax: true }}
                spaceBetween={20}
                slidesPerView={3}
            >
                <SwiperSlide
                    autoplay={{ delay: 1700 }}
                >
                    <CommonImgTmb 
                        src='/img02.jpg'
                        alt="Image"
                        width={300}
                        height={200}
                        layout='responsive'
                        priority
                        
                                             
                    />
                    Slide 1
                </SwiperSlide>
                    
                <SwiperSlide>
                    <CommonImgTmb 
                        src='/img02.jpg'
                        alt="Image"
                        width={300}
                        height={200}
                        layout='responsive'
                        priority
                        style={{ maxWidth: 'none' }}
                                            
                    />
                    Slide 2
                </SwiperSlide>
            
                <SwiperSlide>
                    <CommonImgTmb 
                        src='/img02.jpg'
                        alt="Image"
                        width={300}
                        height={200}
                        layout='responsive'
                        priority
                        style={{ maxWidth: 'none' }}
                                            
                    />
                    Slide 3
                </SwiperSlide>
                <SwiperSlide>
                    <CommonImgTmb 
                        src='/img02.jpg'
                        alt="Image"
                        width={300}
                        height={200}
                        layout='responsive'
                        priority
                        style={{ maxWidth: 'none' }}                        
                    />
                    Slide 4
                </SwiperSlide>
                    
                <SwiperSlide>
                    <CommonImgTmb 
                        src='/img02.jpg'
                        alt="Image"
                        width={300}
                        height={200}
                        layout='responsive'
                        priority
                        style={{ maxWidth: 'none' }}
                                            
                    />
                    Slide 5
                </SwiperSlide>
            
                <SwiperSlide>
                    <CommonImgTmb 
                        src='/img02.jpg'
                        alt="Image"
                        width={300}
                        height={200}
                        layout='responsive'
                        priority
                        style={{ maxWidth: 'none' }}
                                            
                    />
                    Slide 6
                </SwiperSlide>
                
            </Swiper> */}

           


            

            <div className={styles.section5}></div>
            <Footer />
        </div>
    )
}
