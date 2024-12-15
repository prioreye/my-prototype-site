console.log("東京のページがロードされました");

// 仮の投稿データ（東京エリア）
const areaPostData = [
    { user: "ユーザー1", store: "浅草カフェ", review: "下町の雰囲気が最高！" },
    { user: "ユーザー2", store: "銀座寿司", review: "高級感がありつつもリラックスできました。" },
    { user: "ユーザー3", store: "新宿ラーメン", review: "濃厚スープが忘れられません！" },
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
