type Brand = {
  id: 'studioactone' | 'uradora';
  name: string;
  label: string;
  audience: string;
  description: string;
  work: string;
  detailPath?: string;
  externalLink?: {
    label: string;
    url: string;
    notice?: string;
  };
};

type Profile = {
  name: string;
  title: string;
  introduction: string;
  iconPath: string;
  xUrl?: string;
};

export const profile: Profile = {
  name: 'おにどら',
  title: 'おにどら | WORKS',
  introduction: 'Unityと稀にお絵描き / フリーのプログラマー\nゲーム開発のお手伝いしながらアクションゲーム作ってるヒト',
  iconPath: 'images/avatar-placeholder.svg',
  xUrl: 'https://x.com/onidora_indev',
};

export const brands: Brand[] = [
  {
    id: 'studioactone',
    name: 'StudioActOne',
    label: 'ALL AGES GAMES',
    audience: '全年齢向け',
    description: '全年齢向けゲーム制作ブランド。CodeReactorsをはじめ、ゲームを制作しています。',
    work: 'CodeReactors',
    externalLink: {
      label: 'Steamストアを見る',
      url: 'https://store.steampowered.com/app/2171640/%E3%82%B3%E3%83%BC%E3%83%89%E3%83%AA%E3%82%A2%E3%82%AF%E3%82%BF%E3%83%BC%E3%82%BA/',
    },
    // 詳細ページを実装・検証してから 'studioactone/' を設定する。
    detailPath: undefined,
  },
  {
    id: 'uradora',
    name: 'うらどらスタジオ',
    label: 'ADULT GAMES',
    audience: '18+ / 成人向け',
    description: '成人向けゲーム制作ブランド。UradoraSurvivorsを開発しています。',
    work: 'UradoraSurvivors — 開発中',
    externalLink: {
      label: 'Ci-enで開発状況を見る（18+）',
      url: 'https://ci-en.dlsite.com/creator/41142',
      notice: 'リンク先には成人向けコンテンツが含まれます。18歳未満の方はアクセスをご遠慮ください。',
    },
    // 詳細ページを実装・検証してから 'uradora/' を設定する。
    detailPath: undefined,
  },
];
