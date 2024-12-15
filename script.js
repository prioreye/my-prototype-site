console.log("プロトタイプ準備完了");

// ランキングデータの更新
document.getElementById("updateRankingButton").addEventListener("click", function () {
    const rankingData = document.getElementById("rankingData");
    rankingData.innerHTML = `
        <p>1位: ユーザーX</p>
        <p>2位: ユーザーY</p>
        <p>3位: ユーザーZ</p>
    `;
    alert("ランキングを更新しました！");
});

// 投稿フォームの動作
document.getElementById("submitReviewButton").addEventListener("click", function () {
    const storeName = document.getElementById("storeName").value;
    const reviewContent = document.getElementById("reviewContent").value;

    if (storeName === "" || reviewContent === "") {
        alert("店舗名とレビューを入力してください。");
    } else {
        console.log("新しい投稿:");
        console.log("店舗名:", storeName);
        console.log("レビュー内容:", reviewContent);
        alert("投稿が完了しました！");
    }
});
