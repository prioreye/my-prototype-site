/***********************************************************
 * 1) 日本語データ & 英語データ
 *   area -> region -> subRegion (名物グルメも含められる)
 ***********************************************************/
 const gourmetDataPost_ja = {
  tokyo: {
    "23区内": {
      "新宿": ["ラーメン", "焼肉", "寿司"],
      "渋谷": ["クレープ", "パフェ", "タピオカドリンク"],
      // ...
    },
    "23区外": {
      "立川": [],
      "八王子": [],
      // ...
    }
  },
  osaka: {
    "市内エリア": {
      "梅田": [],
      "難波": [],
      // ...
    }
  },
  kyoto: {
    "市内エリア": {
      "東山": [],
      // ...
    },
    "市外エリア": {
      "宇治": [],
      // ...
    }
  },
  hokkaido: {
    "札幌": {
      "札幌": []
    },
    "函館": {
      "函館山": []
    },
    // ...
  },
  fukuoka: {
    "市内エリア": {
      "天神": [],
      // ...
    },
    "市外エリア": {
      "北九州": [],
      // ...
    }
  }
};

const gourmetDataPost_en = {
  tokyo: {
    "Inside 23 Wards": {
      "Shinjuku": [],
      "Shibuya": [],
      // ...
    },
    "Outside 23 Wards": {
      "Tachikawa": [],
      "Hachioji": [],
      // ...
    }
  },
  osaka: {
    "City Area": {
      "Umeda": [],
      "Namba": [],
      // ...
    }
  },
  kyoto: {
    "City Area": {
      "Higashiyama": [],
      // ...
    },
    "Outside City": {
      "Uji": [],
      // ...
    }
  },
  hokkaido: {
    "Sapporo": {
      "Sapporo": []
    },
    "Hakodate": {
      "Mt.Hakodate": []
    }
  },
  fukuoka: {
    "City Area": {
      "Tenjin": [],
      // ...
    },
    "Outside City": {
      "Kitakyushu": [],
      // ...
    }
  }
};

/***********************************************************
 * 2) 言語フラグ & データ取得関数
 ***********************************************************/
let currentLanguagePost = "ja";

function getPostGourmetData() {
  return currentLanguagePost === "en" ? gourmetDataPost_en : gourmetDataPost_ja;
}

/***********************************************************
 * 3) エリア→地域→詳細エリア
 ***********************************************************/
document.addEventListener("DOMContentLoaded", function() {
  const postAreaSelect = document.getElementById("postAreaSelect");
  const postRegionSelect = document.getElementById("postRegionSelect");
  const postSubRegionSelect = document.getElementById("postSubRegionSelect");

  const postRegionContainer = document.getElementById("postRegionContainer");
  const postSubRegionContainer = document.getElementById("postSubRegionContainer");

  // ▼ エリア選択
  postAreaSelect.addEventListener("change", function() {
    const selectedArea = this.value;

    // 初期化
    postRegionContainer.style.display = "none";
    postSubRegionContainer.style.display = "none";
    postRegionSelect.innerHTML = '<option value="" disabled selected>選択してください</option>';
    postSubRegionSelect.innerHTML = '<option value="" disabled selected>選択してください</option>';

    const data = getPostGourmetData();
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

  // ▼ 地域選択
  postRegionSelect.addEventListener("change", function() {
    const selectedArea = postAreaSelect.value;
    const selectedRegion = this.value;

    postSubRegionContainer.style.display = "none";
    postSubRegionSelect.innerHTML = '<option value="" disabled selected>選択してください</option>';

    const data = getPostGourmetData();
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

  // ▼ Google Places Autocomplete
  initAutocomplete();

  // ▼ フォーム送信
  const reviewForm = document.getElementById("postReviewForm");
  reviewForm.addEventListener("submit", function(e) {
    e.preventDefault();

    const area = postAreaSelect.value;
    const region = postRegionSelect.value;
    const subRegion = postSubRegionSelect.value;

    const storeName = document.getElementById("storeNameInput").value.trim();
    const placeId = document.getElementById("googlePlaceId").value;
    const storeLat = document.getElementById("storeLat").value;
    const storeLng = document.getElementById("storeLng").value;

    const address = document.getElementById("addressInput").value.trim();
    const recommendMenu = document.getElementById("recommendMenu").value.trim();
    const comment = document.getElementById("comment").value.trim();
    const photoFile = document.getElementById("photo").files[0];

    if (!area || !region || !subRegion) {
      alert("エリア・地域・詳細エリアを選択してください。");
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

  // ▼ ページロード時に言語適用
  const savedLang = localStorage.getItem("selectedLanguage") || "ja";
  applyLanguageForPost(savedLang);

  // ▼ ヘッダーの言語セレクト
  document.getElementById("headerLanguageSelect").addEventListener("change", function() {
    const selectedLanguage = this.value;
    localStorage.setItem("selectedLanguage", selectedLanguage);
    applyLanguageForPost(selectedLanguage);
  });
});

/***********************************************************
 * 4) Google Places Autocomplete
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

    // 住所 (編集可フィールド)
    const addressInput = document.getElementById("addressInput");
    if (addressInput && place.formatted_address) {
      addressInput.value = place.formatted_address;
    }
  });
}

/***********************************************************
 * 5) 多言語切り替え (post.html 用)
 ***********************************************************/
function applyLanguageForPost(language) {
  currentLanguagePost = language;

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

  const c = translations[language];
  if (!c) return;

  // ヘッダー
  document.querySelector(".site-title").textContent = c.siteTitle;
  document.getElementById("homeLink").querySelector("img").alt = c.homeLink + " Icon";
  document.getElementById("postLink").querySelector("img").alt = c.postLink + " Icon";
  document.getElementById("rankingLink").querySelector("img").alt = c.rankingLink + " Icon";
  document.getElementById("mypageLink").querySelector("img").alt = c.mypageLink + " Icon";

  // タイトル
  document.getElementById("reviewPostTitle").textContent = c.reviewPostTitle;

  // エリア選択
  document.getElementById("postAreaLabel").textContent = c.postAreaLabel;
  document.getElementById("postRegionLabel").textContent = c.postRegionLabel;
  document.getElementById("postSubRegionLabel").textContent = c.postSubRegionLabel;

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
