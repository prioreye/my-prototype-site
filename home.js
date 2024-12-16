console.log("ホーム画面の機能準備完了");

// Vercelの環境変数を直接注入（静的に埋め込む）
const apiKey = process.env.NEXT_PUBLIC_OPENAI_API_KEY; // 環境変数を参照

// 翻訳APIを利用した動的翻訳
async function translateContent(targetLanguage) {
    const elementsToTranslate = document.querySelectorAll("h1, h2, p, label, a, button");

    const translations = await Promise.all(
        Array.from(elementsToTranslate).map(async (el) => {
            const originalText = el.textContent;
            const translatedText = await fetchTranslation(originalText, targetLanguage);
            return { element: el, translatedText };
        })
    );

    // 翻訳結果をDOMに反映
    translations.forEach(({ element, translatedText }) => {
        element.textContent = translatedText;
    });
}

async function fetchTranslation(text, targetLanguage) {
    const url = "https://api.openai.com/v1/chat/completions";

    const response = await fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${apiKey}`, // 環境変数を使用
        },
        body: JSON.stringify({
            model: "gpt-3.5-turbo",
            messages: [
                { role: "system", content: "You are a helpful translator." },
                { role: "user", content: `Translate the following text to ${targetLanguage}: "${text}"` },
            ],
            max_tokens: 100,
        }),
    });

    if (!response.ok) {
        throw new Error(`API request failed with status: ${response.status}`);
    }

    const data = await response.json();
    return data.choices[0].message.content.trim();
}

// 言語切り替えイベント
document.getElementById("languageSelect").addEventListener("change", function (event) {
    const selectedLanguage = event.target.value === "ja" ? "Japanese" : "English";

    // 翻訳APIを使用して動的に翻訳
    translateContent(selectedLanguage);
});

// ページロード時のデフォルトデータ
const postData = [
    { user: "ユーザー1", store: "店舗A", review: "素晴らしい体験でした！" },
    { user: "ユーザー2", store: "店舗B", review: "料理がとても美味しかったです。" },
    { user: "ユーザー3", store: "店舗C", review: "店員さんの対応が丁寧でした。" },
];

const rankingData = [
    { rank: 1, user: "ユーザーA", points: 150 },
    { rank: 2, user: "ユーザーB", points: 120 },
    { rank: 3, user: "ユーザーC", points: 100 },
];

function displayNewPosts() {
    const container = document.getElementById("newPostsContainer");
    const latestPosts = postData.slice(0, 3);

    container.innerHTML = latestPosts
        .map(
            (post) =>
                `<div class="card">
                    <h3>${post.store}</h3>
                    <p>${post.review}</p>
                    <p><strong>${post.user}</strong></p>
                </div>`
        )
        .join("");
}

function displayRankingPreview() {
    const container = document.getElementById("rankingContainer");

    container.innerHTML = rankingData
        .map(
            (entry) =>
                `<div class="card">
                    <p>${entry.rank}位: ${entry.user}</p>
                    <p>ポイント: ${entry.points}</p>
                </div>`
        )
        .join("");
}

// ページロード時にデータを表示
document.addEventListener("DOMContentLoaded", function () {
    displayNewPosts();
    displayRankingPreview();
});
