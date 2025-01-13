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
  // 他のエリア（省略）
};

// メインエリア選択イベント
document.getElementById("areaSelect").addEventListener("change", function () {
  const selectedArea = this.value;
  const detailContainer = document.getElementById("detailAreaContainer");
  const regionSelect = document.getElementById("regionSelect");
  const subRegionSelect = document.getElementById("subRegionSelect");

  // HTML要素の存在確認
  if (!regionSelect || !subRegionSelect || !detailContainer) {
      console.error("必要なHTML要素が不足しています。HTMLを確認してください。");
      return;
  }

  // 各セレクターを初期化
  regionSelect.innerHTML = '<option value="" disabled selected>地域を選択...</option>';
  subRegionSelect.innerHTML = '<option value="" disabled selected>詳細エリアを選択...</option>';
  subRegionSelect.style.display = "none";

  // エリア選択時に詳細エリアを更新
  if (selectedArea && areaDetails[selectedArea]) {
      const regions = areaDetails[selectedArea];
      for (const region in regions) {
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

// 地域選択イベント
document.getElementById("regionSelect").addEventListener("change", function () {
  const selectedArea = document.getElementById("areaSelect").value;
  const selectedRegion = this.value;
  const subRegionSelect = document.getElementById("subRegionSelect");

  // 初期化
  subRegionSelect.innerHTML = '<option value="" disabled selected>詳細エリアを選択...</option>';

  if (selectedArea && selectedRegion && areaDetails[selectedArea][selectedRegion]) {
      const subRegions = areaDetails[selectedArea][selectedRegion];
      subRegions.forEach((subRegion) => {
          const option = document.createElement("option");
          option.value = subRegion;
          option.textContent = subRegion;
          subRegionSelect.appendChild(option);
      });
      subRegionSelect.style.display = "block";
  } else {
      subRegionSelect.style.display = "none";
  }
});

// 最終決定ボタンのイベント
document.getElementById("confirmAreaButton").addEventListener("click", function () {
  const mainArea = document.getElementById("areaSelect").value;
  const region = document.getElementById("regionSelect").value;
  const subRegion = document.getElementById("subRegionSelect").value;

  if (mainArea && region && subRegion) {
      alert(`選択されたエリア: ${mainArea} - ${region} - ${subRegion}`);
      // ページ遷移のロジックをここに追加
  } else {
      alert("全てのエリアを選択してください！");
  }
});

// 言語切り替え対応
function applyLanguage(language) {
  const translations = {
      ja: {
          areaPlaceholder: "エリアを選択...",
          regionPlaceholder: "地域を選択...",
          subRegionPlaceholder: "詳細エリアを選択...",
          confirmButton: "決定"
      },
      en: {
          areaPlaceholder: "Select an Area...",
          regionPlaceholder: "Select a Region...",
          subRegionPlaceholder: "Select a Sub-Region...",
          confirmButton: "Submit"
      }
  };

  const content = translations[language];

  // 各セレクターのプレースホルダーを更新
  document.getElementById("areaSelect").options[0].text = content.areaPlaceholder;
  document.getElementById("regionSelect").options[0].text = content.regionPlaceholder;
  document.getElementById("subRegionSelect").options[0].text = content.subRegionPlaceholder;
  document.getElementById("confirmAreaButton").textContent = content.confirmButton;
}

// ページロード時に言語を適用
document.addEventListener("DOMContentLoaded", function () {
  const savedLanguage = localStorage.getItem("selectedLanguage") || "ja";
  applyLanguage(savedLanguage);
});
