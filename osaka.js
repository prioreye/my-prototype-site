console.log("大阪のページがロードされました");

// 仮の投稿データ（大阪エリア）
const areaPostData = [
    { user: "ユーザー1", store: "道頓堀たこ焼き店", review: "外はカリカリ、中はトロトロ！" },
    { user: "ユーザー2", store: "梅田串カツ屋", review: "揚げたてが最高でした！" },
    { user: "ユーザー3", store: "難波お好み焼き屋", review: "ボリューム満点で大満足！" },
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
