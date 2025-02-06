document.addEventListener('DOMContentLoaded', () => {
  // ▼ 多言語初期化
  const savedLang = localStorage.getItem('selectedLanguage') || 'ja';
  applyLanguageSignup(savedLang);

  document.getElementById('headerLanguageSelect').addEventListener('change', function() {
    const selLang = this.value;
    localStorage.setItem('selectedLanguage', selLang);
    applyLanguageSignup(selLang);
  });

  // ▼ フォーム送信(モック)
  const signupForm = document.getElementById('signupForm');
  signupForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const nickname = document.getElementById('nicknameInput').value.trim();
    const email = document.getElementById('signupEmailInput').value.trim();
    const password = document.getElementById('signupPasswordInput').value.trim();

    if (!nickname || !email || !password) {
      alert("ユーザー名・メールアドレス・パスワードを入力してください");
      return;
    }

    // TODO: fetch('/api/signup', ...) でバックエンド登録 (将来)
    alert(`新規登録完了(モック)\nユーザー名: ${nickname}\nメール: ${email}`);

    // 仮トークン
    localStorage.setItem('authToken', 'dummy_token_12345');
    window.location.href = 'mypage.html';
  });
});

// ▼ 多言語切り替え
function applyLanguageSignup(language) {
  const translations = {
    ja: {
      siteTitle: "What's Your No.1?",
      homeLink: "ホーム",
      postLink: "投稿",
      rankingLink: "ランキング",
      mypageLink: "マイページ",

      signupTitle: "新規登録",
      nicknameLabel: "ユーザー名",
      signupEmailLabel: "メールアドレス",
      signupPasswordLabel: "パスワード",
      signupButton: "新規登録",

      loginLinkText: "既にアカウントをお持ちの方は",
      goToLoginLink: "ログインはこちら",

      contactLink: "お問い合わせ",
      aboutLink: "サイトについて"
    },
    en: {
      siteTitle: "What's Your No.1?",
      homeLink: "Home",
      postLink: "Post",
      rankingLink: "Ranking",
      mypageLink: "My Page",

      signupTitle: "Sign Up",
      nicknameLabel: "Nickname",
      signupEmailLabel: "Email Address",
      signupPasswordLabel: "Password",
      signupButton: "Sign Up",

      loginLinkText: "Already have an account?",
      goToLoginLink: "Login here",

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
  document.getElementById('signupTitle').textContent = c.signupTitle;
  document.getElementById('nicknameLabel').textContent = c.nicknameLabel;
  document.getElementById('signupEmailLabel').textContent = c.signupEmailLabel;
  document.getElementById('signupPasswordLabel').textContent = c.signupPasswordLabel;
  document.getElementById('signupButton').textContent = c.signupButton;

  document.getElementById('loginLinkText').textContent = c.loginLinkText + " ";
  const loginLink = document.getElementById('goToLoginLink');
  loginLink.textContent = c.goToLoginLink;

  // ▼ フッター
  document.getElementById('contactLink').textContent = c.contactLink;
  document.getElementById('aboutLink').textContent = c.aboutLink;
}
