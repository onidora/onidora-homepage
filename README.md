# おにどら | WORKS

個人ゲーム開発者「おにどら」のポートフォリオ。StudioActOne（全年齢向け）とうらどらスタジオ（18歳以上対象）を独立したブランドとして紹介します。

初回はトップページだけを実装しています。Astroのソースは `src/pages/index.astro`、生成HTMLは `dist/index.html` です。ブランド詳細は準備中で、後続作業は [plan](plan/README.md) にまとめています。GitHub Pages・Actions・ホスティング設定は今回の範囲に含めていません。

## 開発環境とローカル起動

- Node.js 24.22.1推奨（Volta利用時はpackage.jsonの指定が適用されます）。Astro 7.4.2の要件はNode.js 22.23.4以上です。
- npm、Git。Astroと確認用の `@astrojs/check`・TypeScriptのみを直接依存として使用します。
- TypeScriptはチェックツールの対応範囲に合わせて5.9系。依存の再現にはlockfileと `npm ci` を使います。

```powershell
cd C:\GameDev\onidora-homepage
npm ci
npm run dev
```

ターミナルに表示されたLocal URLを開きます（通常 `http://localhost:4321/`）。終了はCtrl+C。

```powershell
npm run check
npm run build
npm run preview
```

`check` はAstro・TypeScriptの検証、`build` は `dist/` への静的出力、`preview` はビルド済みサイトの確認です。生成物はGit管理せず、直接編集しません。

## コンテンツと画像の更新

- 名前・自己紹介・X URL・ブランド紹介・詳細ページの相対パスは `src/data/site.ts` で更新します。
- X URLは未設定です。確認済みの `https://x.com/...` を設定するとリンクが表示されます。空のURLや `#` は設定しません。
- 詳細ページ未作成のため、現在のブランドカードは「準備中」です。ページを追加・検証したときに `detailPath` を設定します。
- 今回の作品名はブランド情報に含まれます。後続02・03で小さな作品配列を導入し、ページ構造の編集を減らします。
- 仮アイコンはこのプロジェクトで作ったSVGです。実際のアイコンは使用許可済みファイルを `public/images/` に置き、`iconPath` と `src/pages/index.astro` のaltを更新します。パスは `images/avatar.webp` のように先頭 `/` を付けません。
- ゲームヘッダーは後続workで追加します。既存プロジェクトから素材を無断で流用しません。
- スタイルは `src/styles/global.css`。外部フォントやクライアントJavaScriptを使わない軽量な構成です。
- 変更後はcheck/buildとPC・スマートフォン幅、画像、リンクを確認します。

## GitHubと計画運用

リポジトリは [onidora/onidora-homepage](https://github.com/onidora/onidora-homepage)（private）。2026-10-27のユーザー承認に基づき、mainへ初期構築をpush済みです。GitHubへのコード登録とWebサイトの公開は別の操作です。以降のpushはAGENTS.mdの承認ルールに従います。

- 共通ルール: [AGENTS.md](AGENTS.md)
- 計画スキル: [.agents/skills/plan-authoring/SKILL.md](.agents/skills/plan-authoring/SKILL.md)
- 後続作業・実施記録: [plan/README.md](plan/README.md)
- slowlifeとの差分と理由: [運用ルールの採否](docs/運用ルールの採否.md)

依頼例: 「plan-authoringスキルに沿って、02-StudioActOneページのworkを実装して」。小さな文言修正には新しい計画書を作りません。

## GitHub Pagesへの公開

現在は未設定です。実行手順・Actionsワークフローはまだ用意していません。[05-GitHub-Pages公開](plan/work/2026-10-27-05-GitHub-Pages公開.md) で、公開先の確定、site/base設定、Actions、ローカル検証、公開許可、初回デプロイを扱います。作業時点の公式手順を確認し、READMEへ確定手順を追記します。

## 参考

- [Astro公式セットアップ](https://docs.astro.build/en/install-and-setup/)
- [Astro TypeScriptガイド](https://docs.astro.build/en/guides/typescript/)

成人向けブランドを紹介しますが、サイト自体に成人向けの画像・動画・露骨な文章は掲載しません。成人向けコンテンツを含む外部サイトへのリンクは、対象年齢と注意書きを明示します。
