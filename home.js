/*************************************************************
 * 1) 日本語データ (gourmetData_ja)
 *************************************************************/
 const gourmetData_ja = {
  tokyo: {
    "23区内": {
      "新宿": ["ラーメン", "焼肉", "寿司"],
      "渋谷": ["クレープ", "パフェ", "タピオカドリンク"],
      "池袋": ["中華料理", "餃子", "ラーメン"],
      "原宿": ["クレープ", "カラフルスイーツ", "タピオカドリンク"],
      "銀座": ["高級寿司", "天ぷら", "和菓子"],
      "六本木": ["洋食", "ステーキ", "バーガー"],
      "浅草": ["天丼", "もんじゃ焼き", "雷おこし"],
      "上野": ["丼物", "和菓子", "焼き鳥"],
      "月島": ["もんじゃ焼き", "お好み焼き", "居酒屋メニュー"],
      "両国": ["ちゃんこ鍋", "丼物", "焼き鳥"],
      "門前仲町": ["深川めし", "焼き鳥", "日本酒"],
      "お台場": ["海鮮丼", "ジェラート", "フィッシュ＆チップス"],
      "豊洲": ["海鮮丼", "寿司", "丼物"],
      "中野": ["焼き鳥", "中華そば", "カレーライス"],
      "荻窪": ["中華そば", "そば", "焼き鳥"],
      "高円寺": ["焼き鳥", "おでん", "カレーライス"],
      "吉祥寺": ["ハンバーガー", "洋菓子", "スイーツ"],
    },
    "23区外": {
      "立川": ["駅弁", "カレーライス", "焼き鳥"],
      "八王子": ["うどん", "ラーメン", "駅弁"],
      "三鷹": ["洋菓子", "パスタ", "ステーキ"],
      "国分寺": ["蕎麦", "うどん", "天ぷら"],
      "高尾山": ["山菜料理", "団子", "天ぷら"],
      "奥多摩": ["川魚料理", "山菜料理", "蕎麦"],
    }
  },
  // ... (osaka, kyoto, hokkaido, fukuoka もそのまま)
};

const gourmetData_en = {
  // ... (省略: 前回の英語版データをそのまま)
};

/*************************************************************
 * 2) 言語切り替えによって、上記2種類のデータを使い分け
 *************************************************************/
let currentLanguage = "ja"; // デフォルト日本語

function getCurrentGourmetData() {
  return currentLanguage === "en" ? gourmetData_en : gourmetData_ja;
}

/*************************************************************
 * 3) イベントリスナー: エリア→地域→詳細エリア→名物グルメ
 *************************************************************/
document.getElementById("areaSelect").addEventListener("change", function () {
  const selectedArea = this.value;
  const detailContainer = document.getElementById("detailAreaContainer");

  const regionContainer = document.getElementById("regionContainer");
  const subRegionContainer = document.getElementById("subRegionContainer");
  const gourmetContainer = document.getElementById("gourmetContainer");

  const regionSelect = document.getElementById("regionSelect");
  const subRegionSelect = document.getElementById("subRegionSelect");
  const gourmetSelect = document.getElementById("gourmetSelect");

  // 初期化
  regionContainer.style.display = "none";
  subRegionContainer.style.display = "none";
  gourmetContainer.style.display = "none";

  regionSelect.innerHTML = '<option value="" disabled selected>地域を選択...</option>';
  subRegionSelect.innerHTML = '<option value="" disabled selected>詳細エリアを選択...</option>';
  gourmetSelect.innerHTML = '<option value="" disabled selected>名物グルメを選択...</option>';

  const data = getCurrentGourmetData();
  if (selectedArea && data[selectedArea]) {
    const regionData = data[selectedArea];
    for (const regionKey in regionData) {
      const option = document.createElement("option");
      option.value = regionKey;
      option.textContent = regionKey;
      regionSelect.appendChild(option);
    }
    detailContainer.style.display = "block";
    regionContainer.style.display = "block";
  } else {
    detailContainer.style.display = "none";
  }
});

document.getElementById("regionSelect").addEventListener("change", function () {
  const selectedArea = document.getElementById("areaSelect").value;
  const selectedRegion = this.value;

  const subRegionContainer = document.getElementById("subRegionContainer");
  const gourmetContainer = document.getElementById("gourmetContainer");
  const subRegionSelect = document.getElementById("subRegionSelect");
  const gourmetSelect = document.getElementById("gourmetSelect");

  // 初期化
  subRegionContainer.style.display = "none";
  gourmetContainer.style.display = "none";
  subRegionSelect.innerHTML = '<option value="" disabled selected>詳細エリアを選択...</option>';
  gourmetSelect.innerHTML = '<option value="" disabled selected>名物グルメを選択...</option>';

  const data = getCurrentGourmetData();
  if (selectedArea && selectedRegion && data[selectedArea][selectedRegion]) {
    const subRegionData = data[selectedArea][selectedRegion];
    for (const subRegionKey in subRegionData) {
      const option = document.createElement("option");
      option.value = subRegionKey;
      option.textContent = subRegionKey;
      subRegionSelect.appendChild(option);
    }
    subRegionContainer.style.display = "block";
  }
});

document.getElementById("subRegionSelect").addEventListener("change", function () {
  const selectedArea = document.getElementById("areaSelect").value;
  const selectedRegion = document.getElementById("regionSelect").value;
  const selectedSubRegion = this.value;

  const gourmetContainer = document.getElementById("gourmetContainer");
  const gourmetSelect = document.getElementById("gourmetSelect");

  gourmetContainer.style.display = "none";
  gourmetSelect.innerHTML = '<option value="" disabled selected>名物グルメを選択...</option>';

  const data = getCurrentGourmetData();
  if (
    selectedArea &&
    selectedRegion &&
    selectedSubRegion &&
    data[selectedArea][selectedRegion][selectedSubRegion]
  ) {
    const gourmetList = data[selectedArea][selectedRegion][selectedSubRegion];
    gourmetList.forEach((item) => {
      const option = document.createElement("option");
      option.value = item;
      option.textContent = item;
      gourmetSelect.appendChild(option);
    });
    gourmetContainer.style.display = "block";
  }
});

// 決定ボタン
document.getElementById("confirmAreaButton").addEventListener("click", function () {
  const mainArea = document.getElementById("areaSelect").value;
  const region = document.getElementById("regionSelect").value;
  const subRegion = document.getElementById("subRegionSelect").value;
  const gourmet = document.getElementById("gourmetSelect").value;

  if (mainArea && region && subRegion && gourmet) {
    alert(`選択されたエリア:
【エリア】${mainArea}
【地域】${region}
【詳細エリア】${subRegion}
【名物グルメ】${gourmet}`);
  } else {
    alert("全ての項目を選択してください！");
  }
});

/*************************************************************
 * 4) 多言語切り替え
 *************************************************************/
function applyLanguage(language) {
  currentLanguage = language; // 現在の言語を更新

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
      regionPlaceholder: "地域を選択...",

      subRegionLabel: "詳細エリアを選択:",
      subRegionPlaceholder: "詳細エリアを選択...",

      gourmetLabel: "名物グルメを選択:",
      gourmetPlaceholder: "名物グルメを選択...",

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
      regionPlaceholder: "Select a Region...",

      subRegionLabel: "Select a Sub-Region:",
      subRegionPlaceholder: "Select a Sub-Region...",

      gourmetLabel: "Select a Gourmet:",
      gourmetPlaceholder: "Select a Gourmet...",

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
  if (!content) {
    console.error(`Unsupported language: ${language}`);
    return;
  }

  // 翻訳対象要素
  const elements = {
    siteTitle: document.querySelector(".site-title"),
    homeLink: document.getElementById("homeLink"),
    postLink: document.getElementById("postLink"),
    rankingLink: document.getElementById("rankingLink"),
    mypageLink: document.getElementById("mypageLink"),

    areaSelectionTitle: document.getElementById("areaSelectionTitle"),
    areaLabel: document.getElementById("areaLabel"),
    areaSelect: document.getElementById("areaSelect"),

    regionLabel: document.getElementById("regionLabel"),
    regionSelect: document.getElementById("regionSelect"),

    subRegionLabel: document.getElementById("subRegionLabel"),
    subRegionSelect: document.getElementById("subRegionSelect"),

    gourmetLabel: document.getElementById("gourmetLabel"),
    gourmetSelect: document.getElementById("gourmetSelect"),

    confirmButton: document.getElementById("confirmAreaButton"),
    reviewButton: document.getElementById("reviewPostButton"),
    contactLink: document.getElementById("contactLink"),
    aboutLink: document.getElementById("aboutLink"),
  };

  // ラベルやボタン類のテキスト切り替え
  if (elements.siteTitle) elements.siteTitle.textContent = content.siteTitle;
  if (elements.homeLink) elements.homeLink.textContent = content.homeLink;
  if (elements.postLink) elements.postLink.textContent = content.postLink;
  if (elements.rankingLink) elements.rankingLink.textContent = content.rankingLink;
  if (elements.mypageLink) elements.mypageLink.textContent = content.mypageLink;

  if (elements.areaSelectionTitle) elements.areaSelectionTitle.textContent = content.areaSelectionTitle;
  if (elements.areaLabel) elements.areaLabel.textContent = content.areaLabel;
  if (elements.areaSelect) elements.areaSelect.options[0].text = content.areaPlaceholder;

  if (elements.regionLabel) elements.regionLabel.textContent = content.regionLabel;
  if (elements.regionSelect) elements.regionSelect.options[0].text = content.regionPlaceholder;

  if (elements.subRegionLabel) elements.subRegionLabel.textContent = content.subRegionLabel;
  if (elements.subRegionSelect) elements.subRegionSelect.options[0].text = content.subRegionPlaceholder;

  if (elements.gourmetLabel) elements.gourmetLabel.textContent = content.gourmetLabel;
  if (elements.gourmetSelect) elements.gourmetSelect.options[0].text = content.gourmetPlaceholder;

  if (elements.confirmButton) elements.confirmButton.textContent = content.confirmButton;
  if (elements.reviewButton) elements.reviewButton.textContent = content.reviewButton;
  if (elements.contactLink) elements.contactLink.textContent = content.contactLink;
  if (elements.aboutLink) elements.aboutLink.textContent = content.aboutLink;

  // エリア名(東京, 大阪, ...)の切り替え
  const areaOptions = elements.areaSelect?.options;
  if (areaOptions) {
    const areaKeys = ["tokyo", "osaka", "kyoto", "hokkaido", "fukuoka"];
    for (let i = 1; i < areaOptions.length; i++) {
      const areaKey = areaKeys[i - 1];
      areaOptions[i].text = content[areaKey];
    }
  }
}

// ページロード時の初期化
document.addEventListener("DOMContentLoaded", function () {
  const savedLanguage = localStorage.getItem("selectedLanguage") || "ja";
  applyLanguage(savedLanguage);

  document.getElementById("headerLanguageSelect").addEventListener("change", function () {
    const selectedLanguage = this.value;
    localStorage.setItem("selectedLanguage", selectedLanguage);
    applyLanguage(selectedLanguage);
  });
});
