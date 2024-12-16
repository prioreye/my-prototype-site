console.log("福岡のページがロードされました");

// 仮の投稿データ（福岡エリア）
const areaPostData = [
    { user: "ユーザー1", store: "博多ラーメン屋", review: "とんこつスープが濃厚で絶品！" },
    { user: "ユーザー2", store: "中洲居酒屋", review: "雰囲気と料理の質が最高でした。" },
    { user: "ユーザー3", store: "天神カフェ", review: "おしゃれな空間でゆっくり過ごせました。" },
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
