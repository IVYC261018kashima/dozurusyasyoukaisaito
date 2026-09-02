// 5人のメンバーデータ（配列）
const memberData = [
    {
        name: "ドズル",
        title: "ロジカルゴリラ社長",
        desc: `
            <ul>
                <li>メンバーカラー：赤</li>
                <li>誕生日：１１月２１日</li>
                <li>趣味・特技：ゲーム・サウナ</li>
                <li>好きな食べ物：カレー・うどん・牛丼・寿司・ガリ</li>
                <li>おともだち：ビッグボス</li>
                <li>MBTI：ENFP（運動家）<small>（動画しらべ）</small></li>
                <li>元医大生。グループのリーダーで社長。</li>
                <li>現在<small>（<span class='last-update'></span>時点）</small>、１児のパパ</li>
            </ul>
        `,
        bgColor: "#ff7f7f",
        imgSrc: "img/dozle.jpg"
    },
    {
        name: "ぼんじゅうる",
        title: "（心やさしい）卑怯者",
        desc: `
            <ul>
                <li>メンバーカラー：紫</li>
                <li>誕生日：５月３０日</li>
                <li>趣味・特技：漫画を読むこと</li>
                <li>好きな食べ物：タン塩・貝</li>
                <li>おともだち：グラサンバード</li>
                <li>MBTI：ESFP（エンターテイナー）<small>（動画しらべ）</small></li>
                <li>鉄千会長</li>
                <li>最年長</li>
            </ul>
        `,
        bgColor: "#bf7fff",
        imgSrc: "img/bon.jpg"
    },
    {
        name: "おんりー",
        title: "スピードスター",
        desc: `
        <ul>
            <li>メンバーカラー：黄色</li>
            <li>誕生日：９月９日</li>
            <li>趣味・特技：ゲーム</li>
            <li>好きな食べ物：寿司・グミ・ラーメン</li>
            <li>おともだち：いなりー</li>
            <li>MBTI：INTJ（建築家）<small>（動画しらべ）</small></li>
            <li>エンドラＲＴＡで日本一になったことがある</li>
            <li>最年少</li>
        </ul>
        `,
        bgColor: "#ffff7f",
        imgSrc: "img/only.jpg"
    },
    {
        name: "おらふくん",
        title: "あなたの心を狙い撃ち",
        desc: `
        <ul>
            <li>メンバーカラー：水色</li>
            <li>誕生日：５月２２日</li>
            <li>趣味・特技：サウナ・カラオケ</li>
            <li>好きな食べ物：唐揚げ・ラーメン・きくらげの卵とじ・数の子・炒飯</li>
            <li>おともだち：雪だるまくん</li>
            <li>MBTI：ENFP（運動家）<small>（動画しらべ）</small></li>
            <li>ドズル社加入時はマイクラ初心者だった</li>
            <li>ドズル社メンバー唯一の関西出身</li>
        </ul>
        `,
        bgColor: "#9ce0f7",
        imgSrc: "img/orafu.jpg"
    },
    {
        name: "おおはらMEN",
        title: "ズボラな匠",
        desc: `
        <ul>
            <li>メンバーカラー：ピンク</li>
            <li>誕生日：７月２８日</li>
            <li>趣味・特技：ゲーム・カードゲーム・サウナ・キャンプ</li>
            <li>好きな食べ物：グリーンカレー・ケバブ</li>
            <li>おともだち：MENフクロウ</li>
            <li>MBTI：INFP（仲介者）<small>（動画しらべ）</small></li>
            <li>プロマインクラフター</li>
            <li>公務員を目指していたこともある</li>
        </ul>
        `,
        bgColor: "#f38eb4",
        imgSrc: "img/men.jpg"
    }
];


// メンバーを切り替える
function showMember(index) {
    // データを書き換える
    document.getElementById("member-name").textContent = memberData[index].name;
    document.getElementById("member-title").textContent = memberData[index].title;
    document.getElementById("member-desc").innerHTML = memberData[index].desc;
    document.getElementById("member-card").style.backgroundColor = memberData[index].bgColor;
    document.getElementById("member-img").src = memberData[index].imgSrc;
    document.getElementById("member-img").alt = memberData[index].name;
    
    // ボタンの「アクティブ状態（色が変わるやつ）」を切り替える
    const buttons = document.querySelectorAll(".member-btn");
    buttons.forEach((btn, i) => {
        if (i === index) {
            btn.classList.add("active");
        } else {
            btn.classList.remove("active");
        }
    });

    // カードに一瞬アニメーションを再適用する
    const card = document.getElementById("member-card");
    card.style.animation = 'none';
    card.offsetHeight; /* 擬似的にブラウザに再描画させる魔法の1行 */
    card.style.animation = null;

    // メンバーを切り替えた瞬間に、最終更新年月を書き換える処理
    updateLastModifiedDate();
}

//  日付を更新する処理（独立した関数）
function updateLastModifiedDate() {
    const lastModified = new Date(document.lastModified);
    const year = lastModified.getFullYear();
    const month = lastModified.getMonth() + 1;
    const formattedDate = `${year}年${month}月`;

    const updateElements = document.querySelectorAll('.last-update');
    updateElements.forEach(element => {
        element.textContent = formattedDate;
    });
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

// ページが読み込まれたら実行
document.addEventListener('DOMContentLoaded', () => {
    // このファイル（HTML）が最後に保存・更新された日時を取得
    const lastModified = new Date(document.lastModified);
    
    const year = lastModified.getFullYear();   // 修正した時の「年」
    const month = lastModified.getMonth() + 1; // 修正した時の「月」

    // 年月を「YYYY年M月」の形式に作成
    const formattedDate = `${year}年${month}月`;

    // .last-update がついている場所に「ファイルを更新した年月」をセット
    const updateElements = document.querySelectorAll('.last-update');
    updateElements.forEach(element => {
        element.textContent = formattedDate;
    });
});