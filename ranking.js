/****************************************************************
 * 1) 日本語データ & 英語データ
 ****************************************************************/
 const rankingData_ja = {
  tokyo: {
    "23区内": {
      "新宿": ["ラーメン","焼肉","寿司"],
      "渋谷": ["クレープ","パフェ","タピオカドリンク"],
      // ... 省略せず必要な全データをここに ...
    },
    "23区外": {
      "立川": ["駅弁","カレーライス","焼き鳥"],
      // ... 省略せず全データ ...
    }
  },
  osaka: {
    "市内エリア": {
      "梅田": ["たこ焼き","お好み焼き","串カツ"],
      // ...
    }
  },
  kyoto: {
    "市内エリア": {
      "東山": ["湯豆腐","京漬物","八ツ橋"],
      // ...
    },
    "市外エリア": {
      "貴船": ["川魚料理","山菜料理","湯豆腐"],
      // ...
    }
  },
  hokkaido: {
    "札幌": {
      "札幌": ["ジンギスカン","海鮮丼","ラーメン"]
    },
    // ...
  },
  fukuoka: {
    "市内エリア": {
      "天神": ["豚骨ラーメン","明太子","水炊き"],
      // ...
    },
    "市外エリア": {
      "北九州": ["焼きカレー（門司港）","皿うどん","ふぐ料理"],
      // ...
    }
  }
};

const rankingData_en = {
  tokyo: {
    "Within 23 Wards": {
      "Shinjuku": ["Ramen","Yakiniku","Sushi"],
      "Shibuya": ["Crepes","Parfait","Tapioca Drinks"],
      // ... 全データ ...
    },
    "Outside 23 Wards": {
      "Tachikawa": ["Ekiben (station bento)","Curry Rice","Yakitori"],
      // ...
    }
  },
  osaka: {
    "City Area": {
      "Umeda": ["Takoyaki","Okonomiyaki","Kushi‐katsu"],
      // ...
    }
  },
  // ...
};

/****************************************************************
 * 2) 言語フラグ & データ取得
 ****************************************************************/
let currentRankingLang = "ja";

function getRankingData() {
  return currentRankingLang === "en" ? rankingData_en : rankingData_ja;
}

/****************************************************************
 * 3) DOMContentLoaded
 ****************************************************************/
document.addEventListener("DOMContentLoaded", function() {
  // 初期化
  const savedLang = localStorage.getItem("selectedLanguage") || "ja";
  applyRankingLanguage(savedLang);

  document.getElementById("headerLanguageSelect").addEventListener("change", function() {
    const selLang = this.value;
    localStorage.setItem("selectedLanguage", selLang);
    applyRankingLanguage(selLang);
  });

  // 4段階選択
  const areaSelect = document.getElementById("rankingAreaSelect");
  const regionContainer = document.getElementById("rankingRegionContainer");
  const regionSelect = document.getElementById("rankingRegionSelect");
  const subRegionContainer = document.getElementById("rankingSubRegionContainer");
  const subRegionSelect = document.getElementById("rankingSubRegionSelect");
  const gourmetContainer = document.getElementById("rankingGourmetContainer");
  const gourmetSelect = document.getElementById("rankingGourmetSelect");

  // ▼ 第1階層: エリア
  areaSelect.addEventListener("change", function() {
    regionContainer.style.display = "none";
    subRegionContainer.style.display = "none";
    gourmetContainer.style.display = "none";

    regionSelect.innerHTML = '<option value="" disabled selected>選択してください</option>';
    subRegionSelect.innerHTML = '<option value="" disabled selected>選択してください</option>';
    gourmetSelect.innerHTML = '<option value="" disabled selected>名物グルメを選択...</option>';

    const data = getRankingData();
    const selectedArea = this.value;
    if (selectedArea && data[selectedArea]) {
      const regionData = data[selectedArea];
      for (const regionKey in regionData) {
        const option = document.createElement("option");
        option.value = regionKey;
        option.textContent = regionKey;
        regionSelect.appendChild(option);
      }
      regionContainer.style.display = "block";
    }
  });

  // ▼ 第2階層: 地域
  regionSelect.addEventListener("change", function() {
    subRegionContainer.style.display = "none";
    gourmetContainer.style.display = "none";

    subRegionSelect.innerHTML = '<option value="" disabled selected>選択してください</option>';
    gourmetSelect.innerHTML = '<option value="" disabled selected>名物グルメを選択...</option>';

    const data = getRankingData();
    const areaVal = areaSelect.value;
    const regionVal = this.value;
    if (areaVal && regionVal && data[areaVal][regionVal]) {
      const subRegionData = data[areaVal][regionVal];
      for (const subRegionKey in subRegionData) {
        const option = document.createElement("option");
        option.value = subRegionKey;
        option.textContent = subRegionKey;
        subRegionSelect.appendChild(option);
      }
      subRegionContainer.style.display = "block";
    }
  });

  // ▼ 第3階層: 詳細エリア
  subRegionSelect.addEventListener("change", function() {
    gourmetContainer.style.display = "none";
    gourmetSelect.innerHTML = '<option value="" disabled selected>名物グルメを選択...</option>';

    const data = getRankingData();
    const areaVal = areaSelect.value;
    const regionVal = regionSelect.value;
    const subRegionVal = this.value;
    if (areaVal && regionVal && subRegionVal && data[areaVal][regionVal][subRegionVal]) {
      const gourmetList = data[areaVal][regionVal][subRegionVal];
      gourmetList.forEach(g => {
        const option = document.createElement("option");
        option.value = g;
        option.textContent = g;
        gourmetSelect.appendChild(option);
      });
      gourmetContainer.style.display = "block";
    }
  });

  // ▼ 決定ボタン (ランキング表示モック)
  document.getElementById("btnShowRanking").addEventListener("click", function() {
    const areaVal      = areaSelect.value;
    const regionVal    = regionSelect.value;
    const subRegionVal = subRegionSelect.value;
    const gourmetVal   = gourmetSelect.value;

    if (!areaVal || !regionVal || !subRegionVal || !gourmetVal) {
      alert("全ての項目を選択してください");
      return;
    }
    // モックアラート or 結果表示
    alert(`【モックランキング】\nエリア: ${areaVal}\n地域: ${regionVal}\n詳細エリア: ${subRegionVal}\n名物グルメ: ${gourmetVal}`);
  });
});

/****************************************************************
 * 4) 多言語切り替え
 ****************************************************************/
function applyRankingLanguage(lang) {
  currentRankingLang = lang;
  const translations = {
    ja: {
      siteTitle: "My Best Gourmet",
      homeLink: "ホーム",
      postLink: "投稿",
      rankingLink: "ランキング",
      mypageLink: "マイページ",

      rankingTitle: "名物グルメランキング",
      rankingAreaLabel: "エリアを選択:",
      rankingRegionLabel: "地域を選択:",
      rankingSubRegionLabel: "詳細エリアを選択:",
      rankingGourmetLabel: "名物グルメを選択:",
      confirmButton: "決定",

      contactLink: "お問い合わせ",
      aboutLink: "サイトについて",
    },
    en: {
      siteTitle: "My Best Gourmet",
      homeLink: "Home",
      postLink: "Post",
      rankingLink: "Ranking",
      mypageLink: "My Page",

      rankingTitle: "Local Gourmet Ranking",
      rankingAreaLabel: "Select an Area:",
      rankingRegionLabel: "Select a Region:",
      rankingSubRegionLabel: "Select a Sub-Region:",
      rankingGourmetLabel: "Select a Gourmet:",
      confirmButton: "Submit",

      contactLink: "Contact Us",
      aboutLink: "About Us",
    }
  };

  const c = translations[lang] || translations.ja;

  // ヘッダー
  document.querySelector(".site-title").textContent = c.siteTitle;
  document.getElementById("homeLink").textContent = c.homeLink;
  document.getElementById("postLink").textContent = c.postLink;
  document.getElementById("rankingLink").textContent = c.rankingLink;
  document.getElementById("mypageLink").textContent = c.mypageLink;

  // ページタイトル & 各ラベル
  document.getElementById("rankingTitle").textContent = c.rankingTitle;
  document.getElementById("rankingAreaLabel").textContent = c.rankingAreaLabel;
  document.getElementById("rankingRegionLabel").textContent = c.rankingRegionLabel;
  document.getElementById("rankingSubRegionLabel").textContent = c.rankingSubRegionLabel;
  document.getElementById("rankingGourmetLabel").textContent = c.rankingGourmetLabel;
  document.getElementById("btnShowRanking").textContent = c.confirmButton;

  // フッター
  document.getElementById("contactLink").textContent = c.contactLink;
  document.getElementById("aboutLink").textContent = c.aboutLink;
}
