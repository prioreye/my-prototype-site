console.log("ホーム画面の機能準備完了");

// 固定テキストの翻訳データ
const staticTranslations = {
    ja: {
        pageTitle: "ホーム - 新着投稿とランキングプレビュー",
        siteTitle: "サイトタイトル",
        homeLink: "ホーム",
        postLink: "投稿",
        rankingLink: "ランキング",
        mypageLink: "マイページ",
        areaSelectionTitle: "エリアを選んで探そう！",
        areaLabel: "エリアを選択：",
        newPostsLabel: "新着投稿",
        rankingLabel: "ランキングトップ3",
        contactLink: "お問い合わせ",
        aboutLink: "サイトについて"
    },
    en: {
        pageTitle: "Home - New Posts and Ranking Preview",
        siteTitle: "Site Title",
        homeLink: "Home",
        postLink: "Post",
        rankingLink: "Ranking",
        mypageLink: "My Page",
        areaSelectionTitle: "Explore by Area!",
        areaLabel: "Select an Area:",
        newPostsLabel: "New Posts",
        rankingLabel: "Top 3 Rankings",
        contactLink: "Contact Us",
        aboutLink: "About the Site"
    }
};

// 固定テキストを翻訳する関数
function translateStaticContent() {
    const selectedLanguage = document.getElementById("languageSelect").value;

    const translations = staticTranslations[selectedLanguage];

    // 各要素のテキストを更新
    document.getElementById("pageTitle").textContent = translations.pageTitle;
    document.getElementById("pageTitle").setAttribute("title", translations.pageTitle);
    document.getElementById("homeLink").textContent = translations.homeLink;
    document.getElementById("postLink").textContent = translations.postLink;
    document.getElementById("rankingLink").textContent = translations.rankingLink;
    document.getElementById("mypageLink").textContent = translations.mypageLink;
    document.getElementById("areaSelectionTitle").textContent = translations.areaSelectionTitle;
    document.getElementById("areaLabel").textContent = translations.areaLabel;
    document.getElementById("newPostsLabel").textContent = translations.newPostsLabel;
    document.getElementById("rankingLabel").textContent = translations.rankingLabel;
    document.getElementById("contactLink").textContent = translations.contactLink;
    document.getElementById("aboutLink").textContent = translations.aboutLink;
}

// 言語選択イベントリスナー
document.getElementById("languageSelect").addEventListener("change", function () {
    translateStaticContent();
});

// ページロード時の初期化
document.addEventListener("DOMContentLoaded", function () {
    translateStaticContent();
});
