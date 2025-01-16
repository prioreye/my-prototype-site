// エリアデータ (5都市 + 3～4階層)
const areaDetails = {
  tokyo: {
    "23区内": {
      "中央エリア": ["新宿", "渋谷", "池袋", "原宿", "銀座", "六本木"],
      "下町エリア": ["浅草", "上野", "月島", "両国", "門前仲町"],
      "湾岸エリア": ["お台場", "豊洲"],
      "西エリア": ["中野", "荻窪", "高円寺", "吉祥寺"],
    },
    "23区外": {
      "多摩エリア": ["立川", "八王子", "三鷹", "国分寺"],
      "自然エリア": ["高尾山", "奥多摩"],
    },
  },
  osaka: {
    "市内エリア": {
      "中央エリア": ["梅田", "難波", "心斎橋", "道頓堀"],
      "西エリア": ["天王寺", "新世界", "西成"],
      "ベイエリア": ["大阪港", "ユニバーサルシティ"],
    },
    "市外エリア": {
      "北部": ["豊中", "箕面", "茨木"],
      "南部": ["堺", "岸和田"],
    },
  },
  kyoto: {
    "市内エリア": {
      "観光中心エリア": ["東山（清水寺・祇園）", "嵐山", "金閣寺エリア"],
      "中心地": ["河原町", "烏丸"],
    },
    "市外エリア": {
      "北部": ["貴船", "鞍馬", "大原"],
      "南部": ["宇治", "伏見"],
    },
  },
  hokkaido: {
    "札幌エリア": {
      "中心部": ["すすきの", "大通公園", "札幌駅周辺"],
      "自然エリア": ["円山", "藻岩山周辺"],
    },
    "函館エリア": {
      "観光地": ["函館山", "五稜郭", "元町エリア"],
      "湾岸": ["湯の川温泉", "函館港周辺"],
    },
    "小樽エリア": {
      "運河周辺": ["小樽運河", "寿司屋通り"],
      "郊外エリア": ["天狗山", "祝津"],
    },
  },
  fukuoka: {
    "福岡市内": {
      "中心部": ["天神", "中洲", "博多駅周辺"],
      "郊外": ["百道", "アイランドシティ", "福岡タワー周辺"],
    },
    "市外エリア": {
      "北部": ["北九州", "小倉", "門司港"],
      "南部": ["太宰府", "久留米"],
    },
  },
};

// ▼ 第1階層: 都市選択
document.getElementById("areaSelect").addEventListener("change", function () {
  const selectedCity = this.value;
  const detailContainer = document.getElementById("detailAreaContainer");

  // 2～4階層の各DOM
  const regionSelect = document.getElementById("regionSelect");
  const subRegionSelect = document.getElementById("subRegionSelect");
  const finalAreaSelect = document.getElementById("finalAreaSelect");

  const subRegionContainer = document.getElementById("subRegionContainer");
  const finalAreaContainer = document.getElementById("finalAreaContainer");

  // 初期化
  regionSelect.innerHTML = '<option value="" disabled selected>地域を選択...</option>';
  subRegionSelect.innerHTML = '<option value="" disabled selected>詳細エリアを選択...</option>';
  finalAreaSelect.innerHTML = '<option value="" disabled selected>最終エリアを選択...</option>';

  // 一旦コンテナごと非表示
  subRegionContainer.style.display = "none";
  finalAreaContainer.style.display = "none";

  if (selectedCity && areaDetails[selectedCity]) {
    const cityData = areaDetails[selectedCity]; 
    // "市内エリア": {...}, "市外エリア": {...} など

    // 第2階層にあたるキー（例: "市内エリア", "市外エリア"）をregionSelectに追加
    for (const region in cityData) {
      const option = document.createElement("option");
      option.value = region;
      option.textContent = region;
      regionSelect.appendChild(option);
    }
    detailContainer.style.display = "block";
  } else {
    detailContainer.style.display = "none";
  }
});

// ▼ 第2階層: 地域選択
document.getElementById("regionSelect").addEventListener("change", function () {
  const selectedCity = document.getElementById("areaSelect").value;
  const selectedRegion = this.value;

  const subRegionContainer = document.getElementById("subRegionContainer");
  const finalAreaContainer = document.getElementById("finalAreaContainer");

  const subRegionSelect = document.getElementById("subRegionSelect");
  const finalAreaSelect = document.getElementById("finalAreaSelect");

  // 初期化
  subRegionSelect.innerHTML = '<option value="" disabled selected>詳細エリアを選択...</option>';
  finalAreaSelect.innerHTML = '<option value="" disabled selected>最終エリアを選択...</option>';

  subRegionContainer.style.display = "none";
  finalAreaContainer.style.display = "none";

  if (selectedCity && selectedRegion && areaDetails[selectedCity][selectedRegion]) {
    const regionData = areaDetails[selectedCity][selectedRegion];
    // 例: { "観光中心エリア": [...], "中心地": [...] }

    // subRegionSelectにキーを追加
    for (const subRegionKey in regionData) {
      const option = document.createElement("option");
      option.value = subRegionKey;
      option.textContent = subRegionKey;
      subRegionSelect.appendChild(option);
    }

    subRegionContainer.style.display = "block";
  }
});

// ▼ 第3階層: 詳細エリア選択
document.getElementById("subRegionSelect").addEventListener("change", function () {
  const selectedCity = document.getElementById("areaSelect").value;
  const selectedRegion = document.getElementById("regionSelect").value;
  const selectedSubRegion = this.value;

  const finalAreaContainer = document.getElementById("finalAreaContainer");
  const finalAreaSelect = document.getElementById("finalAreaSelect");

  // 初期化
  finalAreaSelect.innerHTML = '<option value="" disabled selected>最終エリアを選択...</option>';
  finalAreaContainer.style.display = "none";

  if (
    selectedCity &&
    selectedRegion &&
    selectedSubRegion &&
    areaDetails[selectedCity][selectedRegion][selectedSubRegion]
  ) {
    // 例: ["東山（清水寺・祇園）", "嵐山", ...]
    const finalAreas = areaDetails[selectedCity][selectedRegion][selectedSubRegion];

    finalAreas.forEach((area) => {
      const option = document.createElement("option");
      option.value = area;
      option.textContent = area;
      finalAreaSelect.appendChild(option);
    });

    finalAreaContainer.style.display = "block";
  }
});

// ▼ 決定ボタン
document.getElementById("confirmAreaButton").addEventListener("click", function () {
  const mainArea = document.getElementById("areaSelect").value;
  const region = document.getElementById("regionSelect").value;
  const subRegion = document.getElementById("subRegionSelect").value;
  const finalArea = document.getElementById("finalAreaSelect").value;

  if (mainArea && region && subRegion && finalArea) {
    alert(`選択されたエリア:\n【都市】${mainArea}\n【地域】${region}\n【詳細】${subRegion}\n【最終エリア】${finalArea}`);
  } else {
    alert("全てのエリアを選択してください！");
  }
});

// --------------------------------------------------
// 多言語切り替え対応
// --------------------------------------------------
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
      areaPlaceholder: "エリアを選択...",

      regionLabel: "地域を選択：",
      regionPlaceholder: "地域を選択...",

      subRegionLabel: "詳細エリアを選択：",
      subRegionPlaceholder: "詳細エリアを選択...",

      finalAreaLabel: "最終エリアを選択：",
      finalAreaPlaceholder: "最終エリアを選択...",

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

      finalAreaLabel: "Select Final Area:",
      finalAreaPlaceholder: "Select Final Area...",

      confirmButton: "Submit",
      reviewButton: "Go to Review Post Page",
      contactLink: "Contact Us",
      aboutLink: "About Us",

      tokyo: "Tokyo",
      osaka: "Osaka",
      kyoto: "Kyoto",
      hokkaido: "Hokkaido",
      fukuoka: "Fukuoka",
    },
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

    finalAreaLabel: document.getElementById("finalAreaLabel"),
    finalAreaSelect: document.getElementById("finalAreaSelect"),

    confirmButton: document.getElementById("confirmAreaButton"),
    reviewButton: document.getElementById("reviewPostButton"),
    contactLink: document.getElementById("contactLink"),
    aboutLink: document.getElementById("aboutLink"),
  };

  // 各要素に翻訳を適用
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

  if (elements.finalAreaLabel) elements.finalAreaLabel.textContent = content.finalAreaLabel;
  if (elements.finalAreaSelect) elements.finalAreaSelect.options[0].text = content.finalAreaPlaceholder;

  if (elements.confirmButton) elements.confirmButton.textContent = content.confirmButton;
  if (elements.reviewButton) elements.reviewButton.textContent = content.reviewButton;
  if (elements.contactLink) elements.contactLink.textContent = content.contactLink;
  if (elements.aboutLink) elements.aboutLink.textContent = content.aboutLink;

  // 都市名(東京, 大阪, ...)の翻訳
  const areaOptions = elements.areaSelect?.options;
  if (areaOptions) {
    // 先頭optionは placeholder なので、1からスタート
    const areaKeys = ["tokyo", "osaka", "kyoto", "hokkaido", "fukuoka"];
    for (let i = 1; i < areaOptions.length; i++) {
      const areaKey = areaKeys[i - 1];
      areaOptions[i].text = content[areaKey];
    }
  }
}

// ページロード時に言語を適用
document.addEventListener("DOMContentLoaded", function () {
  const savedLanguage = localStorage.getItem("selectedLanguage") || "ja";
  applyLanguage(savedLanguage);

  document.getElementById("headerLanguageSelect").addEventListener("change", function () {
    const selectedLanguage = this.value;
    localStorage.setItem("selectedLanguage", selectedLanguage);
    applyLanguage(selectedLanguage);
  });
});
