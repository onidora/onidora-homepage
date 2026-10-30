# GitHub Pages公開

## 目的と概要

トップ1ページをGitHub Pagesへテスト公開し、GitHub Actionsで更新できるようにする。
2026-10-30にユーザーから「早速テストでGitPageで公開してみたい」と依頼を受領。初回の設定不要という指定を、この公開作業について変更する。
依存は01のGitHub登録。02〜04の完成を待つ当初の計画から、トップのテスト公開を先行する範囲へ改訂した。ブランド詳細の追加・正式素材の作成は含めない。

## 構成

```text
astro.config.mjs              修正: SITE_URL/SITE_BASEによる公開パス対応
.github/workflows/deploy.yml  新規: mainのサイト変更または手動実行で検証・静的ビルド・公開
README.md                     修正: Pages設定、公開・検証・ローカル再現方法
plan/README.md                修正: 02〜04より先行するテスト公開へ依存を変更
```

## 完了条件

- GitHub PagesをActions方式で有効化し、ワークフローが成功する。
- 公開URLでトップ・CSS・アイコン・ページ内リンクを確認できる。
- Pagesのメタデータからsite/baseを決め、リポジトリ名変更に追従する。ローカルのbase付きプレビューでも表示できる。
- check/buildが成功し、公開する成果物はdistのみ。
- 2026-10-30のユーザー指示に従いコードリポジトリをpublicへ変更し、無料のGitHub Pagesを使用する。

## 方針と手順

1. GitHub・Astroの公式資料と現設定を確認し、プラン制約を確認する。
2. 公式Actionsを使用し、ビルドはcontents/pagesのread、公開jobだけpages/writeとid-token/writeを付与する。
3. ローカルで通常ビルド・base付きビルド・HTTP応答と画像・CSS・リンクを検証する。
4. ユーザーの公開依頼に基づきPagesの有効化を試し、利用可能ならmainへpushして初回デプロイを実行する。
5. ワークフローと公開URLを確認し、実施記録とREADMEへ結果を残す。

## 着手条件（要確認）

- テスト公開の実装・push・デプロイは2026-10-30の依頼で許可済み。
- privateリポジトリのPages有効化はプラン制約によりHTTP 422。2026-10-30にユーザーからpublicへの変更許可を受領済み。未回答の判断点はない。

## 実施記録

- 2026-10-27: 公開設定を行わず、将来の3ページ完成後の作業として計画のみ作成。
- 2026-10-30: トップ1ページの先行テスト公開へスコープを改訂。Sitesの公開機能は使用せず、ユーザー指定のGitHub Pagesを利用する。
- 2026-10-30: GitHub公式資料でprivateリポジトリのPages利用にはPro以上が必要と確認。APIのアカウント情報はplanがnullであり、契約状態は未判定。Pages GETは404で未設定。
- 2026-10-30: 公式ActionのバージョンとcommitをGitHub APIで確認。既存のWebDev移設コミットfd0a839を保持し、feat/github-pagesで公開設定を実装する。
- 2026-10-30: privateのPages作成APIが「Your current plan does not support GitHub Pages for this repository.」でHTTP 422を返した。ユーザーから「だとしたら公開にしたいな」とpublic化の承認を受領。
- 2026-10-30: checkはエラー・警告・ヒント0。通常パスと/onidora-homepageのビルド成功。サブパスのローカルブラウザでCSS、アイコン、トップへの戻り、制作ブランドへのEnter移動を確認。ブラウザ警告・エラー0。
- 2026-10-30: リポジトリをPUBLICへ変更してAPIで確認。Pagesをworkflow方式・HTTPS有効で作成し、公開URL https://onidora.github.io/onidora-homepage/ を取得。ローカルのHTML・CSS・SVGはHTTP 200、文書の相対リンク切れなし。
