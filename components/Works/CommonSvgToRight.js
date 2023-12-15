// components/Works/CommonSvgToRight.js

import React from 'react';
import Image from 'next/image';

export default function CommonSvgToRight ({ src, alt, width, height, style }) {
    // Worksエリアでサムネに使用する画像の共通設定
  return (
    <Image
    src="/toright.svg"
    alt="Icon"
    width={72}
    height={72}
    style={{ paddingTop: "25px" }}
    />
  );
}; 
