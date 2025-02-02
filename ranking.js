document.addEventListener("DOMContentLoaded", function() {
  // 1) 多言語初期化
  const savedLang = localStorage.getItem("selectedLanguage") || "ja";
  applyRankingLanguage(savedLang);
  document.getElementById("headerLanguageSelect").addEventListener("change", function() {
    localStorage.setItem("selectedLanguage", this.value);
    applyRankingLanguage(this.value);
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
    // reset
    regionContainer.style.display = "none";
    subRegionContainer.style.display = "none";
    gourmetContainer.style.display = "none";
    regionSelect.innerHTML = '<option value="" disabled selected>選択してください</option>';
    subRegionSelect.innerHTML = '<option value="" disabled selected>選択してください</option>';
    gourmetSelect.innerHTML = '<option value="" disabled selected>名物グルメを選択...</option>';

    // データあるなら生成
    const selectedArea = this.value;
    if (selectedArea && rankingData[selectedArea]) {
      const regionData = rankingData[selectedArea];
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

    const areaVal = areaSelect.value;
    const regionVal = this.value;
    if (areaVal && regionVal && rankingData[areaVal][regionVal]) {
      const subData = rankingData[areaVal][regionVal];
      for (const subRegionKey in subData) {
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

    const areaVal = areaSelect.value;
    const regionVal = regionSelect.value;
    const subRegionVal = this.value;
    if (areaVal && regionVal && subRegionVal && rankingData[areaVal][regionVal][subRegionVal]) {
      const gourmetList = rankingData[areaVal][regionVal][subRegionVal];
      gourmetList.forEach(g => {
        const op = document.createElement("option");
        op.value = g;
        op.textContent = g;
        gourmetSelect.appendChild(op);
      });
      gourmetContainer.style.display = "block";
    }
  });

  // 決定ボタン (モック)
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
    alert(`【モック】「${areaVal} / ${regionVal} / ${subRegionVal} / ${gourmetVal}」のランキング`);
  });
});

// データ: home同様
const rankingData = {
  tokyo: {
    "23区内": {
      "新宿": ["ラーメン", "焼肉", "寿司"],
      // ...
    },
    // ...
  },
  // ...
};

// 多言語 (rankingだけの場合の例)
function applyRankingLanguage(lang) {
  const trans = {
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
      rankingTitle: "Famous Gourmet Ranking",
      rankingAreaLabel: "Select an Area:",
      rankingRegionLabel: "Select a Region:",
      rankingSubRegionLabel: "Select a Sub-Region:",
      rankingGourmetLabel: "Select a Gourmet:",
      confirmButton: "Submit",
      contactLink: "Contact Us",
      aboutLink: "About Us"
    }
  };

  const c = trans[lang] || trans.ja;

  document.querySelector(".site-title").textContent = c.siteTitle;
  document.getElementById("homeLink").textContent = c.homeLink;
  document.getElementById("postLink").textContent = c.postLink;
  document.getElementById("rankingLink").textContent = c.rankingLink;
  document.getElementById("mypageLink").textContent = c.mypageLink;

  document.getElementById("rankingTitle").textContent = c.rankingTitle;
  document.getElementById("rankingAreaLabel").textContent = c.rankingAreaLabel;
  document.getElementById("rankingRegionLabel").textContent = c.rankingRegionLabel;
  document.getElementById("rankingSubRegionLabel").textContent = c.rankingSubRegionLabel;
  document.getElementById("rankingGourmetLabel").textContent = c.rankingGourmetLabel;
  document.getElementById("btnShowRanking").textContent = c.confirmButton;

  document.getElementById("contactLink").textContent = c.contactLink;
  document.getElementById("aboutLink").textContent = c.aboutLink;
}
