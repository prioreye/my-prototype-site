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
  // その他エリアデータ（省略）
};

// メインエリア選択イベント
document.getElementById("areaSelect").addEventListener("change", function () {
  const selectedArea = this.value;
  const detailContainer = document.getElementById("detailAreaContainer");
  const regionSelect = document.getElementById("regionSelect");
  const subRegionSelect = document.getElementById("subRegionSelect");

  if (!regionSelect || !subRegionSelect || !detailContainer) {
      console.error("必要な要素が存在しません。HTMLを確認してください。");
      return;
  }

  // 初期化
  regionSelect.innerHTML = '<option value="" disabled selected>地域を選択...</option>';
  subRegionSelect.innerHTML = '<option value="" disabled selected>詳細エリアを選択...</option>';
  subRegionSelect.style.display = "none";

  // エリアが選択された場合
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

  if (!selectedArea || !subRegionSelect) {
      console.error("選択データが正しくありません。");
      return;
  }

  // 初期化
  subRegionSelect.innerHTML = '<option value="" disabled selected>詳細エリアを選択...</option>';

  // 詳細エリアを更新
  if (selectedRegion && areaDetails[selectedArea][selectedRegion]) {
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
      // ページ遷移ロジックをここに追加
  } else {
      alert("全てのエリアを選択してください！");
  }
});
