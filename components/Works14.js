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
export default function Works14 () {
    return (
       <div className="relative">    
        {/* bodyの上に装飾 */}
        <div className={`absolute ${styles.section1} smMin553:opacity-0 smMax552:opacity-0 smMax453:top-[660px] smMax401:top-[697px] smMax351:opacity-0  relative`}></div>
        <div className='bg-[#e3e3e3] w-full h-[450px] bottom-[-35px] absolute '></div>
            <WorksTempWebSite
                categoryTitleRotate='WEB SITE, LP & BANNER'
                categoryTitleNum='02 : Web Site, LP & Banner'
                categoryTitleName='パスワードが必要です'
                categoryText='モックアップ以外の公式サイト案件です。担当分野や領域、ワイヤーフレームからサイトまでご紹介しています。'
            >

            {/* ここから作品　============================================================================== */}

                <div className='flex flex-col-reverse h-auto justify-center'>
                    <ul className='flex flex-row w-[100vw] pr-[calc(50%)] overflow-x-scroll overflow-auto pl-[calc(50px)] sm:transform sm:translate-x-[50px]'>
                    {/* ↑<div className='flex flex-row w-[100vw] pr-[calc(50%)] overflow-x-scroll overflow-auto 
                    smMax639:transform smMax639:translate-x-[50px]
                    sm:transform sm:translate-x-[50px]'> */}

                        {/* サイトデバッグ */}
                        <WorksCard
                            title="稼働サイトデバッグ"
                            assignType="solo"
                            termLabel="チーム分業"
                            href="https://worklist-for-pf.vercel.app/"
                            imageSrc="/000_wp.png"
                            imageWidth={224}
                            imageHeight={224}
                            imageOverlayText="表示バグの修正"
                            cardHeight="250px"
                            mainTitle={["顧客運用サイトの", "デバッグ"]}
                            dateStatus="2025"
                            roles="Coding"
                            skills={[
                            "Word Press(PHP)"
                            ]}
                            useSmallSkills={true}
                            marginRight="mr-4"
                        />
                        {/* コーポレートサイトリニューアル */}
                        <WorksCard
                            title="製造業サイトリニューアル"
                            assignType="solo"
                            termLabel="チーム分業"
                            href="https://worklist-for-pf.vercel.app/"
                            imageSrc="/000_wp.png"
                            imageWidth={224}
                            imageHeight={224}
                            imageOverlayText="ディレクション及び制作"
                            cardHeight="250px"
                            mainTitle={["顧客や外部チームの調整", "要件定義や制作サポート1"]}
                            dateStatus="2024/08-2025/05"
                            roles="Dir. / WF / Design & Coding Sprt."
                            skills={[
                            "Figma",
                            "Bootstrap, SCSS",
                            "Word Press(PHP)",
                            "Backlog"
                            ]}
                            useSmallSkills={true}
                            marginRight="mr-4"
                        />

                        {/* ページ追加と記事統合 */}
                        <WorksCard
                            title="ページ追加と記事統合"
                            assignType="solo"
                            termLabel="チーム分業"
                            href="https://worklist-for-pf.vercel.app/"
                            imageSrc="/000_wp.png"
                            imageWidth={224}
                            imageHeight={224}
                            imageOverlayText="ディレクション及び制作"
                            cardHeight="250px"
                            mainTitle={["複数サイトの過去記事を", "1ページに統合"]}
                            dateStatus="2024"
                            roles="Dir. / WF / Design / Coding"
                            skills={[
                            "Word Press(PHP)"
                            ]}
                            useSmallSkills={true}
                            marginRight="mr-4"
                        />

                        {/* サイトリニューアル */}
                        <WorksCard
                            title="商社サイトリニューアル"
                            assignType="solo"
                            termLabel="チーム分業"
                            href="https://worklist-for-pf.vercel.app/"
                            imageSrc="/000_wp.png"
                            imageWidth={224}
                            imageHeight={224}
                            imageOverlayText="ディレクション及び制作"
                            cardHeight="250px"
                            mainTitle={["顧客や外部チームの調整", "要件定義や制作サポート2"]}
                            dateStatus="2024-2025"
                            roles="Dir. / WF / Design & Coding Sprt."
                            skills={[
                            "Figma",
                            "Bootstrap, SCSS",
                            "Word Press(PHP)",
                            "Backlog"
                            ]}
                            useSmallSkills={true}
                            marginRight="mr-4"
                        />

                        {/* サイトリニューアル */}
                        <WorksCard
                            title="OBOGサイトリニューアル"
                            assignType="solo"
                            termLabel="一貫担当"
                            href="https://worklist-for-pf.vercel.app/"
                            imageSrc="/000_wp.png"
                            imageWidth={224}
                            imageHeight={224}
                            imageOverlayText="コンテンツ移動と制作"
                            cardHeight="250px"
                            mainTitle={["CMSを新たに構築し", "丸ごと引越し"]}
                            dateStatus="2025"
                            roles="CMS / Dir. / WF / Design / Coding"
                            skills={[
                            "Figma",
                            "Bootstrap, SCSS",
                            "Word Press(PHP)",
                            ]}
                            useSmallSkills={true}
                            marginRight="mr-4"
                        />

                        {/* LPサイト */}
                        <WorksCard
                            title="期間限定イベントLP"
                            assignType="solo"
                            termLabel="チーム分業"
                            href="https://worklist-for-pf.vercel.app/"
                            imageSrc="/000_lp.png"
                            imageWidth={224}
                            imageHeight={224}
                            imageOverlayText="XDからコーディング"
                            cardHeight="250px"
                            mainTitle={["SPデータデザインも担当", "レスポンシブ実装へ"]}
                            dateStatus="2024"
                            roles="Coding"
                            skills={[
                            "XD",
                            "Tailwind CSS"
                            ]}
                            useSmallSkills={true}
                            marginRight="mr-4"
                        />

                        {/* LPサイト */}
                        <WorksCard
                            title="企業サービスLP"
                            assignType="solo"
                            termLabel="チーム分業"
                            href="https://worklist-for-pf.vercel.app/"
                            imageSrc="/000_lp.png"
                            imageWidth={224}
                            imageHeight={224}
                            imageOverlayText="XDからコーディング"
                            cardHeight="250px"
                            mainTitle={["動きを多用した", "LP実装"]}
                            dateStatus="2024"
                            roles="Coding"
                            skills={[
                            "XD",
                            "Bootstrap"
                            ]}
                            useSmallSkills={true}
                            marginRight="mr-4"
                        />

                        {/* バナー */}
                        <WorksCard
                            title="バナー"
                            assignType="solo"
                            termLabel="一貫担当"
                            href="https://worklist-for-pf.vercel.app/"
                            imageSrc="/000_bn.png"
                            imageWidth={224}
                            imageHeight={224}
                            imageOverlayText="広告バナー"
                            cardHeight="250px"
                            mainTitle={["デザインだけでなく", "実装まで完結"]}
                            dateStatus="2025"
                            roles="Dir. / Design / Coding"
                            skills={[
                            "Photoshop",
                            "Figma"
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
