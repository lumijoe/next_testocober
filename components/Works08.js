// components/Works08.js
// パターン：デザイン、中央スクロール
// ブレークポイントsm:640px

import React from 'react';
import WorksTemp from '../components/WorksTemp';
import BtnLike from '../components/Button/BtnLike';
import BtnLikeSkillBlack from './Button/BtnLikeSkillBlack';
import CommonImgTmb from '../components/Works/CommonImgTmb';
import Image from 'next/image';
import Link from 'next/link';
import BtnLikeTitleWhite from './Button/BtnLikeTitleWhite';

export default function Works08 () {
    return (
       <div>
            <WorksTemp>
                <div className='flex justify-center'>
                    <BtnLike className="bg-gray-400 rounded-bl-2xl">クリエイティブデザイン</BtnLike>
                </div>

                <div className='flex flex-col sm:flex-col justify-center w-[100vw]'>
                    <div className='flex flex-row justify-center'> 
                        <div className='flex flex-col mb-8'>
                            <div className='w-[250px]'>
                                <h3 className='font-bold text-1xl'>コミニティデザインのために</h3>
                                <p className='break-all mt-2 text-[12px] leading-6 text-[#696969] font-thin tracking-wider'>産官学民領域で総合計画等に基づいたディレクションやグラフィック制作を担当。<br/>フィールドワークを通じた中長期プロジェクトの参画も含め、デザインの工程も種類も幅広く担当した事例です。<br/>-2014-2021 / <span className='text-[10px]'>産官学民</span></p>
                            </div> 
                        </div>
                        <div className='flex flex-col items-center ml-8 mb-8'>
                            <BtnLikeSkillBlack>Illustrator</BtnLikeSkillBlack>
                            <BtnLikeSkillBlack>Photoshop</BtnLikeSkillBlack>
                            <BtnLikeSkillBlack>PowerPoint</BtnLikeSkillBlack>
                            <BtnLikeSkillBlack>Excel</BtnLikeSkillBlack>
                        </div>
                    </div>  
                </div>
                
                <div className='flex flex-col-reverse h-auto justify-center'>
                    <div className='flex flex-row w-[100vw] overflow-x-scroll overflow-auto'>
                        <div className='flex flex-col justify-center relative mb-8 mr-3'>
                        <BtnLikeTitleWhite className='text-[10px]'>グラフィック / パンフレットほか</BtnLikeTitleWhite>
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
                                    style={{ paddingTop: "25px", position: "absolute", top: "50%", left: "5%" }}
                                />
                            </Link>
                            
                        </div>
                        <div className='flex flex-col justify-center relative mb-8 mr-3'>
                        <BtnLikeTitleWhite className='text-[10px]'>グラフィック / ロゴほか</BtnLikeTitleWhite>
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
                                    style={{ paddingTop: "25px", position: "absolute", top: "50%", left: "5%" }}
                                />
                            </Link>
                            
                        </div>
                        <div className='flex flex-col justify-center relative mb-8 mr-3'>
                        <BtnLikeTitleWhite className='text-[10px]'>ストラテジック / 土地活用事業</BtnLikeTitleWhite>
                            <CommonImgTmb 
                            src="/img05.jpg"
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
                                    style={{ paddingTop: "25px", position: "absolute", top: "50%", left: "5%" }}
                                />
                            </Link>
                        </div>
                        <div className='flex flex-col justify-center relative mb-8 mr-3'>
                        <BtnLikeTitleWhite className='text-[10px]'>ストラテジック / 産官開発事業</BtnLikeTitleWhite>
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
                                    style={{ paddingTop: "25px", position: "absolute", top: "50%", left: "5%" }}
                                />
                            </Link>
                            
                        </div>
                        <div className='flex flex-col justify-center relative mb-8 mr-3'>
                            <BtnLikeTitleWhite className='text-[10px]'>スペース / ギフトショーブース内装</BtnLikeTitleWhite>
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
                                    style={{ paddingTop: "25px", position: "absolute", top: "50%", left: "5%" }}
                                />
                            </Link>
                            
                        </div>

                        <div className='flex flex-col justify-center relative mb-8 mr-3'>
                            <BtnLikeTitleWhite className='text-[10px]'>スペース / 駅中店舗内装</BtnLikeTitleWhite>
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
                                    style={{ paddingTop: "25px", position: "absolute", top: "50%", left: "5%" }}
                                />
                            </Link>
                            
                        </div>
                        
                    
                        <div className='flex flex-col justify-center relative mb-8 mr-3'>
                        
                        <BtnLikeTitleWhite className='text-[10px]'>スペース / 社会実験</BtnLikeTitleWhite>
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
                                    style={{ paddingTop: "25px", position: "absolute", top: "50%", left: "8%" }}
                                />
                            </Link>
                            
                        </div>
                        
                    </div>
                </div>
                <div className='bg-white w-full h-[15px] mt-8 z-40'></div>
            </WorksTemp>
       </div> 
    ) 
}