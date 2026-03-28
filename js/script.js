// 全体部分

// おみくじ部分
const omikujiButton = document.getElementById("omikuji-button");
const omikujiResult = document.getElementById("omikuji-result");

omikujiButton.addEventListener("click", () => {
    const rand = Math.floor(Math.random() * 3)
    
    if (rand === 0) {
        omikujiResult.textContent = "大吉";
    } else if (rand === 1) {
        omikujiResult.textContent = "中吉";
    } else {
        omikujiResult.textContent = "小吉";
    }
});
