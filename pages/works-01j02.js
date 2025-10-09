//pages/works-01j02.js

import React from 'react';
import Header2 from '../components/Header2';
import Image from 'next/image';
import Footer from '../components/Footer';
import Btn from '../components/Button/Btn';
import Link from 'next/link';
import styles from '../styles/Footer.module.css';
import work01j02 from '../public/310264_13.webp';
import BtnLikeSkillBlack from '../components/Button/BtnLikeSkillBlack';
import LabelWorkAbout from '../components/Label/LabelWorkAbout';

export default function Works01j02() {

    return (
        <div>
            <Header2 />
            <div className='relative '>
                <div style={{ position: "relative", height: "40vh" }}>
                    <Image
                        className='h-60 w-full object-contain md:h-full md:w-48 hover:object-scale-down fixed'
                        src={work01j02}
                        alt="Work img"
                        fill={true}
                        style={{ objectFit: "cover", backgroundAttachment: 'fixed', paddingTop:'56px' }}
                        priority
                    />  
                </div>
            </div>
            
            {/* テキストとスキル */}
            <div className='px-3.5'>
                <div className="relative  w-full h-[auto] justify-center mb-20  " id='skills'>
                    <h1 className={`text-[40px] md:text-[60px] italic font-Bold text-center w-full mt-2`}>01-J-02</h1>
                    <LabelWorkAbout className='text-[12px] px-[36px]' noMarginTop>
                        製造業コーポレートサイト
                    </LabelWorkAbout>
                    <Link href="https://lkcodetest.sakura.ne.jp/ind1221/" target="_blank" rel="noopener noreferrer" className="mt-2 text-center block" style={{ fontSize: '1.6rem', fontStyle: 'italic', color: 'blue' }}>
                        https://lkcodetest.sakura.ne.jp/ind1221
                    </Link>
               
                    <div className="flex flex-col w-[70%] text-left bg-white m-auto mt-20 max-w-[810px]">
                        <p className="text-[#6c6c6c] text-[12px] tracking-wider pb-2" style={{ fontFamily: "Noto Sans JP", fontWeight: 400 }}>2024-実装中</p>
                        <p className="text-[#6c6c6c] text-[12px] tracking-wider pb-2" style={{ fontFamily: "Noto Sans JP", fontWeight: 400 }}>WPモックアップ制作</p>
                        <p className="text-[#6c6c6c] text-[12px] tracking-wider pb-2" style={{ fontFamily: "Noto Sans JP", fontWeight: 400 }}>Word Pressカスタムテーマ構築</p>
                        <hr className="mt-4 mb-4"></hr>
                        <p className="text-[#6c6c6c] text-[12px] tracking-wider pb-2 pt-2" style={{ fontFamily: "Noto Sans JP", fontWeight: 400 }}>CMS / Dir. / WF / Design / Coding</p>
                        <hr className='mt-4 mb-4'></hr>
                        <ul className="flex flex-wrap gap-3 text-[20px] pb-2">
                            <li><BtnLikeSkillBlack>多言語/OR検索</BtnLikeSkillBlack></li>
                            <li><BtnLikeSkillBlack>Word Press(PHP)</BtnLikeSkillBlack></li>
                            <li><BtnLikeSkillBlack>Figma</BtnLikeSkillBlack></li>
                            <li><BtnLikeSkillBlack>Bootstrap</BtnLikeSkillBlack></li>
                        </ul>
                    </div>
                    
                    {/* 説明：01：テーマとプラグイン */}
                    <div className="mt-20 pb-10 max-w-[810px] m-auto mb-20">
                        <h2 style={{ fontFamily: "Noto Sans JP", fontWeight: 500, fontSize: 'clamp(16px, 4vw, 24px)' }} className='tracking-wider leading-[32px]  m-auto pb-[16px]'>PHPテーマ開発とプラグインACFで3種類の投稿タイプを開発。</h2>
                        <div style={{ fontFamily: "Noto Sans JP", fontWeight: 400 }} className='text-[#6c6c6c] text-[12px] tracking-wider leading-[24px]  m-auto'>
                        検索機能に対応するべくカテゴリ分けも開発、ブロックテーマでは実現できない細かいUIも実現するべくPHPでカスタムテーマとして構築。製品や投稿のUI統一性など入力作業効率的な解決だけでなく視覚的なクオリティや情報の認知性を高めました。
                            <ul>
                                <li>・一般ニュース投稿用</li>
                                <li>・IRニュース投稿用</li>
                                <li>・製品情報登録用</li>
                            </ul>
                        </div>
                        <div className="w-[100%] m-auto grid grid-cols-1 gap-1">
                            <Image
                                src="/ex_14_phptheme.png"
                                alt="管理画面、ディレクトリとプラグイン"
                                width={810}
                                height={500}
                                className="m-auto mt-6 w-full max-w-[810px]"
                                style={{ height: 'auto' }}
                            />
                            <Image
                                src="/ex_01_thandpl.png"
                                alt="管理画面、ディレクトリとプラグイン"
                                width={810}
                                height={500}
                                className="m-auto mt-6 w-full max-w-[810px]"
                                style={{ height: 'auto' }}
                            />
                            <Image
                                src="/ex_00_acf.png"
                                alt="管理画面、ACF設定"
                                width={810}
                                height={500}
                                className="m-auto mt-6 w-full max-w-[810px]"
                                style={{ height: 'auto' }}
                            />
                        </div>
                    </div>
                    <p>以降のコンテンツは現在閲覧いただけなくなっております、申し訳ありません。現在動的UIへ表示移行中のため、しばらくお待ちください</p>
                    
                   
                    
                    

                </div>
            </div>
            <div >
                <Link href="/#works" style={{ fontFamily: "Noto Sans JP", fontWeight: 300 }} className='text-[20px]'>
                    <Btn className="bg-indigo-600 w-[70%] max-w-[500px] mx-auto">
                        <b>WORKS一覧へ戻る</b>
                    </Btn>
                </Link>
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

