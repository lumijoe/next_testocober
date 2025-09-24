// components/Label/LabelWorkNum.js
// 業務か個人かを区別するためのラベル設定

import React from 'react';

export default function LabelWorkNum ({ type, children, className }) {
    
    const labelWorkNumClass = `${className}`

    return (
        <p
         className={`${labelWorkNumClass}`}
         style={{ 
            fontSize: '30px',
            position: 'absolute',
            top: '-20px',
            fontStyle:'italic',
            fontWeight:'bolder',
            lineHeight: '30px',
            fontFamily: '"Alumni Sans", "Noto Sans JP", sans-serif, Arial'
         }}
        >
        {children}
        </p>
    )
}