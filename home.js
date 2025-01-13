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

  // エリア選択ボタンのイベント
  document.getElementById("goToArea").addEventListener("click", function () {
      const selectedArea = document.getElementById("areaSelect").value;
      if (selectedArea) {
          alert(`Selected Area: ${selectedArea}`); // デバッグ用アラート（実際にはページ遷移処理を記述）
      } else {
          alert("エリアを選択してください！");
      }
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
          areaSelectionTitle: "旅行先を選ぼう！",
          areaLabel: "エリアを選択：",
          tokyo: "東京",
          osaka: "大阪",
          kyoto: "京都",
          hokkaido: "北海道",
          fukuoka: "福岡",
          contact: "お問い合わせ",
          about: "サイトについて",
          goToArea: "決定",
      },
      en: {
          siteTitle: "Site Title",
          homeLink: "Home",
          postLink: "Post",
          rankingLink: "Ranking",
          mypageLink: "My Page",
          areaSelectionTitle: "Choose Your Destination!",
          areaLabel: "Select an Area:",
          tokyo: "Tokyo",
          osaka: "Osaka",
          kyoto: "Kyoto",
          hokkaido: "Hokkaido",
          fukuoka: "Fukuoka",
          contact: "Contact Us",
          about: "About Us",
          goToArea: "Submit",
      },
  };

  const content = translations[language];

  document.querySelector(".site-title").textContent = content.siteTitle;
  document.getElementById("homeLink").textContent = content.homeLink;
  document.getElementById("postLink").textContent = content.postLink;
  document.getElementById("rankingLink").textContent = content.rankingLink;
  document.getElementById("mypageLink").textContent = content.mypageLink;
  document.getElementById("areaSelectionTitle").textContent = content.areaSelectionTitle;
  document.getElementById("areaLabel").textContent = content.areaLabel;
  document.getElementById("tokyoOption").textContent = content.tokyo;
  document.getElementById("osakaOption").textContent = content.osaka;
  document.getElementById("kyotoOption").textContent = content.kyoto;
  document.getElementById("hokkaidoOption").textContent = content.hokkaido;
  document.getElementById("fukuokaOption").textContent = content.fukuoka;
  document.getElementById("goToArea").textContent = content.goToArea;
  document.getElementById("contactLink").textContent = content.contact;
  document.getElementById("aboutLink").textContent = content.about;
}
