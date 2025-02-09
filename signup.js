document.addEventListener('DOMContentLoaded', () => {
  // ▼ 多言語初期化
  const savedLang = localStorage.getItem('selectedLanguage') || 'ja';
  applyLanguageSignup(savedLang);

  document.getElementById('headerLanguageSelect').addEventListener('change', function() {
    const selLang = this.value;
    localStorage.setItem('selectedLanguage', selLang);
    applyLanguageSignup(selLang);
  });

  // ▼ フォーム送信
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

    try {
      // サーバー側 /api/signup にリクエストを送信
      const response = await fetch('/api/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ nickname, email, password }),
      });

      if (!response.ok) {
        // HTTPステータスが 200-299 以外の場合はエラー扱い
        const errorData = await response.json().catch(() => ({}));
        alert(`エラー: ${errorData.error || 'Signup failed'}`);
        return;
      }

      // 成功時のレスポンス
      const data = await response.json();
      // 例: data = { message: 'Signup successful', token: '...' } (サーバー実装に合わせて)

      alert(`新規登録完了!\nユーザー名: ${nickname}\nメール: ${email}`);

      // 例: サーバーがトークンを返していればセット
      if (data.token) {
        localStorage.setItem('authToken', data.token);
      } else {
        // 仮トークン
        localStorage.setItem('authToken', 'dummy_token_12345');
      }

      // マイページへ遷移
      window.location.href = 'mypage.html';

    } catch (err) {
      console.error(err);
      alert('サーバーエラーが発生しました。');
    }
  });
});

function applyLanguageSignup(lang) {
  const translations = {
    ja: {
      siteTitle: "What's Your No.1?",
      homeLink: "Home",
      postLink: "Post",
      rankingLink: "Ranking",
      mypageLink: "My Page",

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

  const c = translations[lang] || translations.ja;

  // ヘッダー
  document.querySelector('.site-title').textContent = c.siteTitle;
  document.getElementById('homeLink').textContent = c.homeLink;
  document.getElementById('postLink').textContent = c.postLink;
  document.getElementById('rankingLink').textContent = c.rankingLink;
  document.getElementById('mypageLink').textContent = c.mypageLink;

  // メイン
  document.getElementById('signupTitle').textContent = c.signupTitle;
  document.getElementById('nicknameLabel').textContent = c.nicknameLabel;
  document.getElementById('signupEmailLabel').textContent = c.signupEmailLabel;
  document.getElementById('signupPasswordLabel').textContent = c.signupPasswordLabel;
  document.getElementById('signupButton').textContent = c.signupButton;

  // 分割した部分
  document.getElementById('loginLinkText').textContent = c.loginLinkText;
  document.getElementById('goToLoginLink').textContent = c.goToLoginLink;

  // フッター
  document.getElementById('contactLink').textContent = c.contactLink;
  document.getElementById('aboutLink').textContent = c.aboutLink;
}
