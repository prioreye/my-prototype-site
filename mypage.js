console.log("マイページ準備完了");

// ローカルストレージからレビューを取得して表示
function loadReviews(sortOrder = "newest") {
    const reviewHistory = document.getElementById("reviewHistory");
    let reviews = JSON.parse(localStorage.getItem("reviews")) || [];

    if (reviews.length === 0) {
        reviewHistory.innerHTML = "<p>投稿履歴はありません。</p>";
        return;
    }

    // ソート処理
    if (sortOrder === "newest") {
        reviews.sort((a, b) => new Date(b.date) - new Date(a.date));
    } else if (sortOrder === "oldest") {
        reviews.sort((a, b) => new Date(a.date) - new Date(b.date));
    }

    // レビュー履歴を表示
    const historyList = reviews.map((review, index) => {
        const formattedDate = new Date(review.date).toLocaleString(); // 日時をフォーマット
        return `
            <div>
                <p>店舗名: ${review.storeName}<br>
                レビュー: ${review.reviewContent}<br>
                日時: ${formattedDate}</p>
                <button onclick="deleteReview(${index})">削除</button>
            </div>
            <hr>
        `;
    }).join("");
    reviewHistory.innerHTML = historyList;
}

// レビューを削除
function deleteReview(index) {
    let reviews = JSON.parse(localStorage.getItem("reviews")) || [];
    reviews.splice(index, 1);
    localStorage.setItem("reviews", JSON.stringify(reviews));
    loadReviews(); // 再読み込み
}

// ソートボタンの動作
document.getElementById("sortNewest").addEventListener("click", function () {
    loadReviews("newest");
});
document.getElementById("sortOldest").addEventListener("click", function () {
    loadReviews("oldest");
});

// 初期ロード
document.addEventListener("DOMContentLoaded", function () {
    loadReviews();
});
