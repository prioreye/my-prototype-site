document.addEventListener('DOMContentLoaded', () => {
  // 多言語初期処理
  const savedLang = localStorage.getItem('selectedLanguage') || 'ja';
  applyLanguageLogin(savedLang);

  document.getElementById('headerLanguageSelect').addEventListener('change', function() {
    localStorage.setItem('selectedLanguage', this.value);
    applyLanguageLogin(this.value);
  });

  // フォーム送信(モック)
  const loginForm = document.getElementById('loginForm');
  loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('emailInput').value.trim();
    const password = document.getElementById('passwordInput').value.trim();

    if (!email || !password) {
      alert("メールアドレスとパスワードを入力してください");
      return;
    }
    alert(`ログイン成功(モック)\nメール: ${email}\nパスワード: ${password}`);
    localStorage.setItem('authToken', 'dummy_token_12345');
    window.location.href = 'mypage.html';
  });
});

// ▼ 多言語
function applyLanguageLogin(lang) {
  const translations = {
    ja: {
      siteTitle: "What's Your No.1?",
      homeLink: "Home",
      postLink: "Post",
      rankingLink: "Ranking",
      mypageLink: "My page",

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
      goToSignupLink: "Sign up here",

      contactLink: "Contact Us",
      aboutLink: "About Us"
    }
  };

  const c = translations[lang] || translations.ja;

  // ヘッダー
  document.querySelector('.site-title').textContent = c.siteTitle;
  document.getElementById('homeLink').textContent = c.homeLink;
  document.getElementById('postLink').textContent = c.postLink;
  document.getElementById('rankingLink').textContent = c.rankingLink;
  document.getElementById('mypageLink').textContent = c.mypageLink;

  // メイン
  document.getElementById('loginTitle').textContent = c.loginTitle;
  document.getElementById('emailLabel').textContent = c.emailLabel;
  document.getElementById('passwordLabel').textContent = c.passwordLabel;
  document.getElementById('loginButton').textContent = c.loginButton;

  // 分離したテキスト & リンク要素に別々に設定
  document.getElementById('signupLinkText').textContent = c.signupLinkText;
  document.getElementById('goToSignupLink').textContent = c.goToSignupLink;

  // フッター
  document.getElementById('contactLink').textContent = c.contactLink;
  document.getElementById('aboutLink').textContent = c.aboutLink;
}
