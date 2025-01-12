// 言語選択ポップアップ制御
document.addEventListener("DOMContentLoaded", function () {
  const modal = document.getElementById("languageModal");

  // ローカルストレージで言語を確認
  const savedLanguage = localStorage.getItem("selectedLanguage");
  if (!savedLanguage) {
      modal.style.display = "flex"; // ポップアップ表示
  } else {
      applyLanguage(savedLanguage);
  }

  // 言語ボタンのクリックイベント
  document.querySelectorAll(".btn-language").forEach((button) => {
      button.addEventListener("click", function () {
          const selectedLanguage = button.getAttribute("data-lang");
          localStorage.setItem("selectedLanguage", selectedLanguage); // 言語を保存
          modal.style.display = "none"; // ポップアップ非表示
          applyLanguage(selectedLanguage);
      });
  });
});

// 言語を反映する関数
function applyLanguage(language) {
  const translations = {
      ja: {
          siteTitle: "サイトタイトル",
          areaSelection: "エリアを選択してください",
      },
      en: {
          siteTitle: "Site Title",
          areaSelection: "Select an Area",
      },
  };

  // 翻訳データを反映
  const content = translations[language];
  document.querySelector(".site-title").textContent = content.siteTitle;
  document.querySelector(".area-selection h2").textContent = content.areaSelection;
}
