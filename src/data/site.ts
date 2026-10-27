type Brand = {
  id: 'studioactone' | 'uradora';
  name: string;
  label: string;
  audience: string;
  description: string;
  work: string;
  detailPath?: string;
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
  introduction: 'ゲームをつくっています。ふたつのブランドで、それぞれの遊びと世界をかたちに。',
  iconPath: 'images/avatar-placeholder.svg',
  // 正式なプロフィールURLが決まったら設定する。未設定時はリンクを出さない。
  xUrl: undefined,
};

export const brands: Brand[] = [
  {
    id: 'studioactone',
    name: 'StudioActOne',
    label: 'ALL AGES GAMES',
    audience: '全年齢向け',
    description: '全年齢向けゲーム制作ブランド。CodeReactorsをはじめ、ゲームを制作しています。',
    work: 'CodeReactors',
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
    // 詳細ページを実装・検証してから 'uradora/' を設定する。
    detailPath: undefined,
  },
];
