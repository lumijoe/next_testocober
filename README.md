This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## XDワイヤーフレーム(初期構想)
<img width="548" alt="スクリーンショット 2023-10-27 14 05 35" src="https://github.com/lumijoe/next_testocober/assets/118164717/63fc195a-cfe5-4c65-b4d1-79d68ad2b819">

## NEXT.js, GSAP, Tailwindcss /　Static site
- 要件：　JSXの書き方をより深め実践的なアプリの実現、実務で活かせるような技術仕様であること
- 仕様考慮：　制作系か開発系かで、制作系を選択（JSXの量をこなして特性を把握するため、CSSやGSAPの相性を把握するため）
  
## 技術選定1： Why Next.js　, Static site
- HTML,CSS,JSで制作していたPORTFOLIOをモダンな技術でアップデートしたかったため　http://design63.html.xdomain.jp
- SPAのStatic siteの制作でJSXの書き方に慣れたかったため
- PORTFOLIOのXDワイヤーフレームやディレクトリなどすでに構想済みのものがあり活用したかったため
- VercelとGithubの利用量を増やして業務や趣味で活かしたいと思っていたため
- 開発にも興味があり、まずは制作でJSX構文に慣れておきたかったため

## 技術選定2： Why Tailwindcss
- 生産コスト削減のためクラス命名が必要なBootstrapなどよりも時短が可能
- VSCode拡張機能Tailwind Documentationで、エディター上でスタイル検索が可能であり視覚的説明が充実していて時短が可能
- 特にカラーや余白の設定が豊富で、詳細にカスタムすることも可能、Static site制作において作品の差別化を図りたかったため
- globalやHomeのあらかじめ設定されているCSSとの競合など簡単に解消できた

## 技術選定3： Why GSAP
- jQueryやgetElementなどの書き方が必要なく、JSX上で実現可能で時短が可能
- 以前から気になっていたため
- 特にStatic site では、アニメーションがあることでサイト滞在時間を少しでも増やすことができ、適度なものはUX向上を期待できるため

## その他の仕様や考慮事項
- 自動翻訳機能をオフにするmetaタグ
- キーボードでのアクセシビリティへの配慮
- Photoshopや圧縮サイトを活用しできるだけ画質はそのままに画像データサイズだけを落とし、読み込み速度やビジュアル感情などのUX、サーバー負荷に配慮

## Original Favicon　を使用
- グラフィックデザイナーからWebにキャリア転向する際にデザインしたロゴ
- Web空間でもこれまでのデザイン経験や知識を忘れず活かすことを表現
- Lumi(自身の名前)が　Design（設計という根本的な意味） にはまっている様子を表現
- 自身の構築や設計や解決好きな特徴、自身そのものを表現

![favicon](https://github.com/lumijoe/next_testocober/assets/118164717/0d69128c-faaf-40de-b18a-a836247457fa)

  
## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
