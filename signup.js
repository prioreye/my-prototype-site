document.addEventListener('DOMContentLoaded', () => {
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

    // TODO: 将来 fetch('/api/signup', ...) でバックエンド登録
    alert(`新規登録完了(モック)\nユーザー名: ${nickname}\nメール: ${email}`);

    // モックではログイン状態にしてマイページへ遷移
    localStorage.setItem('authToken', 'dummy_token_12345');
    window.location.href = 'mypage.html';
  });
});
