// 言語選択ポップアップ制御
document.addEventListener("DOMContentLoaded", function () {
  const modal = document.getElementById("languageModal");
  const headerSelect = document.getElementById("headerLanguageSelect");

  // ローカルストレージで言語を確認
  const savedLanguage = localStorage.getItem("selectedLanguage");
  if (!savedLanguage) {
      modal.style.display = "flex"; // ポップアップ表示
  } else {
      applyLanguage(savedLanguage);
      headerSelect.value = savedLanguage; // ヘッダーのセレクターを更新
  }

  // 言語ポップアップのボタンイベント
  document.querySelectorAll(".btn-language").forEach((button) => {
      button.addEventListener("click", function () {
          const selectedLanguage = button.getAttribute("data-lang");
          localStorage.setItem("selectedLanguage", selectedLanguage); // 言語を保存
          modal.style.display = "none"; // ポップアップ非表示
          applyLanguage(selectedLanguage);
          headerSelect.value = selectedLanguage; // ヘッダーのセレクターを更新
      });
  });

  // ヘッダーの言語セレクターイベント
  headerSelect.addEventListener("change", function () {
      const selectedLanguage = headerSelect.value;
      localStorage.setItem("selectedLanguage", selectedLanguage); // 言語を保存
      applyLanguage(selectedLanguage);
  });
});

// 言語を反映する関数
function applyLanguage(language) {
  const translations = {
      ja: {
          siteTitle: "サイトタイトル",
          homeLink: "ホーム",
          postLink: "投稿",
          rankingLink: "ランキング",
          mypageLink: "マイページ",
          areaSelectionTitle: "エリアを選択してください",
          tokyo: "東京",
          osaka: "大阪",
          kyoto: "京都",
          hokkaido: "北海道",
          fukuoka: "福岡",
          contact: "お問い合わせ",
          about: "サイトについて",
      },
      en: {
          siteTitle: "Site Title",
          homeLink: "Home",
          postLink: "Post",
          rankingLink: "Ranking",
          mypageLink: "My Page",
          areaSelectionTitle: "Select an Area",
          tokyo: "Tokyo",
          osaka: "Osaka",
          kyoto: "Kyoto",
          hokkaido: "Hokkaido",
          fukuoka: "Fukuoka",
          contact: "Contact Us",
          about: "About Us",
      },
  };

  // 翻訳データを取得
  const content = translations[language];

  // ヘッダー
  document.querySelector(".site-title").textContent = content.siteTitle;
  document.getElementById("homeLink").textContent = content.homeLink;
  document.getElementById("postLink").textContent = content.postLink;
  document.getElementById("rankingLink").textContent = content.rankingLink;
  document.getElementById("mypageLink").textContent = content.mypageLink;

  // メイン
  document.getElementById("areaSelectionTitle").textContent = content.areaSelectionTitle;
  document.getElementById("tokyoButton").textContent = content.tokyo;
  document.getElementById("osakaButton").textContent = content.osaka;
  document.getElementById("kyotoButton").textContent = content.kyoto;
  document.getElementById("hokkaidoButton").textContent = content.hokkaido;
  document.getElementById("fukuokaButton").textContent = content.fukuoka;

  // フッター
  document.getElementById("contactLink").textContent = content.contact;
  document.getElementById("aboutLink").textContent = content.about;
}
