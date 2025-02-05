document.addEventListener('DOMContentLoaded', () => {
  const loginForm = document.getElementById('loginForm');

  loginForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const email = document.getElementById('emailInput').value.trim();
    const password = document.getElementById('passwordInput').value.trim();

    // ▼ モック (バックエンドと連携していない)
    if (!email || !password) {
      alert("メールアドレスとパスワードを入力してください");
      return;
    }

    // TODO: ここで fetch('/api/login', ...) でバックエンドに送信する実装を後日行う
    // 今はモックでログイン成功とみなす
    alert(`ログイン成功(モック)\nメール: ${email}\nパスワード: ${password}`);

    // 仮トークンをローカルストレージに保存してログイン状態を擬似
    localStorage.setItem('authToken', 'dummy_token_12345');

    // ログイン後、トップ or マイページへ遷移
    window.location.href = 'mypage.html';
  });
});
