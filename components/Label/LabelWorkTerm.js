// components/Label/LabelWorkTerm.js
// 期間を区別するためのラベル設定

import React from 'react';

export default function LabelWorkTerm ({ children, className }) {

    const labelWorkTermClass = `rounded-full text-white w-[auto] h-[25px] ${className}`

    return (
        <p
         className={`${labelWorkTermClass}`}
         style={{ 
            fontSize: '12px',
            backgroundColor: 'black',
            position: 'absolute',
            top: '10px',
            left: '75px',
            border: 'none',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: '3px',
            zIndex:'1',
            fontFamily:'Noto Sans JP',
            paddingLeft:'7px',
            paddingRight:'7px'
         }}
        >
        {children || labels[type]}
        </p>
    )
}