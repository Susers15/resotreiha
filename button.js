// すべてのボタンを取得
const buttons = document.querySelectorAll('.button');

// 各ボタンにイベントリスナーを追加
buttons.forEach(button => {
    // 元のテキストを保持する
    const originalText = button.textContent;

    button.addEventListener('mouseenter', () => {
        // ホバー時にボタンのテキストを変更
        button.textContent = '詳細を見る →';
    });

    button.addEventListener('mouseleave', () => {
        // ホバーが外れた時に元のテキストに戻す
        button.textContent = originalText;
    });
});
