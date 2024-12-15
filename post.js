console.log("投稿ページ準備完了");

// 投稿フォームの動作
document.getElementById("submitReviewButton").addEventListener("click", function () {
    const storeName = document.getElementById("storeName").value;
    const reviewContent = document.getElementById("reviewContent").value;

    if (storeName === "" || reviewContent === "") {
        alert("店舗名とレビューを入力してください。");
        return;
    }

    // 現在の日時を取得
    const currentDate = new Date().toISOString();

    // ローカルストレージに保存
    const reviews = JSON.parse(localStorage.getItem("reviews")) || [];
    reviews.push({ storeName, reviewContent, date: currentDate });
    localStorage.setItem("reviews", JSON.stringify(reviews));

    alert("投稿が完了しました！");
    // フォームをリセット
    document.getElementById("storeName").value = "";
    document.getElementById("reviewContent").value = "";
});
