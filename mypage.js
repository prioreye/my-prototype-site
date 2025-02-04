document.addEventListener("DOMContentLoaded", function() {
  // 初期の言語を反映
  const savedLang = localStorage.getItem("selectedLanguage") || "ja";
  applyLanguageForMypage(savedLang);

  // ヘッダーの言語セレクター
  document.getElementById("headerLanguageSelect").addEventListener("change", function() {
    const selectedLang = this.value;
    localStorage.setItem("selectedLanguage", selectedLang);
    applyLanguageForMypage(selectedLang);
  });

  // 仮: パスワード更新ボタンなど
  document.getElementById("btnUpdatePassword").addEventListener("click", function() {
    alert("パスワード更新UI(モック)");
  });

  // 仮: ソートUI
  document.getElementById("sortSelect").addEventListener("change", function() {
    alert("投稿履歴の並び替えはモックです");
  });

  // 仮: プラン更新/解約
  document.getElementById("btnUpdatePlan").addEventListener("click", function() {
    alert("サブスク更新UI(モック)");
  });
  document.getElementById("btnCancelPlan").addEventListener("click", function() {
    alert("サブスク解約UI(モック)");
  });
});

// 多言語対応
function applyLanguageForMypage(language) {
  const translations = {
    ja: {
      siteTitle: "What's Your No.1?",
      homeLink: "Home",
      postLink: "Post",
      rankingLink: "Ranking",
      mypageLink: "My Page",

      mypageTitle: "マイページ",
      userInfoTitle: "ユーザー情報",
      userNameLabel: "ユーザー名:",
      emailLabel: "メールアドレス:",
      passwordLabel: "パスワード再設定:",
      btnUpdatePassword: "更新",

      postHistoryTitle: "投稿履歴",
      sortLabel: "並び替え:",
      dateDesc: "投稿日時 新しい順",
      dateAsc: "投稿日時 古い順",
      btnEdit: "編集",
      btnDelete: "削除",

      favoriteTitle: "お気に入り店舗",
      subscriptionTitle: "サブスク状況",
      subscriptionStatus: "1週間プラン (期限: 2023/01/01 ～ 2023/01/08)",
      btnUpdatePlan: "プラン更新",
      btnCancelPlan: "解約",

      notificationTitle: "お知らせ",

      contactLink: "お問い合わせ",
      aboutLink: "サイトについて",
    },
    en: {
      siteTitle: "What's Your No.1?",
      homeLink: "Home",
      postLink: "Post",
      rankingLink: "Ranking",
      mypageLink: "My Page",

      mypageTitle: "My Page",
      userInfoTitle: "User Info",
      userNameLabel: "User Name:",
      emailLabel: "Email Address:",
      passwordLabel: "Reset Password:",
      btnUpdatePassword: "Update",

      postHistoryTitle: "Post History",
      sortLabel: "Sort by:",
      dateDesc: "Date Descending",
      dateAsc: "Date Ascending",
      btnEdit: "Edit",
      btnDelete: "Delete",

      favoriteTitle: "Favorite Places",
      subscriptionTitle: "Subscription Status",
      subscriptionStatus: "1-week Plan (expires: 2023/01/01 - 2023/01/08)",
      btnUpdatePlan: "Update Plan",
      btnCancelPlan: "Cancel Plan",

      notificationTitle: "Notifications",

      contactLink: "Contact Us",
      aboutLink: "About Us",
    }
  };

  const t = translations[language] || translations.ja;

  // ヘッダー
  document.querySelector(".site-title").textContent = t.siteTitle;
  document.getElementById("homeLink").textContent = t.homeLink;
  document.getElementById("postLink").textContent = t.postLink;
  document.getElementById("rankingLink").textContent = t.rankingLink;
  document.getElementById("mypageLink").textContent = t.mypageLink;

  // マイページタイトル
  document.getElementById("mypageTitle").textContent = t.mypageTitle;

  // 1) ユーザー情報
  document.getElementById("userInfoTitle").textContent = t.userInfoTitle;
  document.getElementById("userNameLabel").textContent = t.userNameLabel;
  document.getElementById("emailLabel").textContent = t.emailLabel;
  document.getElementById("passwordLabel").textContent = t.passwordLabel;
  document.getElementById("btnUpdatePassword").textContent = t.btnUpdatePassword;

  // 2) 投稿履歴
  document.getElementById("postHistoryTitle").textContent = t.postHistoryTitle;
  document.getElementById("sortLabel").textContent = t.sortLabel;
  document.getElementById("sortSelect").options[0].text = t.dateDesc;
  document.getElementById("sortSelect").options[1].text = t.dateAsc;

  // UI上の "編集" "削除" ボタンを動的に変える場合:
  const editButtons = document.querySelectorAll(".btn-edit");
  editButtons.forEach(btn => btn.textContent = t.btnEdit);
  const deleteButtons = document.querySelectorAll(".btn-delete");
  deleteButtons.forEach(btn => btn.textContent = t.btnDelete);

  // 3) お気に入り
  document.getElementById("favoriteTitle").textContent = t.favoriteTitle;

  // 4) サブスク
  document.getElementById("subscriptionTitle").textContent = t.subscriptionTitle;
  document.getElementById("subscriptionStatus").textContent = t.subscriptionStatus;
  document.getElementById("btnUpdatePlan").textContent = t.btnUpdatePlan;
  document.getElementById("btnCancelPlan").textContent = t.btnCancelPlan;

  // 5) お知らせ
  document.getElementById("notificationTitle").textContent = t.notificationTitle;

  // フッター
  document.getElementById("contactLink").textContent = t.contactLink;
  document.getElementById("aboutLink").textContent = t.aboutLink;
}
