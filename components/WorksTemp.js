import React from 'react';
import CommonImgTmb from '../components/Works/CommonImgTmb';

export default function WorksTemp({ children }) {
    return (
        <div className='w-full sm:justify-center'>
        {children}
        <CommonImgTmb />
        </div>
    )
}