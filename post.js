/***********************************************************
 * 1) 日本語 & 英語データ: 4段階 (エリア→地域→詳細エリア→名物グルメ)
 ***********************************************************/
 const gourmetDataPost_ja = {
  tokyo: {
    "23区内": {
      "新宿": ["ラーメン", "焼肉", "寿司"],
      "渋谷": ["クレープ", "パフェ", "タピオカドリンク"],
      // ...
    },
    "23区外": {
      "立川": ["駅弁", "カレーライス", "焼き鳥"],
      // ...
    }
  },
  osaka: {
    "市内エリア": {
      "梅田": ["たこ焼き", "お好み焼き", "串カツ"],
      // ...
    }
  },
  kyoto: {
    "市内エリア": {
      "東山": ["湯豆腐", "京漬物", "八ツ橋"],
      // ...
    },
    "市外エリア": {
      "宇治": ["抹茶スイーツ", "宇治茶そば", "抹茶アイス"],
      // ...
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
      // ...
    },
    "市外エリア": {
      "北九州": ["焼きカレー（門司港）", "皿うどん", "ふぐ料理"],
      // ...
    }
  }
};

const gourmetDataPost_en = {
  tokyo: {
    "Inside 23 Wards": {
      "Shinjuku": ["Ramen", "Yakiniku", "Sushi"],
      "Shibuya": ["Crepe", "Parfait", "Bubble Tea"],
      // ...
    },
    "Outside 23 Wards": {
      "Tachikawa": ["Ekiben", "Curry Rice", "Yakitori"],
      // ...
    }
  },
  osaka: {
    "City Area": {
      "Umeda": ["Takoyaki", "Okonomiyaki", "Kushikatsu"],
      // ...
    }
  },
  kyoto: {
    "City Area": {
      "Higashiyama": ["Yudofu", "Kyotsukemono", "Yatsuhashi"],
      // ...
    },
    "Outside City": {
      "Uji": ["Matcha Sweets", "Ujicha Soba", "Matcha Ice Cream"],
      // ...
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
      // ...
    },
    "Outside City": {
      "Kitakyushu": ["Yaki Curry (Moji)", "Sara Udon", "Fugu Cuisine"],
      // ...
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
    if (selectedArea && selectedRegion && selectedSubRegion && data[selectedArea][selectedRegion][selectedSubRegion]) {
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

    const area = postAreaSelect.value;
    const region = postRegionSelect.value;
    const subRegion = postSubRegionSelect.value;
    const gourmet = gourmetSelect.value;

    const storeName = document.getElementById("storeNameInput").value.trim();
    const placeId = document.getElementById("googlePlaceId").value;
    const storeLat = document.getElementById("storeLat").value;
    const storeLng = document.getElementById("storeLng").value;

    const address = document.getElementById("addressInput").value.trim();
    const recommendMenu = document.getElementById("recommendMenu").value.trim();
    const comment = document.getElementById("comment").value.trim();
    const photoFile = document.getElementById("photo").files[0];

    if (!area || !region || !subRegion || !gourmet) {
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
      gourmet,
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
    // 住所
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
      siteTitle: "サイトタイトル",
      homeLink: "ホーム",
      postLink: "投稿",
      rankingLink: "ランキング",
      mypageLink: "マイページ",

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
      siteTitle: "Site Title",
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
