// 1.
const rollDice = (selector) => {
    const num = Math.floor(Math.random()* 5 + 1);
    document
        .querySelector(selector).setAttribute("src", `./img/${num}.png`);
};

// 2.
document.addEventListener("DOMContentLoaded", () => {
    // 버튼을 가져오기
    // const bt1 = document.querySelector("button")
    // const bt1 = document.querySelector("div > button")
    const bt1 = document.querySelector("#bt1")
    
    // 버튼 이벤트 달기
    bt1.addEventListener("click", () => {
        rollDice("#img1");
        rollDice("#img2");
        rollDice("#img3");
          
    });
});