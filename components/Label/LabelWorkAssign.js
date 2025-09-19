// components/Label/LabelWorkType.js

import React from 'react';

export default function LabelWorkAssign ({ type, children, className }) {
    // 業務か個人かを区別するためのラベル設定
    const labels = {
        solo: '一貫担当',
        team: 'チーム分業'
    };
    const colors = {
          solo: '#d24537',
          team: '#cdbd17'
      };

    const labelWorkAssignClass = `rounded-full text-white w-[90px] h-[25px] ${className}`

    return (
        <p
         className={`${labelWorkAssignClass}`}
         style={{ 
            fontSize: '12px',
            backgroundColor: colors[type],
            position: 'absolute',
            top: '-24px',
            left: '38px',
            border: 'none',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: '3px'
         }}
        >
        {children || labels[type]}
        </p>
    )
}