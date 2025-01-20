/*************************************************************
 * 1) 日本語データ (gourmetData_ja) + 英語データ (gourmetData_en)
 *   エリア → 地域 → 詳細エリア → [名物グルメ1, 2, 3]
 *************************************************************/
 const gourmetData_ja = {
  tokyo: {
    "23区内": {
      "新宿": ["ラーメン", "焼肉", "寿司"],
      "渋谷": ["クレープ", "パフェ", "タピオカドリンク"],
      // ... 省略 ...
    },
    "23区外": {
      "立川": ["駅弁", "カレーライス", "焼き鳥"],
      // ... 省略 ...
    }
  },
  osaka: {
    // ...
  },
  kyoto: {
    // ...
  },
  hokkaido: {
    // ...
  },
  fukuoka: {
    // ...
  }
};

const gourmetData_en = {
  tokyo: {
    "Inside 23 Wards": {
      "Shinjuku": ["Ramen", "Yakiniku", "Sushi"],
      "Shibuya": ["Crepe", "Parfait", "Bubble Tea"],
      // ... 省略 ...
    },
    "Outside 23 Wards": {
      "Tachikawa": ["Ekiben", "Curry Rice", "Yakitori"],
      // ... 省略 ...
    }
  },
  // ...
};

/*************************************************************
 * 2) 多言語のフラグ
 *************************************************************/
let currentLanguage = "ja"; // デフォルト日本語

function getCurrentGourmetData() {
  return currentLanguage === "en" ? gourmetData_en : gourmetData_ja;
}

/*************************************************************
 * 3) イベントリスナー: エリア→地域→詳細エリア (名物グルメも可)
 *************************************************************/
document.addEventListener("DOMContentLoaded", function() {
  const areaSelect = document.getElementById("areaSelect");
  const regionSelect = document.getElementById("regionSelect");
  const subRegionSelect = document.getElementById("subRegionSelect");
  const detailAreaContainer = document.getElementById("detailAreaContainer");

  areaSelect.addEventListener("change", function() {
    const selectedArea = this.value;

    regionSelect.innerHTML = '<option value="" disabled selected>地域を選択...</option>';
    subRegionSelect.innerHTML = '<option value="" disabled selected>詳細エリアを選択...</option>';
    subRegionSelect.style.display = "none";

    const data = getCurrentGourmetData();
    if (selectedArea && data[selectedArea]) {
      const regions = data[selectedArea];
      for (const regionKey in regions) {
        const option = document.createElement("option");
        option.value = regionKey;
        option.textContent = regionKey;
        regionSelect.appendChild(option);
      }
      detailAreaContainer.style.display = "block";
    } else {
      detailAreaContainer.style.display = "none";
    }
  });

  regionSelect.addEventListener("change", function() {
    const selectedArea = areaSelect.value;
    const selectedRegion = this.value;

    subRegionSelect.innerHTML = '<option value="" disabled selected>詳細エリアを選択...</option>';
    subRegionSelect.style.display = "none";

    const data = getCurrentGourmetData();
    if (selectedArea && selectedRegion && data[selectedArea][selectedRegion]) {
      const subRegions = data[selectedArea][selectedRegion];
      for (const subRegionKey in subRegions) {
        const option = document.createElement("option");
        option.value = subRegionKey;
        option.textContent = subRegionKey;
        subRegionSelect.appendChild(option);
      }
      subRegionSelect.style.display = "block";
    } else {
      subRegionSelect.style.display = "none";
    }
  });

  document.getElementById("confirmAreaButton").addEventListener("click", function () {
    const mainArea = areaSelect.value;
    const region = regionSelect.value;
    const subRegion = subRegionSelect.value;
    if (mainArea && region && subRegion) {
      alert(`選択されたエリア:\n【エリア】${mainArea}\n【地域】${region}\n【詳細エリア】${subRegion}`);
    } else {
      alert("全ての項目を選択してください！");
    }
  });

  // ▼ ページロード時に言語を適用
  const savedLanguage = localStorage.getItem("selectedLanguage") || "ja";
  applyLanguage(savedLanguage);

  // ▼ ヘッダーの言語セレクト
  document.getElementById("headerLanguageSelect").addEventListener("change", function() {
    const selectedLanguage = this.value;
    localStorage.setItem("selectedLanguage", selectedLanguage);
    applyLanguage(selectedLanguage);
  });
});

/*************************************************************
 * 4) 多言語切り替え (home.html 用)
 *************************************************************/
function applyLanguage(language) {
  currentLanguage = language;

  const translations = {
    ja: {
      siteTitle: "サイトタイトル",
      homeLink: "ホーム",
      postLink: "投稿",
      rankingLink: "ランキング",
      mypageLink: "マイページ",

      areaSelectionTitle: "旅行先を選ぼう！",
      areaLabel: "エリアを選択:",
      areaPlaceholder: "エリアを選択...",
      regionLabel: "地域を選択:",
      subRegionLabel: "詳細エリアを選択:",
      confirmButton: "決定",
      reviewButton: "レビュー投稿ページはこちら",
      contactLink: "お問い合わせ",
      aboutLink: "サイトについて",

      tokyo: "東京",
      osaka: "大阪",
      kyoto: "京都",
      hokkaido: "北海道",
      fukuoka: "福岡",
    },
    en: {
      siteTitle: "Site Title",
      homeLink: "Home",
      postLink: "Post",
      rankingLink: "Ranking",
      mypageLink: "My Page",

      areaSelectionTitle: "Choose Your Destination!",
      areaLabel: "Select an Area:",
      areaPlaceholder: "Select an Area...",
      regionLabel: "Select a Region:",
      subRegionLabel: "Select a Sub-Region:",
      confirmButton: "Submit",
      reviewButton: "Go to Review Post Page",
      contactLink: "Contact Us",
      aboutLink: "About Us",

      tokyo: "Tokyo",
      osaka: "Osaka",
      kyoto: "Kyoto",
      hokkaido: "Hokkaido",
      fukuoka: "Fukuoka",
    }
  };

  const content = translations[language];
  if (!content) return;

  // ヘッダー
  document.querySelector(".site-title").textContent = content.siteTitle;
  document.getElementById("homeLink").querySelector("img").alt = content.homeLink + " Icon";
  document.getElementById("postLink").querySelector("img").alt = content.postLink + " Icon";
  document.getElementById("rankingLink").querySelector("img").alt = content.rankingLink + " Icon";
  document.getElementById("mypageLink").querySelector("img").alt = content.mypageLink + " Icon";

  // メイン文言
  document.getElementById("areaSelectionTitle").textContent = content.areaSelectionTitle;
  document.getElementById("areaLabel").textContent = content.areaLabel;
  document.getElementById("areaSelect").options[0].text = content.areaPlaceholder;
  document.getElementById("regionLabel").textContent = content.regionLabel;
  document.getElementById("subRegionLabel").textContent = content.subRegionLabel;
  document.getElementById("confirmAreaButton").textContent = content.confirmButton;

  // レビュー投稿リンク
  document.getElementById("reviewPostButton").textContent = content.reviewButton;

  // フッター
  document.getElementById("contactLink").textContent = content.contactLink;
  document.getElementById("aboutLink").textContent = content.aboutLink;

  // エリア名の翻訳 (東京, 大阪, 京都, 北海道, 福岡)
  const areaSelect = document.getElementById("areaSelect");
  if (areaSelect) {
    const areaOptions = areaSelect.options;
    const areaKeys = ["tokyo", "osaka", "kyoto", "hokkaido", "fukuoka"];
    for (let i = 1; i < areaOptions.length; i++) {
      const areaKey = areaKeys[i - 1];
      areaOptions[i].text = content[areaKey];
    }
  }
}
