// components/Works09.js
// パターン：デザイン、中央スクロール
// ブレークポイントsm:640px

import React from 'react';
import WorksTempWebSite from '../components/WorksTempWebSite';
import styles from '../styles/Footer.module.css';
import WorksCard from '../components/Works/WorksCard';
// import BtnLikeSkillBlack from './Button/BtnLikeSkillBlack';
// import BtnLikeSkillBlackSmall from './Button/BtnLikeSkillBlackSmall';
// import CommonImgTmb from '../components/Works/CommonImgTmb';
// import Image from 'next/image';
// import Link from 'next/link';
// import BtnLikeTitleWhite from './Button/BtnLikeTitleWhite';
// import AttentionWorkDesignImg from '../components/Attention/AttentionWorkDesignImg';
// import AttentionWorkDesignBefore from '../components/Attention/AttentionWorkDesignBefore';
// import BtnLikeY8X12 from '../components/Button/BtnLikeY8X12';
// import LabelWorkType from '../components/Label/LabelWorkType';
// import LabelWorkAssign from '../components/Label/LabelWorkAssign';
// import LabelWorkAbout from '../components/Label/LabelWorkAbout';
// import LabelWorkTerm from '../components/Label/LabelWorkTerm';
// import Design01 from '../pages/design01';
// import Document from '../pages/_document';


// 01ウェブサイト / アプリ
export default function Works13 () {
    return (
       <div className="relative">    
        {/* bodyの上に装飾 */}
        <div className={`absolute ${styles.section1} smMin553:opacity-0 smMax552:opacity-0 smMax453:top-[660px] smMax401:top-[697px] smMax351:opacity-0  relative`}></div>
        <div className='bg-[#e3e3e3] w-full h-[450px] bottom-[-35px] absolute '></div>
            <WorksTempWebSite
                categoryTitleRotate='WEB SITE & APP'
                categoryTitleNum='01 : Web Site & App'
                categoryTitleName='一部パスワードが必要です'
                categoryText='デザインから実装まで制作開発。Figma, Next.js, Word Pressなど。（2025年7月31日より一部メンテナンス中につき、接続できません）'
            >

            {/* ここから作品　============================================================================== */}

                <div className='flex flex-col-reverse h-auto justify-center'>
                    <ul className='flex flex-row w-[100vw] pr-[calc(50%)] overflow-x-scroll overflow-auto pl-[calc(50px)] sm:transform sm:translate-x-[50px]'>
                    {/* ↑<div className='flex flex-row w-[100vw] pr-[calc(50%)] overflow-x-scroll overflow-auto 
                    smMax639:transform smMax639:translate-x-[50px]
                    sm:transform sm:translate-x-[50px]'> */}
                        {/* コーポレートサイト */}
                        <WorksCard
                            title="Cocoonサイト"
                            workNum="J-01"
                            assignType="solo"
                            termLabel="一貫担当"
                            href="https://lkcodetest.duckdns.org/"
                            imageSrc="/310264_11.png"
                            imageWidth={224}
                            imageHeight={224}
                            imageOverlayText="VPSモックアップ制作"
                            cardHeight="250px"
                            mainTitle={["VPS+Linux+WP-Cocoonを", "DocK DNSでhttpsへ"]}
                            dateStatus="2025-環境構築中"
                            roles="CMS / Coding"
                            skills={[
                            "Word Press(Cocoon)",
                            "Nginx",
                            "VPS, Linux",
                            "Duck DNS",
                            "MariaDB"
                            ]}
                            useSmallSkills={true}
                            marginRight="mr-4"
                        />
                        {/* コーポレートサイト */}
                        <WorksCard
                            title="製造業コーポレートサイト"
                            workNum="J-02"
                            assignType="solo"
                            termLabel="一貫担当"
                            href="https://lkcodetest.sakura.ne.jp/ind1221/"
                            imageSrc="/310264_4.png"
                            imageWidth={224}
                            imageHeight={224}
                            imageOverlayText="WPモックアップ制作"
                            cardHeight="250px"
                            mainTitle={["Word Pressカスタムテーマ構築"]}
                            dateStatus="2024-実装途中"
                            roles="CMS / Dir. / WF / Design / Coding"
                            skills={[
                            "Figma",
                            "Bootstrap, SCSS",
                            "Word Press(PHP)",
                            "多言語/OR検索"
                            ]}
                            useSmallSkills={true}
                            marginRight="mr-4"
                        />

                        {/* コーポレートサイト */}
                        <WorksCard
                            title="不動産コーポレートサイト"
                            workNum="J-03"
                            assignType="solo"
                            termLabel="一貫担当"
                            href="https://atrail.co.jp/"
                            imageSrc="/310264_6.png"
                            imageWidth={224}
                            imageHeight={224}
                            imageOverlayText="WPモックアップ制作"
                            cardHeight="250px"
                            mainTitle={["Word Pressカスタムテーマ構築", "ロゴ省く"]}
                            dateStatus="2024"
                            roles="CMS / Dir. / WF / Design / Coding"
                            skills={[
                            "Figma",
                            "Bootstrap",
                            "SCSS",
                            "Word Press(PHP)"
                            ]}
                            useSmallSkills={true}
                            marginRight="mr-4"
                        />

                        {/* LPサイト */}
                        <WorksCard
                            title="サービス選択LPサイト"
                            workNum="P-01"
                            assignType="team"
                            termLabel="一貫担当"
                            href="https://game-vps.vercel.app/"
                            imageSrc="/310264_7.png"
                            imageWidth={224}
                            imageHeight={224}
                            imageOverlayText="プロト制作"
                            cardHeight="250px"
                            mainTitle={["AI+Vite+Reactで", "バイブコーディング"]}
                            dateStatus="2025/8/15"
                            roles="Prompt Dir. / Design / Vibe Coding"
                            skills={[
                            "Vercel",
                            "Tailwindcss",
                            "Figma",
                            "Claude Code",
                            "Vite+React"
                            ]}
                            useSmallSkills={true}
                            marginRight="mr-4"
                        />

                        {/* アプリ */}
                        <WorksCard
                            title="バイト勤務管理アプリ"
                            workNum="P-02"
                            assignType="team"
                            termLabel="一貫担当"
                            href="https://lumijoe.github.io/jobtime/"
                            imageSrc="/310264_1.png"
                            imageWidth={224}
                            imageHeight={224}
                            imageOverlayText="家族案件"
                            cardHeight="250px"
                            mainTitle={["JSのFullCalendarを使用し", "削除や追加をフロントで保存"]}
                            dateStatus="2024"
                            roles="Dir. / Design / Coding"
                            skills={[
                            "FullCalendar",
                            "Github Pages",
                            "HTML, CSS, JS, localStorage"
                            
                            ]}
                            useSmallSkills={true}
                            marginRight="mr-4"
                        />

                        {/* アプリ */}
                        <WorksCard
                            title="ミニ家計簿アプリ"
                            workNum="P-03"
                            assignType="team"
                            termLabel="一貫担当"
                            href="https://cashnyan-prototypever-3-2.onrender.com"
                            imageSrc="/310264_10.png"
                            imageWidth={224}
                            imageHeight={224}
                            imageOverlayText="家族案件"
                            cardHeight="250px"
                            mainTitle={["Node.jsでサーバーサイドを構築", "Render.comでデプロイ"]}
                            dateStatus="2023"
                            roles="Dir. / Design / Coding"
                            skills={[
                            "Next.js",
                            "Express",
                            "Bootstrap",
                            "Node.js",
                            "Render.com"
                            ]}
                            useSmallSkills={true}
                            marginRight="mr-4"
                        />

                        {/* サイト */}
                        <WorksCard
                            title="現ポートフォリオサイト"
                            workNum="P-04"
                            assignType="team"
                            termLabel="一貫担当"
                            href="/"
                            imageSrc="/310264_3.png"
                            imageWidth={224}
                            imageHeight={224}
                            imageOverlayText="個人制作"
                            cardHeight="250px"
                            mainTitle={["Next.jsを", "Vercelでデプロイ"]}
                            dateStatus="2023/10-更新中"
                            roles="Dir. / Design / Coding"
                            skills={[
                            "Photoshop, XD, Figma",
                            "Next.js, Vercel",
                            "GSAP",
                            "Tailwindcss"
                            ]}
                            useSmallSkills={true}
                            marginRight="mr-4"
                        />

                        {/* サイト */}
                        <WorksCard
                            title="旧ポートフォリオサイト"
                            workNum="P-05"
                            assignType="team"
                            termLabel="一貫担当"
                            href="https://lumijoe.github.io/xf_test01/"
                            imageSrc="/310264_8.png"
                            imageWidth={224}
                            imageHeight={224}
                            imageOverlayText="個人モックアップ制作"
                            cardHeight="250px"
                            mainTitle={["HTMLを", "GitHub Pagesでデプロイ"]}
                            dateStatus="2022/12-2023/02"
                            roles="Dir. / WF / Design / Coding"
                            skills={[
                            "XD",
                            "HTML",
                            "CSS",
                            "Github Pages"
                            ]}
                            useSmallSkills={true}
                            marginRight="mr-4"
                        />

                        <WorksCard
                            title="小売業コーポレートサイト"
                            workNum="P-06"
                            assignType="team"
                            termLabel="一貫担当"
                            href="http://designguys.wp.xdomain.jp"
                            imageSrc="/310264.png"
                            imageWidth={224}
                            imageHeight={224}

                            // 追加画像を配列で渡す
                            additionalImages={[
                            {
                                src: "/310264_5.png",
                                width: 224,
                                height: 264,
                                style: { maxWidth: 'none', position: 'absolute', zIndex: 1, bottom: '0px' }
                            },
                            {
                                src: "/workWeb02.gif",
                                width: 202,
                                height: 264,
                                style: { maxWidth: 'none', position: 'absolute', zIndex: 0, bottom: '0px', left: '10px' }
                            }
                            ]}

                            imageOverlayText="キャッチアップ制作"
                            cardHeight="250px"
                            mainTitle={["Word Pressテーマ", "Lightningを構築"]}
                            dateStatus="2022/12-2023/01"
                            roles="CMS / Dir. / WF / Design / Coding"
                            skills={[
                            "Photoshop",
                            "Word Press(Lightning)"
                            ]}
                            useSmallSkills={true}
                            marginRight="mr-4"
                        />
                    </ul>
                </div>
            {/* ここまで作品　============================================================================== */}
            </WorksTempWebSite>
        </div>
    )
}
