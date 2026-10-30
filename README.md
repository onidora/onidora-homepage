## 開発環境とローカル起動

- Node.js 24.22.1推奨（Volta利用時はpackage.jsonの指定が適用されます）。Astro 7.4.2の要件はNode.js 22.23.4以上です。
- npm、Git。Astroと確認用の `@astrojs/check`・TypeScriptのみを直接依存として使用します。
- TypeScriptはチェックツールの対応範囲に合わせて5.9系。依存の再現にはlockfileと `npm ci` を使います。

```powershell
cd C:\WebDev\onidora-homepage
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

リポジトリは [onidora/onidora-homepage](https://github.com/onidora/onidora-homepage)。2026-10-30のユーザー指示に基づき、無料のGitHub Pagesを使うためpublicに変更済みです。コード・履歴・計画文書も公開対象です。以降のpushはAGENTS.mdの承認ルールに従います。

- 共通ルール: [AGENTS.md](AGENTS.md)
- 計画スキル: [.agents/skills/plan-authoring/SKILL.md](.agents/skills/plan-authoring/SKILL.md)
- 後続作業・実施記録: [plan/README.md](plan/README.md)
- slowlifeとの差分と理由: [運用ルールの採否](docs/運用ルールの採否.md)

依頼例: 「plan-authoringスキルに沿って、02-StudioActOneページのworkを実装して」。小さな文言修正には新しい計画書を作りません。

## GitHub Pagesへの公開

トップ1ページをテスト公開するため、`.github/workflows/deploy.yml` を用意しています。公開予定URLは `https://onidora.github.io/onidora-homepage/`。初回公開の結果は [05-GitHub-Pages公開](plan/work/2026-10-27-05-GitHub-Pages公開.md) の実施記録に残します。

1. GitHubのSettings → PagesでSourceを **GitHub Actions** に設定します。現在のアカウントはprivateリポジトリからのPages公開が利用できないため、publicリポジトリから一般公開する構成です。
2. `main` へサイトのソースや公開設定をpushすると、型チェック・ビルド・Pages公開が順に実行されます。Actionsの **Deploy to GitHub Pages → Run workflow** からの手動実行も可能です。文書だけの変更では自動公開しません。
3. 公開後、トップ、CSS、アイコン、ページ内リンクを確認します。ブランド詳細ページと正式素材は後続workの対象です。

ActionsはPagesの設定から `SITE_URL`（origin）と `SITE_BASE`（base_path）を取得してAstroに渡します。ownerやリポジトリ名を変更した場合も公開設定に追従します。ローカルでは環境変数を未設定にすれば `/` で動作します。

公開パスをローカルで再現する場合:

```powershell
$env:SITE_URL = 'https://onidora.github.io'
$env:SITE_BASE = '/onidora-homepage'
npm run build
npm run preview
# 表示URL: http://localhost:4321/onidora-homepage/
```

通常のローカル開発に戻す際は、そのPowerShellを終了するか `Remove-Item Env:SITE_URL, Env:SITE_BASE` を実行します。公開するのは `dist/` のみで、README・計画・リポジトリ全体を配信する構成ではありません。

## 参考

- [Astro公式セットアップ](https://docs.astro.build/en/install-and-setup/)
- [Astro TypeScriptガイド](https://docs.astro.build/en/guides/typescript/)

成人向けブランドを紹介しますが、サイト自体に成人向けの画像・動画・露骨な文章は掲載しません。成人向けコンテンツを含む外部サイトへのリンクは、対象年齢と注意書きを明示します。
