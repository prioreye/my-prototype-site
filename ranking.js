console.log("ランキングページ準備完了");

// ランキングデータを生成
const rankings = [
    { rank: 1, user: "ユーザーA", points: 150 },
    { rank: 2, user: "ユーザーB", points: 120 },
    { rank: 3, user: "ユーザーC", points: 100 },
];

// ランキングを表示する関数
function displayRankings() {
    const rankingContainer = document.getElementById("rankingData");

    if (!rankings || rankings.length === 0) {
        rankingContainer.innerHTML = "<p>ランキングデータがありません。</p>";
        return;
    }

    const rankingList = rankings
        .map((entry) => {
            return `<p>${entry.rank}位: ${entry.user}（${entry.points}ポイント）</p>`;
        })
        .join("");

    rankingContainer.innerHTML = rankingList;
}

// ページが読み込まれたらランキングを表示
document.addEventListener("DOMContentLoaded", displayRankings);
