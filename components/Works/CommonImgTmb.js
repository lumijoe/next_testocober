// components/Works/CommonImgTmb.js

import React from 'react';
import Image from 'next/image';

export default function CommonImgTmb ({ src, alt, width, height }) {
    // Worksエリアでサムネに使用する画像の共通設定
  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      priority
    />
  );
};
