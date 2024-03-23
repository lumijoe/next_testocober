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
                <div class="relative  w-full h-[auto] justify-center mb-20  " id='skills'>
                    <h1 className={`text-[40px] md:text-[60px] italic font-medium text-center pt-[132px] w-full `}>Skills</h1>
                    <div className="flex flex-col w-[70%] text-left bg-white m-auto mt-20">
                        <p className="text-[#6c6c6c] text-[12px] tracking-wider pb-2" style={{ fontFamily: "Noto Sans JP", fontWeight: 400 }}>開発言語</p>
                        <ul className="flex flex-wrap gap-3 text-[20px] pb-2">
                            <li className=""><BtnLikeSkillBlack>JavaScript</BtnLikeSkillBlack></li>
                        </ul>
                        <p className="text-[#6c6c6c] text-[12px] tracking-wider pb-2" style={{ fontFamily: "Noto Sans JP", fontWeight: 400 }}>フレームワーク / ライブラリ</p>
                        <ul className="flex flex-wrap gap-3 text-[20px] pb-2">
                            <li><BtnLikeSkillBlack>Next.js</BtnLikeSkillBlack></li>
                            <li><BtnLikeSkillBlack>Node.js</BtnLikeSkillBlack></li>
                            <li><BtnLikeSkillBlack>React.js</BtnLikeSkillBlack></li>
                            <li><BtnLikeSkillBlack>Vue.js</BtnLikeSkillBlack></li>
                            <li><BtnLikeSkillBlack>Express</BtnLikeSkillBlack></li>
                        </ul>
                        <p className="text-[#6c6c6c] text-[12px] tracking-wider pb-2" style={{ fontFamily: "Noto Sans JP", fontWeight: 400 }}>CSS / Animation</p>
                        <ul className="flex flex-wrap gap-3 text-[20px] pb-2">
                            <li><BtnLikeSkillBlack>FLOCSS</BtnLikeSkillBlack></li>
                            <li><BtnLikeSkillBlack>SASS</BtnLikeSkillBlack></li>
                            <li><BtnLikeSkillBlack>Tailwindcss</BtnLikeSkillBlack></li>
                            <li><BtnLikeSkillBlack>Bootstrap</BtnLikeSkillBlack></li>
                            <li><BtnLikeSkillBlack>GSAP</BtnLikeSkillBlack></li>
                        </ul>
                        <p className="text-[#6c6c6c] text-[12px] tracking-wider pb-2" style={{ fontFamily: "Noto Sans JP", fontWeight: 400 }}>バージョン管理 / CI/CD</p>
                        <ul className="flex flex-wrap gap-3 text-[20px] pb-2">
                            <li><BtnLikeSkillBlack>Sourcetree</BtnLikeSkillBlack></li>
                            <li><BtnLikeSkillBlack>Bitbucket</BtnLikeSkillBlack></li>
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
                    <div className="mt-20 pb-10">
                        <p style={{ fontFamily: "Noto Sans JP", fontWeight: 500 }} className='text-[16px] tracking-wider leading-[32px] w-[70%] m-auto pb-[16px]'>キャリアブレイクの経験</p>
                        <p style={{ fontFamily: "Noto Sans JP", fontWeight: 400 }} className='text-[#6c6c6c] text-[12px] tracking-wider leading-[24px] w-[70%] m-auto'>
                        出産育児やキャリア移行期には、社会実験参画やフリーランス事業、言語キャッチアップなどデザインやコードへの行動を継続。コロナを期にブレイクを終了し、キャリアを再構築中。</p>
                        <div >
                            <Link href={urlLinkedin} style={{ fontFamily: "Noto Sans JP", fontWeight: 300 }} className='text-[20px]'><Btn className="bg-indigo-600 w-[70%] max-w-[500px] mx-auto "><b>Linkedin</b>で詳細を見る</Btn></Link>
                        </div>
                    </div>

                </div>   
            </div>
            <div className={ `${styles.section5}` }></div>
            <div className="bg-black w-full h-auto py-20 mx-auto">
                <div className={`text-[40px] leading-[40px] md:text-[60px] md:leading-[60px] italic font-medium text-white top-[132px] text-center w-full pb-10 `}>Strong Theme</div>
                <div className="flex mx-auto justify-center">
                    <ul className="flex flex-wrap gap-6 text-[16px] w-[50%] justify-center">
                        <li style={{ fontStyle: "Noto Sans JP" }} className="text-white">#産官学民</li>
                        <li style={{ fontStyle: "Noto Sans JP" }} className="text-white">#社会課題</li>
                        <li style={{ fontStyle: "Noto Sans JP" }} className="text-white">#ライフスタイル</li>
                        <li style={{ fontStyle: "Noto Sans JP" }} className="text-white" >#アイデンティティ</li>
                        <li style={{ fontStyle: "Noto Sans JP" }} className="text-white">#行動心理</li>
                    </ul>
                </div>
            </div>

            
            <div className={ `${styles.section5}` }></div>
            <Footer />
        </div>
    )
}

