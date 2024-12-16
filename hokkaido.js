console.log("北海道のページがロードされました");

// 仮の投稿データ（北海道エリア）
const areaPostData = [
    { user: "ユーザー1", store: "札幌ラーメン横丁", review: "味噌ラーメンが絶品！" },
    { user: "ユーザー2", store: "函館海鮮市場", review: "新鮮な海の幸が堪能できます。" },
    { user: "ユーザー3", store: "小樽スイーツ店", review: "地元のミルクを使ったスイーツが最高！" },
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
