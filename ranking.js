/***********************************************************
 * 1) 日本語データ (rankingData_ja)
 ***********************************************************/
 const rankingData_ja = {
  tokyo: {
    "23区内": {
      "新宿": ["ラーメン","焼肉","寿司"],
      "渋谷": ["クレープ","パフェ","タピオカドリンク"],
      "池袋": ["中華料理","餃子","ラーメン"],
      "原宿": ["クレープ","カラフルスイーツ","タピオカドリンク"],
      "銀座": ["高級寿司","天ぷら","和菓子"],
      "六本木": ["洋食","ステーキ","バーガー"],
      "浅草": ["天丼","もんじゃ焼き","雷おこし"],
      "上野": ["丼物","和菓子","焼き鳥"],
      "月島": ["もんじゃ焼き","お好み焼き","居酒屋メニュー"],
      "両国": ["ちゃんこ鍋","丼物","焼き鳥"],
      "門前仲町": ["深川めし","焼き鳥","日本酒"],
      "お台場": ["海鮮丼","ジェラート","フィッシュ＆チップス"],
      "豊洲": ["海鮮丼","寿司","丼物"],
      "中野": ["焼き鳥","中華そば","カレーライス"],
      "荻窪": ["中華そば","そば","焼き鳥"],
      "高円寺": ["焼き鳥","おでん","カレーライス"],
      "吉祥寺": ["ハンバーガー","洋菓子","スイーツ"]
    },
    "23区外": {
      "立川": ["駅弁","カレーライス","焼き鳥"],
      "八王子": ["うどん","ラーメン","駅弁"],
      "三鷹": ["洋菓子","パスタ","ステーキ"],
      "国分寺": ["蕎麦","うどん","天ぷら"],
      "高尾山": ["山菜料理","団子","天ぷら"],
      "奥多摩": ["川魚料理","山菜料理","蕎麦"]
    }
  },
  osaka: {
    "市内エリア": {
      "梅田": ["たこ焼き","お好み焼き","串カツ"],
      "難波": ["串カツ","お好み焼き","豚まん"],
      "心斎橋": ["お好み焼き","串カツ","焼きそば"],
      "道頓堀": ["たこ焼き","お好み焼き","串カツ"],
      "天王寺": ["ホルモン焼き","串カツ","豚まん"],
      "新世界": ["串カツ","ホルモン焼き","豚まん"],
      "西成": ["ホルモン焼き","カレーライス","焼き鳥"],
      "大阪港": ["シーフードカレー","たこ飯","ジェラート"],
      "ユニバーサルシティ": ["フライドチキン","ハンバーガー","ソフトクリーム"]
    }
  },
  kyoto: {
    "市内エリア": {
      "東山": ["湯豆腐","京漬物","八ツ橋"],
      "嵐山": ["抹茶スイーツ","炭火焼き料理","京ぜんざい"],
      "金閣寺": ["湯葉料理","抹茶スイーツ","京菓子"],
      "河原町": ["京寿司","京うどん","和菓子"]
    },
    "市外エリア": {
      "貴船": ["川魚料理","山菜料理","湯豆腐"],
      "宇治": ["抹茶スイーツ","宇治茶そば","抹茶アイス"],
      "京丹後市": ["蟹","海鮮しゃぶしゃぶ","甘えび"],
      "鞍馬": ["山菜料理","湯豆腐","抹茶スイーツ"]
    }
  },
  hokkaido: {
    "札幌": {
      "札幌": ["ジンギスカン","海鮮丼","ラーメン"]
    },
    "函館": {
      "函館山": ["函館塩ラーメン","イカ刺し","海鮮丼"]
    },
    "小樽": {
      "小樽運河": ["小樽寿司","海鮮丼","洋菓子"]
    }
  },
  fukuoka: {
    "市内エリア": {
      "天神": ["豚骨ラーメン","明太子","水炊き"],
      "中洲": ["明太子","もつ鍋","豚骨ラーメン"],
      "博多駅": ["博多ラーメン","明太子","水炊き"]
    },
    "市外エリア": {
      "北九州": ["焼きカレー（門司港）","皿うどん","ふぐ料理"],
      "小倉": ["鯖寿司","鰻のせいろ蒸し","豚骨ラーメン"],
      "久留米": ["久留米ラーメン","地鶏料理","焼き鳥"]
    }
  }
};

/***********************************************************
 * 2) 英語データ (rankingData_en)
 ***********************************************************/
const rankingData_en = {
  tokyo: {
    "Within 23 Wards": {
      "Shinjuku": ["Ramen","Yakiniku","Sushi"],
      "Shibuya": ["Crepes","Parfait","Tapioca Drinks"],
      "Ikebukuro": ["Chinese Cuisine","Gyoza","Ramen"],
      "Harajuku": ["Crepes","Colorful Sweets","Tapioca Drinks"],
      "Ginza": ["High‐end Sushi","Tempura","Wagashi (Japanese sweets)"],
      "Roppongi": ["Western Cuisine","Steak","Burger"],
      "Asakusa": ["Tendon (tempura rice bowl)","Monjayaki","Kaminari Okoshi"],
      "Ueno": ["Donburi (rice bowl)","Wagashi","Yakitori"],
      "Tsukishima": ["Monjayaki","Okonomiyaki","Izakaya Menu"],
      "Ryogoku": ["Chanko Nabe","Donburi","Yakitori"],
      "Monzen‐Nakacho": ["Fukagawa‐meshi","Yakitori","Japanese Sake"],
      "Odaiba": ["Kaisen‐don (seafood bowl)","Gelato","Fish & Chips"],
      "Toyosu": ["Kaisen‐don","Sushi","Donburi"],
      "Nakano": ["Yakitori","Chuka Soba","Curry Rice"],
      "Ogikubo": ["Chuka Soba","Soba","Yakitori"],
      "Koenji": ["Yakitori","Oden","Curry Rice"],
      "Kichijoji": ["Hamburger","Western Sweets","Sweets"]
    },
    "Outside 23 Wards": {
      "Tachikawa": ["Ekiben (station bento)","Curry Rice","Yakitori"],
      "Hachioji": ["Udon","Ramen","Ekiben"],
      "Mitaka": ["Western Sweets","Pasta","Steak"],
      "Kokubunji": ["Soba","Udon","Tempura"],
      "Mt. Takao": ["Mountain Vegetable Dishes","Dango","Tempura"],
      "Okutama": ["River Fish Dishes","Mountain Vegetable Dishes","Soba"]
    }
  },
  osaka: {
    "City Area": {
      "Umeda": ["Takoyaki","Okonomiyaki","Kushi‐katsu"],
      "Namba": ["Kushi‐katsu","Okonomiyaki","Pork Buns"],
      "Shinsaibashi": ["Okonomiyaki","Kushi‐katsu","Yakisoba"],
      "Dotonbori": ["Takoyaki","Okonomiyaki","Kushi‐katsu"],
      "Tennoji": ["Horumon‐yaki (offal grill)","Kushi‐katsu","Pork Buns"],
      "Shinsekai": ["Kushi‐katsu","Horumon‐yaki","Pork Buns"],
      "Nishinari": ["Horumon‐yaki","Curry Rice","Yakitori"],
      "Osaka Port": ["Seafood Curry","Tako‐meshi (octopus rice)","Gelato"],
      "Universal City": ["Fried Chicken","Hamburger","Soft‐serve Ice Cream"]
    }
  },
  kyoto: {
    "City Area": {
      "Higashiyama": ["Yudofu (boiled tofu)","Kyoto Pickles","Yatsuhashi"],
      "Arashiyama": ["Matcha Sweets","Charcoal‐grilled Dishes","Kyoto Zenzai"],
      "Kinkakuji": ["Yuba (tofu skin) Dishes","Matcha Sweets","Kyoto Sweets"],
      "Kawaramachi": ["Kyoto Sushi","Kyoto Udon","Wagashi"]
    },
    "Outside City Area": {
      "Kibune": ["River Fish Dishes","Mountain Vegetable Dishes","Yudofu"],
      "Uji": ["Matcha Sweets","Uji Tea Soba","Matcha Ice Cream"],
      "Kyotango City": ["Crab","Seafood Shabu‐Shabu","Sweet Shrimp"],
      "Kurama": ["Mountain Vegetable Dishes","Yudofu","Matcha Sweets"]
    }
  },
  hokkaido: {
    "Sapporo": {
      "Sapporo": ["Jingisukan (mutton BBQ)","Kaisen‐don","Ramen"]
    },
    "Hakodate": {
      "Mt. Hakodate": ["Hakodate Shio Ramen","Squid Sashimi","Kaisen‐don"]
    },
    "Otaru": {
      "Otaru Canal": ["Otaru Sushi","Kaisen‐don","Western Sweets"]
    }
  },
  fukuoka: {
    "City Area": {
      "Tenjin": ["Tonkotsu Ramen","Mentaiko","Mizutaki (chicken hotpot)"],
      "Nakasu": ["Mentaiko","Motsu‐nabe","Tonkotsu Ramen"],
      "Hakata Station": ["Hakata Ramen","Mentaiko","Mizutaki"]
    },
    "Outside City Area": {
      "Kitakyushu": ["Baked Curry (Moji Port)","Sara Udon","Fugu (pufferfish)"],
      "Kokura": ["Saba Sushi","Unagi Seiro‐mushi","Tonkotsu Ramen"],
      "Kurume": ["Kurume Ramen","Local Chicken Dishes","Yakitori"]
    }
  }
};

/***********************************************************
 * 3) 言語フラグ & データ取得関数
 ***********************************************************/
let currentRankingLang = "ja";

function getRankingData() {
  return currentRankingLang === "en" ? rankingData_en : rankingData_ja;
}

/***********************************************************
 * 4) DOMContentLoaded (4段階選択 + 決定ボタン(モック))
 ***********************************************************/
document.addEventListener("DOMContentLoaded", function() {
  // 1) 多言語初期化
  const savedLang = localStorage.getItem("selectedLanguage") || "ja";
  applyRankingLanguage(savedLang);

  document.getElementById("headerLanguageSelect").addEventListener("change", function() {
    const selLang = this.value;
    localStorage.setItem("selectedLanguage", selLang);
    applyRankingLanguage(selLang);
  });

  // 2) 4段階ドロップダウン (area -> region -> subRegion -> gourmet)
  const areaSelect = document.getElementById("areaSelect");
  const regionContainer = document.getElementById("regionContainer");
  const regionSelect = document.getElementById("regionSelect");
  const subRegionContainer = document.getElementById("subRegionContainer");
  const subRegionSelect = document.getElementById("subRegionSelect");
  const gourmetContainer = document.getElementById("gourmetContainer");
  const gourmetSelect = document.getElementById("gourmetSelect");

  // areaSelect change
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
        const op = document.createElement("option");
        op.value = regionKey;
        op.textContent = regionKey;
        regionSelect.appendChild(op);
      }
      regionContainer.style.display = "block";
    }
  });

  // regionSelect change
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
        const op = document.createElement("option");
        op.value = subRegionKey;
        op.textContent = subRegionKey;
        subRegionSelect.appendChild(op);
      }
      subRegionContainer.style.display = "block";
    }
  });

  // subRegionSelect change
  subRegionSelect.addEventListener("change", function() {
    gourmetContainer.style.display = "none";
    gourmetSelect.innerHTML = '<option value="" disabled selected>名物グルメを選択...</option>';

    const data = getRankingData();
    const areaVal = areaSelect.value;
    const regionVal = regionSelect.value;
    const subRegionVal = this.value;
    if (areaVal && regionVal && subRegionVal && data[areaVal][regionVal][subRegionVal]) {
      const gourmetList = data[areaVal][regionVal][subRegionVal];
      gourmetList.forEach((g) => {
        const op = document.createElement("option");
        op.value = g;
        op.textContent = g;
        gourmetSelect.appendChild(op);
      });
      gourmetContainer.style.display = "block";
    }
  });

  // 3) 決定ボタン (モック)
  document.getElementById("btnShowRanking").addEventListener("click", function() {
    const areaVal = areaSelect.value;
    const regionVal = regionSelect.value;
    const subRegionVal = subRegionSelect.value;
    const gourmetVal = gourmetSelect.value;

    if (!areaVal || !regionVal || !subRegionVal || !gourmetVal) {
      alert("全ての項目を選択してください");
      return;
    }
    // モックアラート
    alert(`【モック】「${areaVal} / ${regionVal} / ${subRegionVal} / ${gourmetVal}」のランキングを表示予定`);
  });
});

/***********************************************************
 * 5) 多言語切り替え
 ***********************************************************/
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
      aboutLink: "サイトについて"
    },
    en: {
      siteTitle: "My Best Gourmet",
      homeLink: "Home",
      postLink: "Post",
      rankingLink: "Ranking",
      mypageLink: "My Page",

      rankingTitle: "Famous Local Cuisines Ranking",
      rankingAreaLabel: "Select an Area:",
      rankingRegionLabel: "Select a Region:",
      rankingSubRegionLabel: "Select a Sub-Region:",
      rankingGourmetLabel: "Select a Gourmet:",
      confirmButton: "Submit",

      contactLink: "Contact Us",
      aboutLink: "About Us"
    }
  };

  const c = translations[lang] || translations.ja;

  // ヘッダー
  document.querySelector(".site-title").textContent = c.siteTitle;
  document.getElementById("homeLink").textContent = c.homeLink;
  document.getElementById("postLink").textContent = c.postLink;
  document.getElementById("rankingLink").textContent = c.rankingLink;
  document.getElementById("mypageLink").textContent = c.mypageLink;

  // タイトルやラベル
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
