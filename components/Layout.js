// components/Layout.js

import React from 'react'
import Header2 from './Header2'
import Footer from './Footer'

export default function Layout ({ children }) {
    return (
        <div>
            <Header2 />
            <main className='pt-[52px]'>{ children }</main>
            <Footer />
            

        </div>
    )
}