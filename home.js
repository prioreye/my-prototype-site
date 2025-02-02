document.addEventListener("DOMContentLoaded", function () {
  const savedLang = localStorage.getItem("selectedLanguage") || "ja";
  applyLanguageHome(savedLang);

  document.getElementById("headerLanguageSelect").addEventListener("change", function() {
    localStorage.setItem("selectedLanguage", this.value);
    applyLanguageHome(this.value);
  });
});

function applyLanguageHome(language) {
  const translations = {
    ja: {
      siteTitle: "My Best Gourmet",
      homeLink: "ホーム",
      postLink: "投稿",
      rankingLink: "ランキング",
      mypageLink: "マイページ",

      homeTitle: "ようこそ",
      goToPostButton: "レビュー投稿はこちら",
      goToRankingButton: "名物グルメランキングはこちら",
      contactLink: "お問い合わせ",
      aboutLink: "サイトについて"
    },
    en: {
      siteTitle: "My Best Gourmet",
      homeLink: "Home",
      postLink: "Post",
      rankingLink: "Ranking",
      mypageLink: "My Page",

      homeTitle: "Welcome",
      goToPostButton: "Go to Review Post",
      goToRankingButton: "Go to Gourmet Ranking",
      contactLink: "Contact Us",
      aboutLink: "About Us"
    }
  };

  const t = translations[language] || translations.ja;

  // ヘッダー
  document.querySelector(".site-title").textContent = t.siteTitle;
  document.getElementById("homeLink").textContent = t.homeLink;
  document.getElementById("postLink").textContent = t.postLink;
  document.getElementById("rankingLink").textContent = t.rankingLink;
  document.getElementById("mypageLink").textContent = t.mypageLink;

  // メイン文言 (ホームタイトル、ボタン)
  document.getElementById("homeTitle").textContent = t.homeTitle;
  document.getElementById("goToPostButton").textContent = t.goToPostButton;
  document.getElementById("goToRankingButton").textContent = t.goToRankingButton;

  // フッター
  document.getElementById("contactLink").textContent = t.contactLink;
  document.getElementById("aboutLink").textContent = t.aboutLink;
}
