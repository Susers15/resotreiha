document.querySelector("body").addEventListener("dragover" ,function(event) {
    event.preventDefault();
});

document.querySelector("body").addEventListener("drop", function(event) {
    event.preventDefault();

    const file = event.dataTransfer.files[0];
    console.log(file);
    if (file && file.type.match(/^image\//)) {
        // 背景画像のフェードイン・フェードアウト
        const reader = new FileReader();
        reader.onload = function(event) {
            // 画像を背景に設定する前にフェードアウト
            document.body.style.transition = 'background-image 0.3s ease-in-out, opacity 0.3s ease-in-out';
            document.body.style.opacity = 0;

            // 新しい背景画像をセットする
            setTimeout(function() {
                document.body.style.backgroundImage = `url(${event.target.result})`;

                // 背景画像の切り替え後にフェードイン
                setTimeout(function() {
                    document.body.style.opacity = 1;
                }, 50);  // 少し待ってからフェードイン
            }, 300);  // フェードアウトの時間と同じだけ待つ
        };
        reader.readAsDataURL(file);
    }
});