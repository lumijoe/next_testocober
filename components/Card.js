// components/Card.js(Cardコンポーネント)

import React from 'react';
import Image from 'next/image'
/*
export default function Card() {
    return (
        <div>
            <figure className="bg-slate-100 rounded-xl p-8 dark:bg-slate-800">
            <img className="w-24 h-24 rounded-full mx-auto" src="/sarah-dayan.jpg" alt="" width="384" height="512">
            <div className="pt-6 space-y-4">
                <blockquote>
                <p class="text-lg font-medium">
                    “Tailwind CSS is the only framework that I've seen scale
                    on large teams. It’s easy to customize, adapts to any design,
                    and the build size is tiny.”
                </p>
                </blockquote>
                <figcaption className="font-medium">
                <div className="text-sky-500 dark:text-sky-400">
                    Sarah Dayan
                </div>
                <div className="text-s>
                    Staff Engineer, Algolia
                </div>
                </figcaption>
            </div>
            </figure>
        </div>
    )
}
*/


//https://tailwindui.com/components/marketing/sections/team-sections
export default function Card() {
    return (
        <div>
            {/* About */}
            <div className="bg-white py-24 sm:py-32">
                <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
                <div className="max-w-2xl">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">About</h2>
                    <p className="mt-6 text-lg leading-8 text-gray-600">
                    Libero fames augue nisl porttitor nisi, quis. Id ac elit odio vitae elementum enim vitae ullamcorper
                    suspendisse.
                    </p>
                </div>
                <ul role="list" className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
                        <div className="flex items-center gap-x-6">
                        <Image
                        src="/image01.jpg"
                        alt="Hero img"
                        className="h-20 w-20 rounded-full"
                        width={600}
                        height={600}
                        priority
                        />
                        <div>
                            <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">works title</h3>
                            <p className="text-sm font-semibold leading-6 text-indigo-600">works subtitle</p>
                        </div>
                        </div>
                </ul>
                </div>
            </div>

            {/* Skills */}
            <div className="bg-white py-24 sm:py-32">
                <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
                <div className="max-w-2xl">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Skills</h2>
                    <p className="mt-6 text-lg leading-8 text-gray-600">
                    Libero fames augue nisl porttitor nisi, quis. Id ac elit odio vitae elementum enim vitae ullamcorper
                    suspendisse.
                    </p>
                </div>
                <ul role="list" className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
                        <div className="flex items-center gap-x-6">
                        <Image
                        src="/image01.jpg"
                        alt="Hero img"
                        className="h-20 w-20 rounded-full"
                        width={600}
                        height={600}
                        priority
                        />
                        <div>
                            <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">works title</h3>
                            <p className="text-sm font-semibold leading-6 text-indigo-600">works subtitle</p>
                        </div>
                        </div>
                </ul>
                </div>
            </div>

            {/* Works */}
            <div className="bg-white py-24 sm:py-32">
                <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
                <div className="max-w-2xl">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Works</h2>
                    <p className="mt-6 text-lg leading-8 text-gray-600">
                    Libero fames augue nisl porttitor nisi, quis. Id ac elit odio vitae elementum enim vitae ullamcorper
                    suspendisse.
                    </p>
                </div>
                <ul role="list" className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
                        <div className="flex items-center gap-x-6">
                            <Image
                            src="/image01.jpg"
                            alt="Hero img"
                            className="h-20 w-20 rounded-full"
                            width={600}
                            height={600}
                            priority
                            />
                            <div>
                                <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">works title</h3>
                                <p className="text-sm font-semibold leading-6 text-indigo-600">works subtitle</p>
                            </div>
                            <Image
                            src="/image01.jpg"
                            alt="Hero img"
                            className="h-20 w-20 rounded-full"
                            width={600}
                            height={600}
                            priority
                            />
                            <div>
                                <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">works title</h3>
                                <p className="text-sm font-semibold leading-6 text-indigo-600">works subtitle</p>
                            </div>
                            <Image
                            src="/image01.jpg"
                            alt="Hero img"
                            className="h-20 w-20 rounded-full"
                            width={600}
                            height={600}
                            priority
                            />
                            <div>
                                <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">works title</h3>
                                <p className="text-sm font-semibold leading-6 text-indigo-600">works subtitle</p>
                            </div>
                            <Image
                            src="/image01.jpg"
                            alt="Hero img"
                            className="h-20 w-20 rounded-full"
                            width={600}
                            height={600}
                            priority
                            />
                            <div>
                                <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">works title</h3>
                                <p className="text-sm font-semibold leading-6 text-indigo-600">works subtitle</p>
                            </div>
                            <Image
                            src="/image01.jpg"
                            alt="Hero img"
                            className="h-20 w-20 rounded-full"
                            width={600}
                            height={600}
                            priority
                            />
                            <div>
                                <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">works title</h3>
                                <p className="text-sm font-semibold leading-6 text-indigo-600">works subtitle</p>
                            </div>
                            <Image
                            src="/image01.jpg"
                            alt="Hero img"
                            className="h-20 w-20 rounded-full"
                            width={600}
                            height={600}
                            priority
                            />
                            <div>
                                <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">works title</h3>
                                <p className="text-sm font-semibold leading-6 text-indigo-600">works subtitle</p>
                            </div>
                        </div>
                </ul>
                </div>
            </div>
        </div>
    )
  }