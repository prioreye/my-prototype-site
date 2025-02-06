document.addEventListener('DOMContentLoaded', () => {
  // ▼ 多言語初期化
  const savedLang = localStorage.getItem('selectedLanguage') || 'ja';
  applyLanguageLogin(savedLang);

  document.getElementById('headerLanguageSelect').addEventListener('change', function() {
    const selLang = this.value;
    localStorage.setItem('selectedLanguage', selLang);
    applyLanguageLogin(selLang);
  });

  // ▼ フォーム送信(モック)
  const loginForm = document.getElementById('loginForm');
  loginForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const email = document.getElementById('emailInput').value.trim();
    const password = document.getElementById('passwordInput').value.trim();

    if (!email || !password) {
      alert("メールアドレスとパスワードを入力してください");
      return;
    }

    // TODO: fetch('/api/login', ...) でバックエンド連携 (将来)
    alert(`ログイン成功(モック)\nメール: ${email}\nパスワード: ${password}`);

    // 仮トークン
    localStorage.setItem('authToken', 'dummy_token_12345');

    // ログイン後、mypage.html へ
    window.location.href = 'mypage.html';
  });
});

// ▼ 多言語切り替え
function applyLanguageLogin(language) {
  const translations = {
    ja: {
      siteTitle: "What's Your No.1?",
      homeLink: "ホーム",
      postLink: "投稿",
      rankingLink: "ランキング",
      mypageLink: "マイページ",

      loginTitle: "ログイン",
      emailLabel: "メールアドレス",
      passwordLabel: "パスワード",
      loginButton: "ログイン",
      signupLinkText: "アカウントをお持ちでない方は",
      goToSignupLink: "新規登録はこちら",

      contactLink: "お問い合わせ",
      aboutLink: "サイトについて"
    },
    en: {
      siteTitle: "What's Your No.1?",
      homeLink: "Home",
      postLink: "Post",
      rankingLink: "Ranking",
      mypageLink: "My Page",

      loginTitle: "Login",
      emailLabel: "Email Address",
      passwordLabel: "Password",
      loginButton: "Login",
      signupLinkText: "Don't have an account?",
      goToSignupLink: "Sign Up Here",

      contactLink: "Contact Us",
      aboutLink: "About Us"
    }
  };

  const c = translations[language] || translations.ja;

  // ▼ ヘッダー
  document.querySelector('.site-title').textContent = c.siteTitle;
  document.getElementById('homeLink').textContent = c.homeLink;
  document.getElementById('postLink').textContent = c.postLink;
  document.getElementById('rankingLink').textContent = c.rankingLink;
  document.getElementById('mypageLink').textContent = c.mypageLink;

  // ▼ メイン要素
  document.getElementById('loginTitle').textContent = c.loginTitle;
  document.getElementById('emailLabel').textContent = c.emailLabel;
  document.getElementById('passwordLabel').textContent = c.passwordLabel;
  document.getElementById('loginButton').textContent = c.loginButton;

  document.getElementById('signupLinkText').textContent = c.signupLinkText + " ";
  const signupLink = document.getElementById('goToSignupLink');
  signupLink.textContent = c.goToSignupLink;

  // ▼ フッター
  document.getElementById('contactLink').textContent = c.contactLink;
  document.getElementById('aboutLink').textContent = c.aboutLink;
}
