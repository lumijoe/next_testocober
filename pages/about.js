//pages/about.js(about詳細ページ)

import React from 'react';
import Header2 from '../components/Header2';
import Image from 'next/image';
import Footer from '../components/Footer';
import Btn from '../components/Button/Btn';
import Link from 'next/link';
import styles from '../styles/Footer.module.css' 
import imgwork from '../public/imgwork.jpg';
import BtnLikeSkillBlack from '../components/Button/BtnLikeSkillBlack';

import JobTimeLineBox from '../components/About/JobTimeLineBox';
import JobText from '../components/About/JobText';



export default function About() {
    const urlLinkedin = "https://www.linkedin.com/in/kojo-lumi";

    return (
        <div>
            <Header2 />
            <div className='relative '>
                <div style={{ position: "relative", height: "40vh" }}>
                    <Image
                        className='h-60 w-full object-contain md:h-full md:w-48 hover:object-scale-down fixed'
                        src={imgwork}
                        alt="Work img"
                        fill={true}
                        style={{ objectFit: "cover", backgroundAttachment: 'fixed' }}
                        priority
                    />  
                   
                </div>
                
                <div className='absolute inset-0 bg-gray-950 opacity-60' style={{ height: "40vh" }}/>
                <div className={`text-[40px] md:text-[60px] italic font-medium absolute text-white top-[132px] text-center w-full `}>About</div>
                
            </div>

            {/* キャリアリスト */}
            <div className=' bg-black px-3.5 py-20 h-auto justify-center items-center w-full flex '>
                <JobTimeLineBox />
            </div>

            {/* テキストとスキル */}
            <div className='px-3.5'>
                <JobText />
                <div class="relative bg-pink-300 w-full h-[auto] justify-center mb-20  " id='skills'>
                    <h1 className={`text-[40px] md:text-[60px] italic font-medium text-center pt-[132px] w-full `}>Skills</h1>
                    <div className="flex flex-col w-[85%] text-left bg-white m-auto">
                        <p className="text-[#6c6c6c] text-[12px] tracking-wider pb-2" style={{ fontFamily: "Noto Sans JP", fontWeight: 400 }}>開発言語</p>
                        <ul className="flex flex-wrap gap-3 text-[20px] pb-2">
                            <li><BtnLikeSkillBlack>JavaScript</BtnLikeSkillBlack></li>
                        </ul>
                        <p className="text-[#6c6c6c] text-[12px] tracking-wider pb-2" style={{ fontFamily: "Noto Sans JP", fontWeight: 400 }}>フレームワーク / ライブラリ</p>
                        <ul className="flex flex-wrap gap-3 text-[20px] pb-2">
                            <li><BtnLikeSkillBlack>Next.js</BtnLikeSkillBlack></li>
                            <li><BtnLikeSkillBlack>Node.js</BtnLikeSkillBlack></li>
                            <li><BtnLikeSkillBlack>React.js</BtnLikeSkillBlack></li>
                            <li><BtnLikeSkillBlack>Vue.js</BtnLikeSkillBlack></li>
                            <li><BtnLikeSkillBlack>Express</BtnLikeSkillBlack></li>
                        </ul>
                        <p className="text-[#6c6c6c] text-[12px] tracking-wider pb-2" style={{ fontFamily: "Noto Sans JP", fontWeight: 400 }}>Css / Animation</p>
                        <ul className="flex flex-wrap gap-3 text-[20px] pb-2">
                            <li><BtnLikeSkillBlack>Tailwindcss</BtnLikeSkillBlack></li>
                            <li><BtnLikeSkillBlack>Bootstrap</BtnLikeSkillBlack></li>
                            <li><BtnLikeSkillBlack>GSAP</BtnLikeSkillBlack></li>
                        </ul>
                        <p className="text-[#6c6c6c] text-[12px] tracking-wider pb-2" style={{ fontFamily: "Noto Sans JP", fontWeight: 400 }}>バージョン管理 / CI/CD</p>
                        <ul className="flex flex-wrap gap-3 text-[20px] pb-2">
                            <li><BtnLikeSkillBlack>Git</BtnLikeSkillBlack></li>
                            <li><BtnLikeSkillBlack>Github</BtnLikeSkillBlack></li>
                            <li><BtnLikeSkillBlack>Vercel</BtnLikeSkillBlack></li>
                        </ul>
                        <p className="text-[#6c6c6c] text-[12px] tracking-wider pb-2" style={{ fontFamily: "Noto Sans JP", fontWeight: 400 }}>開発環境</p>
                        <ul className="flex flex-wrap gap-3 text-[20px] pb-2">
                            <li><BtnLikeSkillBlack>Vscode</BtnLikeSkillBlack></li>
                            <li><BtnLikeSkillBlack>Mac</BtnLikeSkillBlack></li>
                            <li><BtnLikeSkillBlack>MacPro</BtnLikeSkillBlack></li>
                        </ul>
                        <p className="text-[#6c6c6c] text-[12px] tracking-wider pb-2" style={{ fontFamily: "Noto Sans JP", fontWeight: 400 }}>データベース</p>
                        <ul className="flex flex-wrap gap-3 text-[20px] pb-2">
                            <li><BtnLikeSkillBlack>Firebase</BtnLikeSkillBlack></li>
                            <li><BtnLikeSkillBlack>SQLite</BtnLikeSkillBlack></li>
                        </ul>
                        <p className="text-[#6c6c6c] text-[12px] tracking-wider pb-2" style={{ fontFamily: "Noto Sans JP", fontWeight: 400 }}>CMS</p>
                        <ul className="flex flex-wrap gap-3 text-[20px] pb-2">
                            <li><BtnLikeSkillBlack>WordPress</BtnLikeSkillBlack></li>
                        </ul>
                        <p className="text-[#6c6c6c] text-[12px] tracking-wider pb-2" style={{ fontFamily: "Noto Sans JP", fontWeight: 400 }}>制作言語</p>
                        <ul className="flex flex-wrap gap-3 text-[20px] pb-2">
                            <li><BtnLikeSkillBlack>HTML</BtnLikeSkillBlack></li>
                            <li><BtnLikeSkillBlack>CSS</BtnLikeSkillBlack></li>
                        </ul>
                        <p className="text-[#6c6c6c] text-[12px] tracking-wider pb-2" style={{ fontFamily: "Noto Sans JP", fontWeight: 400 }}>デザイン環境</p>
                        <ul className="flex flex-wrap gap-3 text-[20px]">
                            <li><BtnLikeSkillBlack>Photoshop</BtnLikeSkillBlack></li>
                            <li><BtnLikeSkillBlack>Figma</BtnLikeSkillBlack></li>
                            <li><BtnLikeSkillBlack>XD</BtnLikeSkillBlack></li>
                        </ul>
                    </div>
                </div>
                <div className="bg-black w-full h-[500px] pt-20">
                    <p className="text-white">test</p>

                </div>


                <div >
                    <Link href={urlLinkedin} style={{ fontFamily: "Noto Sans JP", fontWeight: 300 }} className='text-[16px]'><Btn className="bg-indigo-600 w-full "><b>Linkedin</b>で詳細を見る</Btn></Link>
                </div>
                
            </div>
            <div className={ `${styles.section5}` }></div>
            <Footer />
        </div>
    )
}

