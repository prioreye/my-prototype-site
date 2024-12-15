console.log("エリア選択機能準備完了");

document.getElementById("goToArea").addEventListener("click", function () {
    const selectedArea = document.getElementById("area").value;

    if (!selectedArea) {
        alert("エリアを選択してください。");
        return;
    }

    // 仮の遷移先URL（今後、実際のエリアページに置き換えます）
    const areaPages = {
        tokyo: "tokyo.html",
        osaka: "osaka.html",
        kyoto: "kyoto.html",
        hokkaido: "hokkaido.html",
        fukuoka: "fukuoka.html"
    };

    // 選択されたエリアのページへ遷移
    window.location.href = areaPages[selectedArea];
});
