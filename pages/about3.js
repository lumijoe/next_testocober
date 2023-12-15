// pages/about3.js

import React from 'react';
import Layout from '../components/Layout' ;
import Hero from '../components/Hero';
import Link from 'next/link';
import Image from 'next/image';
import CommonImgTmb from '../components/Works/CommonImgTmb';
import BtnLike from '../components/Button/BtnLike';
import styles from '../styles/Footer.module.css';
import BtnLikeSkillBlack from '@/components/Button/BtnLikeSkillBlack';

export default function about3() {
    return(
        <div className='bg-white'>
            <Layout>
                <Hero />
                <div className={styles.section1}>
                
                
                
                    <div>
                    {/* ========================= */}
                    <h1 className='md:text-8xl text-6xl italic text-center pt-40 mb-20'>Design, Direction, Creative Development</h1>
                    <h2 className='text-[20px] text-center italic tracking-widest mt-60'>解決を開発するために<br/>視覚技術と言語技術を駆使する。</h2>
                    {/* ========================= */}
                    <p  id='works' className='mb-8 pt-40 text-6xl md:text-4xl italic font-semibold text-center'>Works</p>
                    <span className='text-4xl thin text-center w-[6%] h-[1px] bg-pink-600 inline-block ml-[47%] mr-[47%] rotate-[-70deg] overflow-hidden mb-8'></span>
                    {/* ========================= */}
                    </div>

                    
                    
                    {/* カテゴリ:サイト */}
                    <div className='pb-[200px]'>
                        <div className='flex justify-center'>
                            <BtnLike className="bg-emerald-600 rounded-bl-2xl"><span className='text-[18px] tracking-[3px]'></span>Webサイト</BtnLike>
                        </div>

                        <div className='flex flex-col-reverse h-auto justify-center'>
                            <div className='flex flex-row w-[100vw] overflow-x-scroll overflow-auto '>
                                <div className='flex flex-col justify-center relative pl-3 pr-3 pt-[30px] mb-[20px] bg-gray-100 mr-3 h-auto w-auto rounded-xl'>
                                    <CommonImgTmb 
                                    src="/work04.png"
                                    alt="Image"
                                    width={262}
                                    height={237}
                                    priority
                                    style={{ maxWidth: 'none' }}
                                    />
                                    <Link href='/about'>
                                        <Image
                                            src="/torightWhite.svg"
                                            alt="Icon"
                                            width={52}
                                            height={52}
                                            style={{ paddingTop: "25px", position: "absolute", top: "30%", left: "5%" }}
                                        />
                                    </Link>
                                    <p className='self-center text-sm py-5'>Graphic<br/><span>
                                    ブランドを続けるために</span></p>
                                    <div className='flex flex-col justify-around text-center items-center pb-[50px]'>
                                    <BtnLikeSkillBlack>Node.js</BtnLikeSkillBlack>
                                    <BtnLikeSkillBlack>Node.js</BtnLikeSkillBlack>
                                    <BtnLikeSkillBlack>Node.js</BtnLikeSkillBlack>
                                    <BtnLikeSkillBlack>Node.js</BtnLikeSkillBlack>
                                    </div>
                                    
                                </div>
                                <div className='flex flex-col justify-center relative pl-3 pr-3 pt-[30px] mb-[20px] bg-gray-100 mr-3 h-auto w-auto rounded-xl'>
                                    <CommonImgTmb 
                                    src="/work04.png"
                                    alt="Image"
                                    width={262}
                                    height={237}
                                    priority
                                    style={{ maxWidth: 'none' }}
                                    />
                                    <Link href='/about'>
                                        <Image
                                            src="/torightWhite.svg"
                                            alt="Icon"
                                            width={52}
                                            height={52}
                                            style={{ paddingTop: "25px", position: "absolute", top: "30%", left: "5%" }}
                                        />
                                    </Link>
                                    <p className='self-center text-sm py-5'>Graphic<br/><span>
                                    ブランドを続けるために</span></p>
                                    <div className='flex flex-col justify-around text-center items-center pb-[50px]'>
                                    <BtnLikeSkillBlack>Node.js</BtnLikeSkillBlack>
                                    <BtnLikeSkillBlack>Node.js</BtnLikeSkillBlack>
                                    <BtnLikeSkillBlack>Node.js</BtnLikeSkillBlack>
                                    <BtnLikeSkillBlack>Node.js</BtnLikeSkillBlack>
                                    </div>
                                    
                                </div>
                                <div className='flex flex-col justify-center relative pl-3 pr-3 pt-[30px] mb-[20px] bg-gray-100 mr-3 h-auto w-auto rounded-xl'>
                                    <CommonImgTmb 
                                    src="/work04.png"
                                    alt="Image"
                                    width={262}
                                    height={237}
                                    priority
                                    style={{ maxWidth: 'none' }}
                                    />
                                    <Link href='/about'>
                                        <Image
                                            src="/torightWhite.svg"
                                            alt="Icon"
                                            width={52}
                                            height={52}
                                            style={{ paddingTop: "25px", position: "absolute", top: "30%", left: "5%" }}
                                        />
                                    </Link>
                                    <p className='self-center text-sm py-5'>Graphic<br/><span>
                                    ブランドを続けるために</span></p>
                                    <div className='flex flex-col justify-around text-center items-center pb-[50px]'>
                                    <BtnLikeSkillBlack>Node.js</BtnLikeSkillBlack>
                                    <BtnLikeSkillBlack>Node.js</BtnLikeSkillBlack>
                                    <BtnLikeSkillBlack>Node.js</BtnLikeSkillBlack>
                                    <BtnLikeSkillBlack>Node.js</BtnLikeSkillBlack>
                                    </div>
                                    
                                </div>
                                <div className='flex flex-col justify-center relative pl-3 pr-3 pt-[30px] mb-[20px] bg-gray-100 mr-3 h-auto w-auto rounded-xl'>
                                    <CommonImgTmb 
                                    src="/work04.png"
                                    alt="Image"
                                    width={262}
                                    height={237}
                                    priority
                                    style={{ maxWidth: 'none' }}
                                    />
                                    <Link href='/about'>
                                        <Image
                                            src="/torightWhite.svg"
                                            alt="Icon"
                                            width={52}
                                            height={52}
                                            style={{ paddingTop: "25px", position: "absolute", top: "30%", left: "5%" }}
                                        />
                                    </Link>
                                    <p className='self-center text-sm py-5'>Graphic<br/><span>
                                    ブランドを続けるために</span></p>
                                    <div className='flex flex-col justify-around text-center items-center pb-[50px]'>
                                    <BtnLikeSkillBlack>Node.js</BtnLikeSkillBlack>
                                    <BtnLikeSkillBlack>Node.js</BtnLikeSkillBlack>
                                    <BtnLikeSkillBlack>Node.js</BtnLikeSkillBlack>
                                    <BtnLikeSkillBlack>Node.js</BtnLikeSkillBlack>
                                    </div>
                                    
                                </div>
                                <div className='flex flex-col justify-center relative pl-3 pr-3 pt-[30px] mb-[20px] bg-gray-100 mr-3 h-auto w-auto rounded-xl'>
                                    <CommonImgTmb 
                                    src="/work04.png"
                                    alt="Image"
                                    width={262}
                                    height={237}
                                    priority
                                    style={{ maxWidth: 'none' }}
                                    />
                                    <Link href='/about'>
                                        <Image
                                            src="/torightWhite.svg"
                                            alt="Icon"
                                            width={52}
                                            height={52}
                                            style={{ paddingTop: "25px", position: "absolute", top: "30%", left: "5%" }}
                                        />
                                    </Link>
                                    <p className='self-center text-sm py-5'>Graphic<br/><span>
                                    ブランドを続けるために</span></p>
                                    <div className='flex flex-col justify-around text-center items-center pb-[50px]'>
                                    <BtnLikeSkillBlack>Node.js</BtnLikeSkillBlack>
                                    <BtnLikeSkillBlack>Node.js</BtnLikeSkillBlack>
                                    <BtnLikeSkillBlack>Node.js</BtnLikeSkillBlack>
                                    <BtnLikeSkillBlack>Node.js</BtnLikeSkillBlack>
                                    </div>
                                    
                                </div>
                                <div className='flex flex-col justify-center relative pl-3 pr-3 pt-[30px] mb-[20px] bg-gray-100 mr-3 h-auto w-auto rounded-xl'>
                                    <CommonImgTmb 
                                    src="/work04.png"
                                    alt="Image"
                                    width={262}
                                    height={237}
                                    priority
                                    style={{ maxWidth: 'none' }}
                                    />
                                    <Link href='/about'>
                                        <Image
                                            src="/torightWhite.svg"
                                            alt="Icon"
                                            width={52}
                                            height={52}
                                            style={{ paddingTop: "25px", position: "absolute", top: "30%", left: "5%" }}
                                        />
                                    </Link>
                                    <p className='self-center text-sm py-5'>Graphic<br/><span>
                                    ブランドを続けるために</span></p>
                                    <div className='flex flex-col justify-around text-center items-center pb-[50px]'>
                                    <BtnLikeSkillBlack>Node.js</BtnLikeSkillBlack>
                                    <BtnLikeSkillBlack>Node.js</BtnLikeSkillBlack>
                                    <BtnLikeSkillBlack>Node.js</BtnLikeSkillBlack>
                                    <BtnLikeSkillBlack>Node.js</BtnLikeSkillBlack>
                                    </div>
                                    
                                </div>
                                <div className='flex flex-col justify-center relative pl-3 pr-3 pt-[30px] mb-[20px] bg-gray-100 mr-3 h-auto w-auto rounded-xl'>
                                    <CommonImgTmb 
                                    src="/work04.png"
                                    alt="Image"
                                    width={262}
                                    height={237}
                                    priority
                                    style={{ maxWidth: 'none' }}
                                    />
                                    <Link href='/about'>
                                        <Image
                                            src="/torightWhite.svg"
                                            alt="Icon"
                                            width={52}
                                            height={52}
                                            style={{ paddingTop: "25px", position: "absolute", top: "30%", left: "5%" }}
                                        />
                                    </Link>
                                    <p className='self-center text-sm py-5'>Graphic<br/><span>
                                    ブランドを続けるために</span></p>
                                    <div className='flex flex-col justify-around text-center items-center pb-[50px]'>
                                    <BtnLikeSkillBlack>Node.js</BtnLikeSkillBlack>
                                    <BtnLikeSkillBlack>Node.js</BtnLikeSkillBlack>
                                    <BtnLikeSkillBlack>Node.js</BtnLikeSkillBlack>
                                    <BtnLikeSkillBlack>Node.js</BtnLikeSkillBlack>
                                    </div>
                                </div> 
                            </div>
                        </div>
                    </div>{/* works サイト */}



                    {/* カテゴリ:Webアプリ */}
                    <div className='pb-[200px]'>
                        <div className='flex justify-center'>
                            <BtnLike className="bg-amber-400 rounded-bl-2xl"><span className='text-[18px] tracking-[3px]'></span>Webアプリ</BtnLike>
                        </div>

                        <div className='flex flex-col-reverse h-auto justify-center'>
                            <div className='flex flex-row w-[100vw] overflow-x-scroll overflow-auto '>
                                <div className='flex flex-col justify-center relative pl-3 pr-3 pt-[30px] mb-[20px] bg-gray-100 mr-3 h-auto w-auto rounded-xl'>
                                    <CommonImgTmb 
                                    src="/img07tmb.png"
                                    alt="Image"
                                    width={262}
                                    height={237}
                                    priority
                                    style={{ maxWidth: 'none' }}
                                    />
                                    <Link href='/about'>
                                        <Image
                                            src="/torightWhite.svg"
                                            alt="Icon"
                                            width={52}
                                            height={52}
                                            style={{ paddingTop: "25px", position: "absolute", top: "30%", left: "5%" }}
                                        />
                                    </Link>
                                    <p className='self-center text-sm py-5'>Graphic<br/><span>
                                    ブランドを続けるために</span></p>
                                    <div className='flex flex-col justify-around text-center items-center pb-[50px]'>
                                    <BtnLikeSkillBlack>Node.js</BtnLikeSkillBlack>
                                    <BtnLikeSkillBlack>Node.js</BtnLikeSkillBlack>
                                    <BtnLikeSkillBlack>Node.js</BtnLikeSkillBlack>
                                    <BtnLikeSkillBlack>Node.js</BtnLikeSkillBlack>
                                    </div>
                                    
                                </div>
                                <div className='flex flex-col justify-center relative pl-3 pr-3 pt-[30px] mb-[20px] bg-gray-100 mr-3 h-auto w-auto rounded-xl'>
                                    <CommonImgTmb 
                                    src="/img07tmb.png"
                                    alt="Image"
                                    width={262}
                                    height={237}
                                    priority
                                    style={{ maxWidth: 'none' }}
                                    />
                                    <Link href='/about'>
                                        <Image
                                            src="/torightWhite.svg"
                                            alt="Icon"
                                            width={52}
                                            height={52}
                                            style={{ paddingTop: "25px", position: "absolute", top: "30%", left: "5%" }}
                                        />
                                    </Link>
                                    <p className='self-center text-sm py-5'>Graphic<br/><span>
                                    ブランドを続けるために</span></p>
                                    <div className='flex flex-col justify-around text-center items-center pb-[50px]'>
                                    <BtnLikeSkillBlack>Node.js</BtnLikeSkillBlack>
                                    <BtnLikeSkillBlack>Node.js</BtnLikeSkillBlack>
                                    <BtnLikeSkillBlack>Node.js</BtnLikeSkillBlack>
                                    <BtnLikeSkillBlack>Node.js</BtnLikeSkillBlack>
                                    </div>
                                    
                                </div>
                                <div className='flex flex-col justify-center relative pl-3 pr-3 pt-[30px] mb-[20px] bg-gray-100 mr-3 h-auto w-auto rounded-xl'>
                                    <CommonImgTmb 
                                    src="/img07tmb.png"
                                    alt="Image"
                                    width={262}
                                    height={237}
                                    priority
                                    style={{ maxWidth: 'none' }}
                                    />
                                    <Link href='/about'>
                                        <Image
                                            src="/torightWhite.svg"
                                            alt="Icon"
                                            width={52}
                                            height={52}
                                            style={{ paddingTop: "25px", position: "absolute", top: "30%", left: "5%" }}
                                        />
                                    </Link>
                                    <p className='self-center text-sm py-5'>Graphic<br/><span>
                                    ブランドを続けるために</span></p>
                                    <div className='flex flex-col justify-around text-center items-center pb-[50px]'>
                                    <BtnLikeSkillBlack>Node.js</BtnLikeSkillBlack>
                                    <BtnLikeSkillBlack>Node.js</BtnLikeSkillBlack>
                                    <BtnLikeSkillBlack>Node.js</BtnLikeSkillBlack>
                                    <BtnLikeSkillBlack>Node.js</BtnLikeSkillBlack>
                                    </div>
                                    
                                </div>
                                <div className='flex flex-col justify-center relative pl-3 pr-3 pt-[30px] mb-[20px] bg-gray-100 mr-3 h-auto w-auto rounded-xl'>
                                    <CommonImgTmb 
                                    src="/img07tmb.png"
                                    alt="Image"
                                    width={262}
                                    height={237}
                                    priority
                                    style={{ maxWidth: 'none' }}
                                    />
                                    <Link href='/about'>
                                        <Image
                                            src="/torightWhite.svg"
                                            alt="Icon"
                                            width={52}
                                            height={52}
                                            style={{ paddingTop: "25px", position: "absolute", top: "30%", left: "5%" }}
                                        />
                                    </Link>
                                    <p className='self-center text-sm py-5'>Graphic<br/><span>
                                    ブランドを続けるために</span></p>
                                    <div className='flex flex-col justify-around text-center items-center pb-[50px]'>
                                    <BtnLikeSkillBlack>Node.js</BtnLikeSkillBlack>
                                    <BtnLikeSkillBlack>Node.js</BtnLikeSkillBlack>
                                    <BtnLikeSkillBlack>Node.js</BtnLikeSkillBlack>
                                    <BtnLikeSkillBlack>Node.js</BtnLikeSkillBlack>
                                    </div>
                                    
                                </div>
                                <div className='flex flex-col justify-center relative pl-3 pr-3 pt-[30px] mb-[20px] bg-gray-100 mr-3 h-auto w-auto rounded-xl'>
                                    <CommonImgTmb 
                                    src="/img07tmb.png"
                                    alt="Image"
                                    width={262}
                                    height={237}
                                    priority
                                    style={{ maxWidth: 'none' }}
                                    />
                                    <Link href='/about'>
                                        <Image
                                            src="/torightWhite.svg"
                                            alt="Icon"
                                            width={52}
                                            height={52}
                                            style={{ paddingTop: "25px", position: "absolute", top: "30%", left: "5%" }}
                                        />
                                    </Link>
                                    <p className='self-center text-sm py-5'>Graphic<br/><span>
                                    ブランドを続けるために</span></p>
                                    <div className='flex flex-col justify-around text-center items-center pb-[50px]'>
                                    <BtnLikeSkillBlack>Node.js</BtnLikeSkillBlack>
                                    <BtnLikeSkillBlack>Node.js</BtnLikeSkillBlack>
                                    <BtnLikeSkillBlack>Node.js</BtnLikeSkillBlack>
                                    <BtnLikeSkillBlack>Node.js</BtnLikeSkillBlack>
                                    </div>
                                    
                                </div>
                                <div className='flex flex-col justify-center relative pl-3 pr-3 pt-[30px] mb-[20px] bg-gray-100 mr-3 h-auto w-auto rounded-xl'>
                                    <CommonImgTmb 
                                    src="/img07tmb.png"
                                    alt="Image"
                                    width={262}
                                    height={237}
                                    priority
                                    style={{ maxWidth: 'none' }}
                                    />
                                    <Link href='/about'>
                                        <Image
                                            src="/torightWhite.svg"
                                            alt="Icon"
                                            width={52}
                                            height={52}
                                            style={{ paddingTop: "25px", position: "absolute", top: "30%", left: "5%" }}
                                        />
                                    </Link>
                                    <p className='self-center text-sm py-5'>Graphic<br/><span>
                                    ブランドを続けるために</span></p>
                                    <div className='flex flex-col justify-around text-center items-center pb-[50px]'>
                                    <BtnLikeSkillBlack>Node.js</BtnLikeSkillBlack>
                                    <BtnLikeSkillBlack>Node.js</BtnLikeSkillBlack>
                                    <BtnLikeSkillBlack>Node.js</BtnLikeSkillBlack>
                                    <BtnLikeSkillBlack>Node.js</BtnLikeSkillBlack>
                                    </div>
                                    
                                </div>
                                <div className='flex flex-col justify-center relative pl-3 pr-3 pt-[30px] mb-[20px] bg-gray-100 mr-3 h-auto w-auto rounded-xl'>
                                    <CommonImgTmb 
                                    src="/img07tmb.png"
                                    alt="Image"
                                    width={262}
                                    height={237}
                                    priority
                                    style={{ maxWidth: 'none' }}
                                    />
                                    <Link href='/about'>
                                        <Image
                                            src="/torightWhite.svg"
                                            alt="Icon"
                                            width={52}
                                            height={52}
                                            style={{ paddingTop: "25px", position: "absolute", top: "30%", left: "5%" }}
                                        />
                                    </Link>
                                    <p className='self-center text-sm py-5'>Graphic<br/><span>
                                    ブランドを続けるために</span></p>
                                    <div className='flex flex-col justify-around text-center items-center pb-[50px]'>
                                    <BtnLikeSkillBlack>Node.js</BtnLikeSkillBlack>
                                    <BtnLikeSkillBlack>Node.js</BtnLikeSkillBlack>
                                    <BtnLikeSkillBlack>Node.js</BtnLikeSkillBlack>
                                    <BtnLikeSkillBlack>Node.js</BtnLikeSkillBlack>
                                    </div>
                                </div> 
                            </div>
                        </div>
                    </div>{/* works アプリ */}



                    {/* カテゴリ:デザイン */}
                    <div className='pb-[200px]'>
                        <div className='flex justify-center'>
                            <BtnLike className="bg-gray-400 rounded-bl-2xl"><span className='text-[18px] tracking-[3px]'>2014-2021:</span>デザイン</BtnLike>
                        </div>

                        <div className='flex flex-col-reverse h-auto justify-center'>
                            <div className='flex flex-row w-[100vw] overflow-x-scroll overflow-auto '>
                                <div className='flex flex-col justify-center relative pl-3 pr-3 pt-[30px] mb-[20px] bg-gray-100 mr-3 h-auto w-auto rounded-xl'>
                                    <CommonImgTmb 
                                    src="/img02.jpg"
                                    alt="Image"
                                    width={262}
                                    height={237}
                                    priority
                                    style={{ maxWidth: 'none' }}
                                    />
                                    <Link href='/about'>
                                        <Image
                                            src="/torightWhite.svg"
                                            alt="Icon"
                                            width={52}
                                            height={52}
                                            style={{ paddingTop: "25px", position: "absolute", top: "30%", left: "5%" }}
                                        />
                                    </Link>
                                    <p className='self-center text-sm py-5'>Graphic<br/><span>
                                    ブランドを続けるために</span></p>
                                    <div className='flex flex-col justify-around text-center items-center pb-[50px]'>
                                    <BtnLikeSkillBlack>Node.js</BtnLikeSkillBlack>
                                    <BtnLikeSkillBlack>Node.js</BtnLikeSkillBlack>
                                    <BtnLikeSkillBlack>Node.js</BtnLikeSkillBlack>
                                    <BtnLikeSkillBlack>Node.js</BtnLikeSkillBlack>
                                    </div>
                                    
                                </div>
                                <div className='flex flex-col justify-center relative pl-3 pr-3 pt-[30px] mb-[20px] bg-gray-100 mr-3 h-auto w-auto rounded-xl'>
                                    <CommonImgTmb 
                                    src="/img06.jpg"
                                    alt="Image"
                                    width={262}
                                    height={237}
                                    priority
                                    style={{ maxWidth: 'none' }}
                                    />
                                    <Link href='/about'>
                                        <Image
                                            src="/torightWhite.svg"
                                            alt="Icon"
                                            width={52}
                                            height={52}
                                            style={{ paddingTop: "25px", position: "absolute", top: "30%", left: "5%" }}
                                        />
                                    </Link>
                                    <p className='self-center text-sm py-5'>Graphic<br/><span>
                                    ブランドを続けるために</span></p>
                                    <div className='flex flex-col justify-around text-center items-center pb-[50px]'>
                                    <BtnLikeSkillBlack>Node.js</BtnLikeSkillBlack>
                                    <BtnLikeSkillBlack>Node.js</BtnLikeSkillBlack>
                                    <BtnLikeSkillBlack>Node.js</BtnLikeSkillBlack>
                                    <BtnLikeSkillBlack>Node.js</BtnLikeSkillBlack>
                                    </div>
                                    
                                </div>
                                <div className='flex flex-col justify-center relative pl-3 pr-3 pt-[30px] mb-[20px] bg-gray-100 mr-3 h-auto w-auto rounded-xl'>
                                    <CommonImgTmb 
                                    src="/img02.jpg"
                                    alt="Image"
                                    width={262}
                                    height={237}
                                    priority
                                    style={{ maxWidth: 'none' }}
                                    />
                                    <Link href='/about'>
                                        <Image
                                            src="/torightWhite.svg"
                                            alt="Icon"
                                            width={52}
                                            height={52}
                                            style={{ paddingTop: "25px", position: "absolute", top: "30%", left: "5%" }}
                                        />
                                    </Link>
                                    <p className='self-center text-sm py-5'>Graphic<br/><span>
                                    ブランドを続けるために</span></p>
                                    <div className='flex flex-col justify-around text-center items-center pb-[50px]'>
                                    <BtnLikeSkillBlack>Node.js</BtnLikeSkillBlack>
                                    <BtnLikeSkillBlack>Node.js</BtnLikeSkillBlack>
                                    <BtnLikeSkillBlack>Node.js</BtnLikeSkillBlack>
                                    <BtnLikeSkillBlack>Node.js</BtnLikeSkillBlack>
                                    </div>
                                    
                                </div>
                                <div className='flex flex-col justify-center relative pl-3 pr-3 pt-[30px] mb-[20px] bg-gray-100 mr-3 h-auto w-auto rounded-xl'>
                                    <CommonImgTmb 
                                    src="/img06.jpg"
                                    alt="Image"
                                    width={262}
                                    height={237}
                                    priority
                                    style={{ maxWidth: 'none' }}
                                    />
                                    <Link href='/about'>
                                        <Image
                                            src="/torightWhite.svg"
                                            alt="Icon"
                                            width={52}
                                            height={52}
                                            style={{ paddingTop: "25px", position: "absolute", top: "30%", left: "5%" }}
                                        />
                                    </Link>
                                    <p className='self-center text-sm py-5'>Graphic<br/><span>
                                    ブランドを続けるために</span></p>
                                    <div className='flex flex-col justify-around text-center items-center pb-[50px]'>
                                    <BtnLikeSkillBlack>Node.js</BtnLikeSkillBlack>
                                    <BtnLikeSkillBlack>Node.js</BtnLikeSkillBlack>
                                    <BtnLikeSkillBlack>Node.js</BtnLikeSkillBlack>
                                    <BtnLikeSkillBlack>Node.js</BtnLikeSkillBlack>
                                    </div>
                                    
                                </div>
                                <div className='flex flex-col justify-center relative pl-3 pr-3 pt-[30px] mb-[20px] bg-gray-100 mr-3 h-auto w-auto rounded-xl'>
                                    <CommonImgTmb 
                                    src="/img02.jpg"
                                    alt="Image"
                                    width={262}
                                    height={237}
                                    priority
                                    style={{ maxWidth: 'none' }}
                                    />
                                    <Link href='/about'>
                                        <Image
                                            src="/torightWhite.svg"
                                            alt="Icon"
                                            width={52}
                                            height={52}
                                            style={{ paddingTop: "25px", position: "absolute", top: "30%", left: "5%" }}
                                        />
                                    </Link>
                                    <p className='self-center text-sm py-5'>Graphic<br/><span>
                                    ブランドを続けるために</span></p>
                                    <div className='flex flex-col justify-around text-center items-center pb-[50px]'>
                                    <BtnLikeSkillBlack>Node.js</BtnLikeSkillBlack>
                                    <BtnLikeSkillBlack>Node.js</BtnLikeSkillBlack>
                                    <BtnLikeSkillBlack>Node.js</BtnLikeSkillBlack>
                                    <BtnLikeSkillBlack>Node.js</BtnLikeSkillBlack>
                                    </div>
                                    
                                </div>
                                <div className='flex flex-col justify-center relative pl-3 pr-3 pt-[30px] mb-[20px] bg-gray-100 mr-3 h-auto w-auto rounded-xl'>
                                    <CommonImgTmb 
                                    src="/img06.jpg"
                                    alt="Image"
                                    width={262}
                                    height={237}
                                    priority
                                    style={{ maxWidth: 'none' }}
                                    />
                                    <Link href='/about'>
                                        <Image
                                            src="/torightWhite.svg"
                                            alt="Icon"
                                            width={52}
                                            height={52}
                                            style={{ paddingTop: "25px", position: "absolute", top: "30%", left: "5%" }}
                                        />
                                    </Link>
                                    <p className='self-center text-sm py-5'>Graphic<br/><span>
                                    ブランドを続けるために</span></p>
                                    <div className='flex flex-col justify-around text-center items-center pb-[50px]'>
                                    <BtnLikeSkillBlack>Node.js</BtnLikeSkillBlack>
                                    <BtnLikeSkillBlack>Node.js</BtnLikeSkillBlack>
                                    <BtnLikeSkillBlack>Node.js</BtnLikeSkillBlack>
                                    <BtnLikeSkillBlack>Node.js</BtnLikeSkillBlack>
                                    </div>
                                    
                                </div>
                                <div className='flex flex-col justify-center relative pl-3 pr-3 pt-[30px] mb-[20px] bg-gray-100 mr-3 h-auto w-auto rounded-xl'>
                                    <CommonImgTmb 
                                    src="/img02.jpg"
                                    alt="Image"
                                    width={262}
                                    height={237}
                                    priority
                                    style={{ maxWidth: 'none' }}
                                    />
                                    <Link href='/about'>
                                        <Image
                                            src="/torightWhite.svg"
                                            alt="Icon"
                                            width={52}
                                            height={52}
                                            style={{ paddingTop: "25px", position: "absolute", top: "30%", left: "5%" }}
                                        />
                                    </Link>
                                    <p className='self-center text-sm py-5'>Graphic<br/><span>
                                    ブランドを続けるために</span></p>
                                    <div className='flex flex-col justify-around text-center items-center pb-[50px]'>
                                    <BtnLikeSkillBlack>Node.js</BtnLikeSkillBlack>
                                    <BtnLikeSkillBlack>Node.js</BtnLikeSkillBlack>
                                    <BtnLikeSkillBlack>Node.js</BtnLikeSkillBlack>
                                    <BtnLikeSkillBlack>Node.js</BtnLikeSkillBlack>
                                    </div>
                                </div> 
                            </div>
                        </div>
                    </div>{/* works デザイン */}





                </div>
            </Layout>
        </div>
    ) 
}


