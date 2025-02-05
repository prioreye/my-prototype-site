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
      siteTitle: "What's Your No.1?",
      homeLink: "Home",
      postLink: "Post",
      rankingLink: "Ranking",
      mypageLink: "My Page",

      homeTitle: "ようこそ",
      goToRankingButton: "名物グルメランキングはこちら",
      goToPostButton: "レビュー投稿はこちら",
      goToLoginButton: "ログインはこちら",
      goToSignupButton: "新規登録はこちら",

      contactLink: "お問い合わせ",
      aboutLink: "サイトについて"
    },
    en: {
      siteTitle: "What's Your No.1?",
      homeLink: "Home",
      postLink: "Post",
      rankingLink: "Ranking",
      mypageLink: "My Page",

      homeTitle: "Welcome",
      goToRankingButton: "Go to Gourmet Ranking",
      goToPostButton: "Go to Review Post",
      goToLoginButton: "Go to Login",
      goToSignupButton: "Go to Sign Up",

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
  document.getElementById("goToRankingButton").textContent = c.goToRankingButton;
  document.getElementById("goToPostButton").textContent = c.goToPostButton;
  document.getElementById("goToLoginButton").textContent = c.goToLoginButton;
  document.getElementById("goToSignupButton").textContent = c.goToSignupButton;

  // フッター
  document.getElementById("contactLink").textContent = c.contactLink;
  document.getElementById("aboutLink").textContent = c.aboutLink;
}
