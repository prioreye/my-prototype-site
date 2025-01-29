/***********************************************************
 * 1) 日本語データ (最新表) & 英語データ
 ***********************************************************/
 const gourmetDataPost_ja = {
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
  osaka: {
    "市内エリア": {
      "梅田": ["たこ焼き", "お好み焼き", "串カツ"],
      "難波": ["串カツ", "お好み焼き", "豚まん"],
      "心斎橋": ["お好み焼き", "串カツ", "焼きそば"],
      "道頓堀": ["たこ焼き", "お好み焼き", "串カツ"],
      "天王寺": ["ホルモン焼き", "串カツ", "豚まん"],
      "新世界": ["串カツ", "ホルモン焼き", "豚まん"],
      "西成": ["ホルモン焼き", "カレーライス", "焼き鳥"],
      "大阪港": ["シーフードカレー", "たこ飯", "ジェラート"],
      "ユニバーサルシティ": ["フライドチキン", "ハンバーガー", "ソフトクリーム"],
    }
  },
  kyoto: {
    "市内エリア": {
      "東山": ["湯豆腐", "京漬物", "八ツ橋"],
      "嵐山": ["抹茶スイーツ", "炭火焼き料理", "京ぜんざい"],
      "金閣寺": ["湯葉料理", "抹茶スイーツ", "京菓子"],
      "河原町": ["京寿司", "京うどん", "和菓子"],
    },
    "市外エリア": {
      "貴船": ["川魚料理", "山菜料理", "湯豆腐"],
      "宇治": ["抹茶スイーツ", "宇治茶そば", "抹茶アイス"],
      "京丹後市": ["蟹", "海鮮しゃぶしゃぶ", "甘えび"],
      "鞍馬": ["山菜料理", "湯豆腐", "抹茶スイーツ"],
    }
  },
  hokkaido: {
    "札幌": {
      "札幌": ["ジンギスカン", "海鮮丼", "ラーメン"]
    },
    "函館": {
      "函館山": ["函館塩ラーメン", "イカ刺し", "海鮮丼"]
    },
    "小樽": {
      "小樽運河": ["小樽寿司", "海鮮丼", "洋菓子"]
    }
  },
  fukuoka: {
    "市内エリア": {
      "天神": ["豚骨ラーメン", "明太子", "水炊き"],
      "中洲": ["明太子", "もつ鍋", "豚骨ラーメン"],
      "博多駅": ["博多ラーメン", "明太子", "水炊き"],
    },
    "市外エリア": {
      "北九州": ["焼きカレー（門司港）", "皿うどん", "ふぐ料理"],
      "小倉": ["鯖寿司", "鰻のせいろ蒸し", "豚骨ラーメン"],
      "久留米": ["久留米ラーメン", "地鶏料理", "焼き鳥"],
    }
  }
};

const gourmetDataPost_en = {
  tokyo: {
    "Within 23 Wards": {
      "Shinjuku": ["Ramen", "Yakiniku", "Sushi"],
      "Shibuya": ["Crepes", "Parfait", "Tapioca Drinks"],
      "Ikebukuro": ["Chinese Cuisine", "Gyoza", "Ramen"],
      "Harajuku": ["Crepes", "Colorful Sweets", "Tapioca Drinks"],
      "Ginza": ["High‐end Sushi", "Tempura", "Wagashi (Japanese sweets)"],
      "Roppongi": ["Western Cuisine", "Steak", "Burger"],
      "Asakusa": ["Tendon (tempura rice bowl)", "Monjayaki", "Kaminari Okoshi"],
      "Ueno": ["Donburi (rice bowl)", "Wagashi", "Yakitori"],
      "Tsukishima": ["Monjayaki", "Okonomiyaki", "Izakaya Menu"],
      "Ryogoku": ["Chanko Nabe", "Donburi", "Yakitori"],
      "Monzen‐Nakacho": ["Fukagawa‐meshi", "Yakitori", "Japanese Sake"],
      "Odaiba": ["Kaisen‐don (seafood bowl)", "Gelato", "Fish & Chips"],
      "Toyosu": ["Kaisen‐don", "Sushi", "Donburi"],
      "Nakano": ["Yakitori", "Chuka Soba", "Curry Rice"],
      "Ogikubo": ["Chuka Soba", "Soba", "Yakitori"],
      "Koenji": ["Yakitori", "Oden", "Curry Rice"],
      "Kichijoji": ["Hamburger", "Western Sweets", "Sweets"],
    },
    "Outside 23 Wards": {
      "Tachikawa": ["Ekiben (station bento)", "Curry Rice", "Yakitori"],
      "Hachioji": ["Udon", "Ramen", "Ekiben"],
      "Mitaka": ["Western Sweets", "Pasta", "Steak"],
      "Kokubunji": ["Soba", "Udon", "Tempura"],
      "Mt. Takao": ["Mountain Vegetable Dishes", "Dango", "Tempura"],
      "Okutama": ["River Fish Dishes", "Mountain Vegetable Dishes", "Soba"],
    }
  },
  osaka: {
    "City Area": {
      "Umeda": ["Takoyaki", "Okonomiyaki", "Kushi‐katsu"],
      "Namba": ["Kushi‐katsu", "Okonomiyaki", "Pork Buns"],
      "Shinsaibashi": ["Okonomiyaki", "Kushi‐katsu", "Yakisoba"],
      "Dotonbori": ["Takoyaki", "Okonomiyaki", "Kushi‐katsu"],
      "Tennoji": ["Horumon‐yaki (offal grill)", "Kushi‐katsu", "Pork Buns"],
      "Shinsekai": ["Kushi‐katsu", "Horumon‐yaki", "Pork Buns"],
      "Nishinari": ["Horumon‐yaki", "Curry Rice", "Yakitori"],
      "Osaka Port": ["Seafood Curry", "Tako‐meshi (octopus rice)", "Gelato"],
      "Universal City": ["Fried Chicken", "Hamburger", "Soft‐serve Ice Cream"],
    }
  },
  kyoto: {
    "City Area": {
      "Higashiyama": ["Yudofu (boiled tofu)", "Kyoto Pickles", "Yatsuhashi"],
      "Arashiyama": ["Matcha Sweets", "Charcoal‐grilled Dishes", "Kyoto Zenzai"],
      "Kinkakuji": ["Yuba (tofu skin) Dishes", "Matcha Sweets", "Kyoto Sweets"],
      "Kawaramachi": ["Kyoto Sushi", "Kyoto Udon", "Wagashi"],
    },
    "Outside City Area": {
      "Kibune": ["River Fish Dishes", "Mountain Vegetable Dishes", "Yudofu"],
      "Uji": ["Matcha Sweets", "Uji Tea Soba", "Matcha Ice Cream"],
      "Kyotango City": ["Crab", "Seafood Shabu‐Shabu", "Sweet Shrimp"],
      "Kurama": ["Mountain Vegetable Dishes", "Yudofu", "Matcha Sweets"],
    }
  },
  hokkaido: {
    "Sapporo": {
      "Sapporo": ["Jingisukan (mutton BBQ)", "Kaisen‐don", "Ramen"]
    },
    "Hakodate": {
      "Mt. Hakodate": ["Hakodate Shio Ramen", "Squid Sashimi", "Kaisen‐don"]
    },
    "Otaru": {
      "Otaru Canal": ["Otaru Sushi", "Kaisen‐don", "Western Sweets"]
    }
  },
  fukuoka: {
    "City Area": {
      "Tenjin": ["Tonkotsu Ramen", "Mentaiko", "Mizutaki (chicken hotpot)"],
      "Nakasu": ["Mentaiko", "Motsu‐nabe", "Tonkotsu Ramen"],
      "Hakata Station": ["Hakata Ramen", "Mentaiko", "Mizutaki"],
    },
    "Outside City Area": {
      "Kitakyushu": ["Baked Curry (Moji Port)", "Sara Udon", "Fugu (pufferfish)"],
      "Kokura": ["Saba Sushi", "Unagi Seiro‐mushi", "Tonkotsu Ramen"],
      "Kurume": ["Kurume Ramen", "Local Chicken Dishes", "Yakitori"],
    }
  }
};

/***********************************************************
 * 2) 言語フラグ & データ取得関数
 ***********************************************************/
let currentLangPost = "ja";

function getPostData() {
  return currentLangPost === "en" ? gourmetDataPost_en : gourmetDataPost_ja;
}

/***********************************************************
 * 3) DOMContentLoaded
 ***********************************************************/
document.addEventListener("DOMContentLoaded", function() {
  const postAreaSelect = document.getElementById("postAreaSelect");
  const postRegionSelect = document.getElementById("postRegionSelect");
  const postSubRegionSelect = document.getElementById("postSubRegionSelect");
  const gourmetSelect = document.getElementById("gourmetSelect");

  const postRegionContainer = document.getElementById("postRegionContainer");
  const postSubRegionContainer = document.getElementById("postSubRegionContainer");
  const gourmetContainer = document.getElementById("gourmetContainer");

  // ▼ 第1階層: エリア
  postAreaSelect.addEventListener("change", function() {
    postRegionContainer.style.display = "none";
    postSubRegionContainer.style.display = "none";
    gourmetContainer.style.display = "none";

    postRegionSelect.innerHTML = '<option value="" disabled selected>選択してください</option>';
    postSubRegionSelect.innerHTML = '<option value="" disabled selected>選択してください</option>';
    gourmetSelect.innerHTML = '<option value="" disabled selected>名物グルメを選択...</option>';

    const selectedArea = this.value;
    const data = getPostData();
    if (selectedArea && data[selectedArea]) {
      const regionData = data[selectedArea];
      for (const regionKey in regionData) {
        const option = document.createElement("option");
        option.value = regionKey;
        option.textContent = regionKey;
        postRegionSelect.appendChild(option);
      }
      postRegionContainer.style.display = "block";
    }
  });

  // ▼ 第2階層: 地域
  postRegionSelect.addEventListener("change", function() {
    postSubRegionContainer.style.display = "none";
    gourmetContainer.style.display = "none";

    postSubRegionSelect.innerHTML = '<option value="" disabled selected>選択してください</option>';
    gourmetSelect.innerHTML = '<option value="" disabled selected>名物グルメを選択...</option>';

    const selectedArea = postAreaSelect.value;
    const selectedRegion = this.value;
    const data = getPostData();
    if (selectedArea && selectedRegion && data[selectedArea][selectedRegion]) {
      const subRegionData = data[selectedArea][selectedRegion];
      for (const subRegionKey in subRegionData) {
        const option = document.createElement("option");
        option.value = subRegionKey;
        option.textContent = subRegionKey;
        postSubRegionSelect.appendChild(option);
      }
      postSubRegionContainer.style.display = "block";
    }
  });

  // ▼ 第3階層: 詳細エリア
  postSubRegionSelect.addEventListener("change", function() {
    gourmetContainer.style.display = "none";
    gourmetSelect.innerHTML = '<option value="" disabled selected>名物グルメを選択...</option>';

    const selectedArea = postAreaSelect.value;
    const selectedRegion = postRegionSelect.value;
    const selectedSubRegion = this.value;

    const data = getPostData();
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

  // ▼ Google Places Autocomplete
  initAutocomplete();

  // ▼ フォーム送信
  const reviewForm = document.getElementById("postReviewForm");
  reviewForm.addEventListener("submit", function(e) {
    e.preventDefault();

    const area       = postAreaSelect.value;
    const region     = postRegionSelect.value;
    const subRegion  = postSubRegionSelect.value;
    const gourmetVal = gourmetSelect.value;

    const storeName = document.getElementById("storeNameInput").value.trim();
    const placeId   = document.getElementById("googlePlaceId").value;
    const storeLat  = document.getElementById("storeLat").value;
    const storeLng  = document.getElementById("storeLng").value;

    const address = document.getElementById("addressInput").value.trim();
    const recommendMenu = document.getElementById("recommendMenu").value.trim();
    const comment       = document.getElementById("comment").value.trim();
    const photoFile     = document.getElementById("photo").files[0];

    if (!area || !region || !subRegion || !gourmetVal) {
      alert("エリア・地域・詳細エリア・名物グルメを全て選択してください。");
      return;
    }
    if (!storeName || !address || !recommendMenu || !comment) {
      alert("必須項目を入力してください。");
      return;
    }

    const postData = {
      area,
      region,
      subRegion,
      gourmet: gourmetVal,
      storeName,
      placeId,
      address,
      lat: storeLat,
      lng: storeLng,
      recommendMenu,
      comment,
      photoName: photoFile ? photoFile.name : "",
    };

    console.log("投稿データ:", postData);
    alert("投稿完了:\n" + JSON.stringify(postData, null, 2));
    reviewForm.reset();
  });

  // ▼ 言語適用
  const savedLang = localStorage.getItem("selectedLanguage") || "ja";
  applyLanguageForPost(savedLang);

  document.getElementById("headerLanguageSelect").addEventListener("change", function() {
    const sel = this.value;
    localStorage.setItem("selectedLanguage", sel);
    applyLanguageForPost(sel);
  });
});

/***********************************************************
 * Google Places Autocomplete
 ***********************************************************/
function initAutocomplete() {
  const storeNameInput = document.getElementById("storeNameInput");
  if (!storeNameInput) return;

  const autocomplete = new google.maps.places.Autocomplete(storeNameInput, {
    fields: ["place_id", "formatted_address", "geometry", "name"]
  });

  autocomplete.addListener("place_changed", () => {
    const place = autocomplete.getPlace();
    if (!place) return;

    document.getElementById("googlePlaceId").value = place.place_id || "";
    document.getElementById("storeLat").value = place.geometry?.location?.lat() || "";
    document.getElementById("storeLng").value = place.geometry?.location?.lng() || "";

    // 店舗名
    if (place.name) {
      storeNameInput.value = place.name;
    }
    // 住所(編集可)
    const addressInput = document.getElementById("addressInput");
    if (addressInput && place.formatted_address) {
      addressInput.value = place.formatted_address;
    }
  });
}

/***********************************************************
 * 多言語切り替え
 ***********************************************************/
function applyLanguageForPost(language) {
  currentLangPost = language;

  const translations = {
    ja: {
      siteTitle: "My Best Gourmet",
      homeLink: "Home",
      postLink: "Post",
      rankingLink: "Ranking",
      mypageLink: "My page",

      reviewPostTitle: "レビュー投稿",

      postAreaLabel: "エリアを選択:",
      postRegionLabel: "地域を選択:",
      postSubRegionLabel: "詳細エリアを選択:",
      gourmetLabel: "名物グルメを選択:",

      storeNameLabel: "店舗名 (オートコンプリート)",
      addressLabel: "住所 (編集可)",
      recommendMenuLabel: "イチオシメニュー",
      commentLabel: "コメント",
      photoLabel: "写真アップロード (任意)",
      submitReviewButton: "投稿する",

      contactLink: "お問い合わせ",
      aboutLink: "サイトについて",
    },
    en: {
      siteTitle: "My Best Gourmet",
      homeLink: "Home",
      postLink: "Post",
      rankingLink: "Ranking",
      mypageLink: "My Page",

      reviewPostTitle: "Review Post",

      postAreaLabel: "Select an Area:",
      postRegionLabel: "Select a Region:",
      postSubRegionLabel: "Select a Sub-Region:",
      gourmetLabel: "Select a Gourmet:",

      storeNameLabel: "Store Name (Autocomplete)",
      addressLabel: "Address (Editable)",
      recommendMenuLabel: "Recommended Menu",
      commentLabel: "Comment",
      photoLabel: "Photo Upload (Optional)",
      submitReviewButton: "Submit",

      contactLink: "Contact Us",
      aboutLink: "About Us",
    }
  };

  const c = translations[language] || translations.ja;

  // ヘッダー
  document.querySelector(".site-title").textContent = c.siteTitle;
  document.getElementById("homeLink").textContent = c.homeLink;
  document.getElementById("postLink").textContent = c.postLink;
  document.getElementById("rankingLink").textContent = c.rankingLink;
  document.getElementById("mypageLink").textContent = c.mypageLink;

  // タイトル
  document.getElementById("reviewPostTitle").textContent = c.reviewPostTitle;

  // エリア選択
  document.getElementById("postAreaLabel").textContent = c.postAreaLabel;
  document.getElementById("postRegionLabel").textContent = c.postRegionLabel;
  document.getElementById("postSubRegionLabel").textContent = c.postSubRegionLabel;
  document.getElementById("gourmetLabel").textContent = c.gourmetLabel;
  document.getElementById("gourmetSelect").options[0].text = c.gourmetLabel;

  // フォームラベル
  document.getElementById("storeNameLabel").textContent = c.storeNameLabel;
  document.getElementById("addressLabel").textContent = c.addressLabel;
  document.getElementById("recommendMenuLabel").textContent = c.recommendMenuLabel;
  document.getElementById("commentLabel").textContent = c.commentLabel;
  document.getElementById("photoLabel").textContent = c.photoLabel;
  document.getElementById("submitReviewButton").textContent = c.submitReviewButton;

  // フッター
  document.getElementById("contactLink").textContent = c.contactLink;
  document.getElementById("aboutLink").textContent = c.aboutLink;
}
