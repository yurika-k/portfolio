/* ===================================================================
   サイトコンテンツ（日本語版）
   テキストや画像パスはここを編集してください。レイアウトのロジックは main.js にあります。
=================================================================== */

const SITE_LANG = "ja";

const SOCIAL_LINKS = {
  linkedin: "#", // TODO: LinkedInのURLに差し替え
  instagram: "#", // TODO: InstagramのURLに差し替え
  note: "#", // TODO: noteのURLに差し替え
  pinterest: "#" // TODO: PinterestのURLに差し替え
};

const CONTACT_EMAIL = "your-email@example.com"; // TODO: 自分のメールアドレスに差し替え

const PROFILE = {
  name: "YYYYYYY",
  photo: "../assets/images/profile_img.jpg",
  bio: [
    "はじめまして、YKです。イラストレーション、UI/UXデザイン、映像、プロダクトなど幅広く手がけるクリエイティブデザイナーです。",
    "明確なアイデアと丁寧な仕上げ、その両方が求められるプロジェクトが好きです。",
    "以下の作品をご覧いただき、気になるものがあればお気軽にご連絡ください。"
  ]
};

/* 各カテゴリは1〜5点、またはそれ以上の作品を持てます。
   1〜5点：中央揃えのサムネイル行として表示。
   6点以上：5枠の表示ウィンドウが3秒ごとに自動で切り替わります。 */
const WORKS = {
  illustration: {
    label: "Illustration",
    tileImage: "../assets/images/works_illustration_img.jpg",
    items: [
      { image: "../assets/images/works_illustration_1.jpg", title: "紙の四季", description: "紙のテクスチャを重ねて季節の移ろいを表現したエディトリアルイラストシリーズ。" },
      { image: "../assets/images/works_illustration_2.jpg", title: "街のノート", description: "通勤中に描いたラフスケッチをまとめ、小さな自主制作のZINEとして発行。" },
      { image: "../assets/images/works_illustration_3.jpg", title: "夜の庭", description: "キャンドルブランドのパッケージ向けに制作した、ボタニカルな雰囲気のイラスト。" }
    ]
  },
  uiux: {
    label: "UI/UX Design",
    tileImage: "../assets/images/works_uiux_img.jpg",
    items: [
      { image: "../assets/images/works_uiux_1.jpg", title: "フィンテックのオンボーディング", description: "5ステップの登録フローを再設計し、フォームの構成と文言を見直して離脱を削減。" },
      { image: "../assets/images/works_uiux_2.jpg", title: "レシピアプリのコンセプト", description: "片手操作と大きく読みやすいタイポグラフィを軸にした料理アプリのコンセプト案。" }
    ]
  },
  video: {
    label: "Video Contents",
    tileImage: "../assets/images/works_video_img.jpg",
    items: [
      { image: "../assets/images/works_video_1.jpg", title: "スタジオリール 2025", description: "ストップモーションと2Dアニメーションを組み合わせた45秒のリール映像。" },
      { image: "../assets/images/works_video_2.jpg", title: "製品ローンチティザー", description: "SNS向けに制作した縦型ショートティザー。撮影素材とタイトルカードで構成。" },
      { image: "../assets/images/works_video_3.jpg", title: "撮影の舞台裏", description: "撮影の準備から本番までを追ったドキュメンタリー風の編集。" }
    ]
  },
  products: {
    label: "Products",
    tileImage: "../assets/images/works_products_img.jpg",
    items: [
      { image: "../assets/images/works_products_1.jpg", title: "陶器のテーブルウェア", description: "半年間のスタジオ滞在制作で設計・試作した小さな食器シリーズ。" },
      { image: "../assets/images/works_products_2.jpg", title: "デスクオブジェクト", description: "ひとつのアルミ押出形材から展開した、ミニマルなデスク小物のセット。" }
    ]
  },
  writing: {
    label: "Writing",
    tileImage: "../assets/images/works_writing_img.jpg",
    items: [
      { image: "../assets/images/works_writing_1.jpg", title: "スローデザインについて", description: "納期に追われる業界の中で、じっくりとしたプロセスがなぜ大切かを綴ったエッセイ。" },
      { image: "../assets/images/works_writing_2.jpg", title: "スタジオノート", description: "大きなデザインプロジェクトの裏にある小さな意思決定を記録する連載コラム。" }
    ]
  }
};

const UI_TEXT = {
  langSwitchLabel: "English",
  langSwitchHref: "../index.html",
  mvTitle: "Portfolio",
  mvRole: "Creative Designer",
  mvName: "YK",
  worksTitle: "Works",
  profileTitle: "Profile",
  footer: "Copyright \u00A9 portfolio",
  contactTitle: "Contact",
  formName: "お名前",
  formEmail: "メールアドレス",
  formMessage: "ご要件",
  formSending: "送信中…",
  formSuccess: "送信完了しました。記載いただいたメールアドレス宛に返信します。",
  formError: "送信に失敗しました。時間をおいて再度お試しいただくか、直接メールにてご連絡ください。"
};
