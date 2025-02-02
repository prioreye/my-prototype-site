document.addEventListener("DOMContentLoaded", function () {
  const savedLang = localStorage.getItem("selectedLanguage") || "ja";
  applyLanguageHome(savedLang);

  document.getElementById("headerLanguageSelect").addEventListener("change", function() {
    const selectedLang = this.value;
    localStorage.setItem("selectedLanguage", selectedLang);
    applyLanguageHome(selectedLang);
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

  const c = translations[language] || translations.ja;

  // ヘッダー
  document.querySelector(".site-title").textContent = c.siteTitle;
  document.getElementById("homeLink").textContent = c.homeLink;
  document.getElementById("postLink").textContent = c.postLink;
  document.getElementById("rankingLink").textContent = c.rankingLink;
  document.getElementById("mypageLink").textContent = c.mypageLink;

  // メイン文言
  document.getElementById("homeTitle").textContent = c.homeTitle;
  document.getElementById("goToPostButton").textContent = c.goToPostButton;
  document.getElementById("goToRankingButton").textContent = c.goToRankingButton;

  // フッター
  document.getElementById("contactLink").textContent = c.contactLink;
  document.getElementById("aboutLink").textContent = c.aboutLink;
}
