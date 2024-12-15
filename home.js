console.log("エリア選択機能とホーム画面の追加機能準備完了");

// 仮の投稿データ
const postData = [
    { user: "ユーザー1", store: "店舗A", review: "素晴らしい体験でした！" },
    { user: "ユーザー2", store: "店舗B", review: "料理がとても美味しかったです。" },
    { user: "ユーザー3", store: "店舗C", review: "店員さんの対応が丁寧でした。" },
    { user: "ユーザー4", store: "店舗D", review: "景色が最高でした！" },
];

// 仮のランキングデータ
let rankingData = [
    { rank: 1, user: "ユーザーA", points: 150 },
    { rank: 2, user: "ユーザーB", points: 120 },
    { rank: 3, user: "ユーザーC", points: 100 },
];

// 新着投稿を表示
function displayNewPosts() {
    const container = document.getElementById("newPostsContainer");
    const latestPosts = postData.slice(0, 3); // 最新3件

    const postsHTML = latestPosts
        .map(
            (post) =>
                `<div class="card">
                    <h3>${post.store}</h3>
                    <p>${post.review}</p>
                    <p><strong>${post.user}</strong></p>
                </div>`
        )
        .join("");

    container.innerHTML = postsHTML;
}

// ランキングプレビューを表示
function displayRankingPreview() {
    const container = document.getElementById("rankingContainer");

    const rankingsHTML = rankingData
        .map(
            (entry) =>
                `<div class="card">
                    <p>${entry.rank}位: ${entry.user}</p>
                    <p>ポイント: ${entry.points}</p>
                </div>`
        )
        .join("");

    container.innerHTML = rankingsHTML;
}

// ランキングを更新
function updateRanking() {
    rankingData = [
        { rank: 1, user: "新ユーザーX", points: 200 },
        { rank: 2, user: "新ユーザーY", points: 180 },
        { rank: 3, user: "新ユーザーZ", points: 160 },
    ];
    displayRankingPreview();
}

// ページが読み込まれたら実行
document.addEventListener("DOMContentLoaded", function () {
    displayNewPosts();
    displayRankingPreview();

    // ランキング更新ボタンにイベントを追加
    document.getElementById("updateRankingButton").addEventListener("click", updateRanking);
});
