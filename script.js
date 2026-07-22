// 5人のメンバーデータ（配列）
const memberData = [
    {
        name: "ドズル",
        title: "ロジカルゴリラ社長",
        desc: "<ul><li>メンバーカラー：赤</li><li>グループのリーダーで社長。</li><li>現在<small>（<span class='last-update'></span>時点）</small>、１児のパパ</li></ul>",
        bgColor: "#ff7f7f",
        imgSrc: "img/dozle.jpg"
    },
    {
        name: "ぼんじゅうる",
        title: "（心やさしい）卑怯者",
        desc: "<ul><li>メンバーカラー：紫</li><li>最年長</li></ul>",
        bgColor: "#bf7fff",
        imgSrc: "img/bon.jpg"
    },
    {
        name: "おんりー",
        title: "スピードスター",
        desc: "<ul><li>メンバーカラー：黄色</li><li>エンドラＲＴＡで日本一になったことがある</li></ul>",
        bgColor: "#ffff7f",
        imgSrc: "img/only.jpg"
    },
    {
        name: "おらふくん",
        title: "あなたの心を狙い撃ち",
        desc: "<ul><li>メンバーカラー：水色</li><li>ドズル社加入時はマイクラ初心者だった</li></ul>",
        bgColor: "#9ce0f7",
        imgSrc: "img/orafu.jpg"
    },
    {
        name: "おおはらMEN",
        title: "ズボラな匠",
        desc: "<ul><li>メンバーカラー：ピンク</li><li>建築がめちゃくちゃ上手い</li></ul>",
        bgColor: "#f38eb4",
        imgSrc: "img/men.jpg"
    }
];


// メンバーを切り替える
function showMember(index) {
    // 1. データを書き換える
    document.getElementById("member-name").textContent = memberData[index].name;
    document.getElementById("member-title").textContent = memberData[index].title;
    document.getElementById("member-desc").innerHTML = memberData[index].desc;
    document.getElementById("member-card").style.backgroundColor = memberData[index].bgColor;
    document.getElementById("member-img").src = memberData[index].imgSrc;
    document.getElementById("member-img").alt = memberData[index].name;
    
    // 2. ボタンの「アクティブ状態（色が変わるやつ）」を切り替える
    const buttons = document.querySelectorAll(".member-btn");
    buttons.forEach((btn, i) => {
        if (i === index) {
            btn.classList.add("active");
        } else {
            btn.classList.remove("active");
        }
    });

    // 3. カードに一瞬アニメーションを再適用する
    const card = document.getElementById("member-card");
    card.style.animation = 'none';
    card.offsetHeight; /* 擬似的にブラウザに再描画させる魔法の1行 */
    card.style.animation = null;

    // メンバーを切り替えた瞬間に、最終更新年月を書き換える処理
    updateLastModifiedDate();
}

// ページが読み込まれたとき（最初の1回）に実行する処理
window.addEventListener('DOMContentLoaded', () => {
    updateLastModifiedDate();
});

// 共通で使える「最終更新年月を適用する」関数を定義しておく
function updateLastModifiedDate() {
    const lastModifiedDate = new Date(document.lastModified);
    if (!isNaN(lastModifiedDate.getTime())) {
        const year = lastModifiedDate.getFullYear();
        const month = lastModifiedDate.getMonth() + 1;
        const dateString = `${year}年${month}月`;

        // ページ内にある「class="last-update"」がついた要素をすべて探して書き換える
        const updateElements = document.querySelectorAll('.last-update');
        updateElements.forEach(element => {
            element.textContent = dateString;
        });
    }
}