// post.js

/***********************************************************
 * 1) area→region→subRegion データ (簡易的にサンプル)
 ***********************************************************/
 const postAreaData = {
  tokyo: {
    "23区内": { "新宿": [], "渋谷": [], "浅草": [], /* ... */ },
    "23区外": { "立川": [], "八王子": [], /* ... */ }
  },
  osaka: {
    "市内エリア": { "梅田": [], "難波": [], /* ... */ }
  },
  kyoto: {
    "市内エリア": { "東山": [], /* ... */ },
    "市外エリア": { "宇治": [], /* ... */ }
  },
  hokkaido: {
    "札幌": { "札幌": [] },
    "函館": { "函館山": [] },
  },
  fukuoka: {
    "市内エリア": { "天神": [], /* ... */ },
    "市外エリア": { "北九州": [], /* ... */ }
  }
};

/***********************************************************
 * 2) エリア→地域→詳細エリア
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

    if (selectedArea && postAreaData[selectedArea]) {
      const regionData = postAreaData[selectedArea];
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

    if (selectedArea && selectedRegion && postAreaData[selectedArea][selectedRegion]) {
      const subRegionData = postAreaData[selectedArea][selectedRegion];
      for (const subRegionKey in subRegionData) {
        const option = document.createElement("option");
        option.value = subRegionKey;
        option.textContent = subRegionKey;
        postSubRegionSelect.appendChild(option);
      }
      postSubRegionContainer.style.display = "block";
    }
  });

  // ▼ Google Places Autocomplete 初期化
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

    // POST用データ例
    const postData = {
      area,
      region,
      subRegion,
      storeName,   // ユーザーがオートコンプリートで選んだ店舗名
      placeId,     // Google Place ID
      address,     // ユーザーが最終的に編集した住所
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
});

/***********************************************************
 * 3) Google Places Autocomplete
 ***********************************************************/
function initAutocomplete() {
  const storeNameInput = document.getElementById("storeNameInput");
  if (!storeNameInput) return;

  // Autocompleteを生成 (日本国内中心なら { componentRestrictions: { country: "jp" } } 等を指定可)
  const autocomplete = new google.maps.places.Autocomplete(storeNameInput, {
    fields: ["place_id", "formatted_address", "geometry", "name"]
  });

  // ユーザーが候補を選択したら
  autocomplete.addListener("place_changed", () => {
    const place = autocomplete.getPlace();
    if (!place) return;

    // hiddenにセット
    document.getElementById("googlePlaceId").value = place.place_id || "";
    document.getElementById("storeLat").value = place.geometry?.location?.lat() || "";
    document.getElementById("storeLng").value = place.geometry?.location?.lng() || "";

    // 店舗名 (※ place.nameをそのまま使うか要検討)
    if (place.name) {
      storeNameInput.value = place.name;
    }

    // 住所を編集可能フィールドに反映
    const addressInput = document.getElementById("addressInput");
    if (addressInput && place.formatted_address) {
      addressInput.value = place.formatted_address;
    }
  });
}
