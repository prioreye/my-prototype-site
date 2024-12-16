console.log("ホーム画面の機能準備完了");

// 翻訳データ
const translations = {
    ja: {
        title: "サイトタイトル",
        navHome: "ホーム",
        navPost: "投稿",
        navRanking: "ランキング",
        navMypage: "マイページ",
        areaHeading: "エリアを選んで探そう！",
        postsHeading: "新着投稿",
        rankingHeading: "ランキングトップ3",
    },
    en: {
        title: "Site Title",
        navHome: "Home",
        navPost: "Post",
        navRanking: "Ranking",
        navMypage: "My Page",
        areaHeading: "Explore by Area!",
        postsHeading: "Latest Posts",
        rankingHeading: "Top 3 Rankings",
    }
};

// エリアごとの遷移先ページ
const areaPages = {
    tokyo: "tokyo.html",
    kyoto: "kyoto.html",
    osaka: "osaka.html",
    hokkaido: "hokkaido.html",
    fukuoka: "fukuoka.html"
};

// エリア選択機能
document.getElementById("goToArea").addEventListener("click", function () {
    const selectedArea = document.getElementById("area").value;

    if (!selectedArea) {
        alert("エリアを選択してください。");
        return;
    }

    if (areaPages[selectedArea]) {
        window.location.href = areaPages[selectedArea];
    } else {
        alert("エリアに対応するページが存在しません。");
    }
});

// 新着投稿を表示
const postData = [
    { user: "ユーザー1", store: "店舗A", review: "素晴らしい体験でした！" },
    { user: "ユーザー2", store: "店舗B", review: "料理がとても美味しかったです。" },
    { user: "ユーザー3", store: "店舗C", review: "店員さんの対応が丁寧でした。" },
];

function displayNewPosts() {
    const container = document.getElementById("newPostsContainer");
    const latestPosts = postData.slice(0, 3);

    container.innerHTML = latestPosts
        .map(
            (post) =>
                `<div class="card">
                    <h3>${post.store}</h3>
                    <p>${post.review}</p>
                    <p><strong>${post.user}</strong></p>
                </div>`
        )
        .join("");
}

// ランキング表示と更新
let rankingData = [
    { rank: 1, user: "ユーザーA", points: 150 },
    { rank: 2, user: "ユーザーB", points: 120 },
    { rank: 3, user: "ユーザーC", points: 100 },
];

function displayRankingPreview() {
    const container = document.getElementById("rankingContainer");

    container.innerHTML = rankingData
        .map(
            (entry) =>
                `<div class="card">
                    <p>${entry.rank}位: ${entry.user}</p>
                    <p>ポイント: ${entry.points}</p>
                </div>`
        )
        .join("");
}

document.getElementById("updateRankingButton").addEventListener("click", function () {
    rankingData = [
        { rank: 1, user: "新ユーザーX", points: 200 },
        { rank: 2, user: "新ユーザーY", points: 180 },
        { rank: 3, user: "新ユーザーZ", points: 160 },
    ];
    displayRankingPreview();
});

// 言語切り替え機能
document.getElementById("languageSelect").addEventListener("change", function (event) {
    const selectedLanguage = event.target.value;
    const translation = translations[selectedLanguage];

    if (translation) {
        document.querySelector("h1").textContent = translation.title;
        document.querySelector("nav ul li:nth-child(1) a").textContent = translation.navHome;
        document.querySelector("nav ul li:nth-child(2) a").textContent = translation.navPost;
        document.querySelector("nav ul li:nth-child(3) a").textContent = translation.navRanking;
        document.querySelector("nav ul li:nth-child(4) a").textContent = translation.navMypage;
        document.querySelector("#area-selection label").textContent = translation.areaHeading;
        document.querySelector("#newPosts h2").textContent = translation.postsHeading;
        document.querySelector("#rankingPreview h2").textContent = translation.rankingHeading;
    }
});

// ページロード時にデータを表示
document.addEventListener("DOMContentLoaded", function () {
    displayNewPosts();
    displayRankingPreview();
});
