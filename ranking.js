document.addEventListener("DOMContentLoaded", function() {
  // ページロード時に言語適用
  const savedLang = localStorage.getItem("selectedLanguage") || "ja";
  applyRankingLanguage(savedLang);

  // ヘッダーの言語セレクト
  document.getElementById("headerLanguageSelect").addEventListener("change", function() {
    const selLang = this.value;
    localStorage.setItem("selectedLanguage", selLang);
    applyRankingLanguage(selLang);
  });
});

// 多言語切り替え
function applyRankingLanguage(lang) {
  const translations = {
    ja: {
      siteTitle: "My Best Gourmet",
      homeLink: "Home",
      postLink: "Post",
      rankingLink: "Ranking",
      mypageLink: "My Page",

      rankingTitle: "人気ランキング",
      rankingMessage: "ただいま準備中です...",
      contactLink: "お問い合わせ",
      aboutLink: "サイトについて"
    },
    en: {
      siteTitle: "My Best Gourmet",
      homeLink: "Home",
      postLink: "Post",
      rankingLink: "Ranking",
      mypageLink: "My Page",

      rankingTitle: "Popular Rankings",
      rankingMessage: "Coming Soon...",
      contactLink: "Contact Us",
      aboutLink: "About Us"
    }
  };

  const t = translations[lang] || translations.ja;

  // ヘッダー
  document.querySelector(".site-title").textContent = t.siteTitle;
  document.getElementById("homeLink").textContent = t.homeLink;
  document.getElementById("postLink").textContent = t.postLink;
  document.getElementById("rankingLink").textContent = t.rankingLink;
  document.getElementById("mypageLink").textContent = t.mypageLink;

  // ランキングページ要素
  document.getElementById("rankingTitle").textContent = t.rankingTitle;
  document.getElementById("rankingMessage").textContent = t.rankingMessage;

  // フッター
  document.getElementById("contactLink").textContent = t.contactLink;
  document.getElementById("aboutLink").textContent = t.aboutLink;
}
