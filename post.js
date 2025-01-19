// post.js

document.addEventListener("DOMContentLoaded", function() {
  const form = document.getElementById("reviewForm");

  form.addEventListener("submit", function(e) {
    e.preventDefault(); // 本来のフォーム送信を止める

    // フォーム入力値を取得
    const storeName = document.getElementById("storeName").value.trim();
    const location = document.getElementById("location").value.trim();
    const recommendMenu = document.getElementById("recommendMenu").value.trim();
    const comment = document.getElementById("comment").value.trim();
    const photoFile = document.getElementById("photo").files[0];

    // バリデーションチェック（HTML5のrequiredでもOK）
    if (!storeName || !location || !recommendMenu || !comment) {
      alert("必須項目を全て入力してください。");
      return;
    }

    // TODO: ここでバックエンドに送信 or ローカルストレージに保存など
    // 例: 簡易的にJSON化してconsole.logで確認
    const postData = {
      storeName,
      location,
      recommendMenu,
      comment,
      // photoは一旦ファイル名だけ取得（実際にはFormDataで送るなど工夫が必要）
      photoName: photoFile ? photoFile.name : "",
      // areaId, gourmetId などがあるなら hidden から取得して追加
    };

    console.log("投稿データ:", postData);

    alert("投稿が完了しました！\n" + JSON.stringify(postData, null, 2));

    // フォームをリセット
    form.reset();
  });
});
