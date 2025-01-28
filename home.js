/*************************************************************
 * 1) 多言語データ: 日本語 / 英語
 *************************************************************/
 const gourmetData_ja = {
  tokyo: {
    "23区内": {
      "新宿": ["ラーメン", "焼肉", "寿司"],
      "渋谷": ["クレープ", "パフェ", "タピオカドリンク"],
      /* ... */
    },
    "23区外": {
      "立川": ["駅弁", "カレーライス", "焼き鳥"],
      /* ... */
    }
  },
  osaka: {
    "市内エリア": {
      "梅田": ["たこ焼き", "お好み焼き", "串カツ"],
      /* ... */
    }
  },
  kyoto: {
    "市内エリア": {
      "東山": ["湯豆腐", "京漬物", "八ツ橋"],
      /* ... */
    },
    "市外エリア": {
      "宇治": ["抹茶スイーツ", "宇治茶そば", "抹茶アイス"],
      /* ... */
    }
  },
  hokkaido: {
    "札幌": {
      "札幌": ["ジンギスカン", "海鮮丼", "ラーメン"]
    },
    "函館": {
      "函館山": ["函館塩ラーメン", "イカ刺し", "海鮮丼"]
    }
  },
  fukuoka: {
    "市内エリア": {
      "天神": ["豚骨ラーメン", "明太子", "水炊き"],
      /* ... */
    },
    "市外エリア": {
      "北九州": ["焼きカレー（門司港）", "皿うどん", "ふぐ料理"],
      /* ... */
    }
  }
};

const gourmetData_en = {
  tokyo: {
    "Inside 23 Wards": {
      "Shinjuku": ["Ramen", "Yakiniku", "Sushi"],
      "Shibuya": ["Crepe", "Parfait", "Bubble Tea"],
      /* ... */
    },
    "Outside 23 Wards": {
      "Tachikawa": ["Ekiben", "Curry Rice", "Yakitori"],
      /* ... */
    }
  },
  osaka: {
    "City Area": {
      "Umeda": ["Takoyaki", "Okonomiyaki", "Kushikatsu"],
      /* ... */
    }
  },
  kyoto: {
    "City Area": {
      "Higashiyama": ["Yudofu", "Kyotsukemono", "Yatsuhashi"],
      /* ... */
    },
    "Outside City": {
      "Uji": ["Matcha Sweets", "Ujicha Soba", "Matcha Ice Cream"],
      /* ... */
    }
  },
  hokkaido: {
    "Sapporo": {
      "Sapporo": ["Genghis Khan", "Kaisen-don", "Ramen"]
    },
    "Hakodate": {
      "Mt.Hakodate": ["Hakodate Shio Ramen", "Sliced Squid", "Kaisen-don"]
    }
  },
  fukuoka: {
    "City Area": {
      "Tenjin": ["Tonkotsu Ramen", "Mentaiko", "Mizutaki"],
      /* ... */
    },
    "Outside City": {
      "Kitakyushu": ["Yaki Curry (Moji)", "Sara Udon", "Fugu Cuisine"],
      /* ... */
    }
  }
};

/*************************************************************
 * 2) 言語フラグ & データ取得
 *************************************************************/
let currentLanguage = "ja"; // デフォルトは日本語

function getGourmetData() {
  return currentLanguage === "en" ? gourmetData_en : gourmetData_ja;
}

/*************************************************************
 * 3) DOMContentLoaded: イベントリスナー設定 (4段階)
 *************************************************************/
document.addEventListener("DOMContentLoaded", function() {
  const areaSelect = document.getElementById("areaSelect");
  const regionSelect = document.getElementById("regionSelect");
  const subRegionSelect = document.getElementById("subRegionSelect");
  const gourmetSelect = document.getElementById("gourmetSelect");

  const detailAreaContainer = document.getElementById("detailAreaContainer");
  const gourmetContainer = document.getElementById("gourmetContainer");

  // ▼ 第1階層: エリア選択
  areaSelect.addEventListener("change", function() {
    const selectedArea = this.value;
    regionSelect.innerHTML = '<option value="" disabled selected>地域を選択...</option>';
    subRegionSelect.innerHTML = '<option value="" disabled selected>詳細エリアを選択...</option>';
    gourmetSelect.innerHTML = '<option value="" disabled selected>名物グルメを選択...</option>';

    subRegionSelect.style.display = "none";
    gourmetContainer.style.display = "none";

    const data = getGourmetData();
    if (selectedArea && data[selectedArea]) {
      const regionData = data[selectedArea];
      // 地域を生成
      for (const regionKey in regionData) {
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

  // ▼ 第2階層: 地域選択
  regionSelect.addEventListener("change", function() {
    const selectedArea = areaSelect.value;
    const selectedRegion = this.value;

    subRegionSelect.innerHTML = '<option value="" disabled selected>詳細エリアを選択...</option>';
    gourmetSelect.innerHTML = '<option value="" disabled selected>名物グルメを選択...</option>';
    subRegionSelect.style.display = "none";
    gourmetContainer.style.display = "none";

    const data = getGourmetData();
    if (selectedArea && selectedRegion && data[selectedArea][selectedRegion]) {
      const subRegionData = data[selectedArea][selectedRegion];
      for (const subRegionKey in subRegionData) {
        const option = document.createElement("option");
        option.value = subRegionKey;
        option.textContent = subRegionKey;
        subRegionSelect.appendChild(option);
      }
      subRegionSelect.style.display = "block";
    }
  });

  // ▼ 第3階層: 詳細エリア選択
  subRegionSelect.addEventListener("change", function() {
    const selectedArea = areaSelect.value;
    const selectedRegion = regionSelect.value;
    const selectedSubRegion = this.value;

    gourmetSelect.innerHTML = '<option value="" disabled selected>名物グルメを選択...</option>';
    gourmetContainer.style.display = "none";

    const data = getGourmetData();
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

  // ▼ 決定ボタン
  document.getElementById("confirmAreaButton").addEventListener("click", function() {
    const mainArea = areaSelect.value;
    const region = regionSelect.value;
    const subRegion = subRegionSelect.value;
    const gourmet = gourmetSelect.value;

    if (mainArea && region && subRegion && gourmet) {
      alert(`選択されたエリア:\n【エリア】${mainArea}\n【地域】${region}\n【詳細エリア】${subRegion}\n【名物グルメ】${gourmet}`);
    } else {
      alert("全ての項目を選択してください！");
    }
  });

  // ▼ 多言語対応 初期化
  const savedLang = localStorage.getItem("selectedLanguage") || "ja";
  applyLanguage(savedLang);

  document.getElementById("headerLanguageSelect").addEventListener("change", function() {
    const selLang = this.value;
    localStorage.setItem("selectedLanguage", selLang);
    applyLanguage(selLang);
  });
});

/*************************************************************
 * 4) 多言語切り替え
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
      gourmetLabel: "名物グルメを選択:",
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
      gourmetLabel: "Select a Gourmet:",
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

  const c = translations[language] || translations.ja;

  // ヘッダー
  document.querySelector(".site-title").textContent = c.siteTitle;
  document.getElementById("homeLink").textContent = c.homeLink;
  document.getElementById("postLink").textContent = c.postLink;
  document.getElementById("rankingLink").textContent = c.rankingLink;
  document.getElementById("mypageLink").textContent = c.mypageLink;

  // メイン文言
  document.getElementById("areaSelectionTitle").textContent = c.areaSelectionTitle;
  document.getElementById("areaLabel").textContent = c.areaLabel;
  document.getElementById("areaSelect").options[0].text = c.areaPlaceholder;
  document.getElementById("regionLabel").textContent = c.regionLabel;
  document.getElementById("subRegionLabel").textContent = c.subRegionLabel;

  // 第4階層: 名物グルメ
  document.getElementById("gourmetLabel").textContent = c.gourmetLabel;
  // gourmetSelect の先頭option も変えたいなら:
  document.getElementById("gourmetSelect").options[0].text = c.gourmetLabel;

  document.getElementById("confirmAreaButton").textContent = c.confirmButton;
  document.getElementById("reviewPostButton").textContent = c.reviewButton;

  // フッター
  document.getElementById("contactLink").textContent = c.contactLink;
  document.getElementById("aboutLink").textContent = c.aboutLink;

  // エリア名翻訳
  const areaSelect = document.getElementById("areaSelect");
  const areaOptions = areaSelect.options;
  const areaKeys = ["tokyo", "osaka", "kyoto", "hokkaido", "fukuoka"];
  for (let i = 1; i < areaOptions.length; i++) {
    areaOptions[i].text = c[areaKeys[i - 1]];
  }
}
