console.log("京都のページがロードされました");

// 仮の投稿データ（京都エリア）
const areaPostData = [
    { user: "ユーザー1", store: "嵐山カフェ", review: "竹林の景色が美しいです！" },
    { user: "ユーザー2", store: "祇園寿司", review: "京都の伝統的な味を堪能しました。" },
    { user: "ユーザー3", store: "伏見酒蔵", review: "地元の日本酒が最高でした。" },
];

// エリア投稿を表示
function displayAreaPosts() {
    const container = document.getElementById("areaPostsContainer");

    const postsHTML = areaPostData
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

// ページが読み込まれたら実行
document.addEventListener("DOMContentLoaded", displayAreaPosts);
