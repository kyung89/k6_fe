// 1.
const rollDice = (selector) => {
    const num = Math.floor(Math.random()* 5 + 1);
    document.querySelector(selector).setAttribute("src", `./img/${num}.png`);
};

const rollDiceByItem = (item) => {
    const num = Math.floor(Math.random()* 5 + 1);
    item.setAttribute("src", `./img/${num}.png`);
};

// 3.
const rollDiceByProf = () => {
    const imgs = document.querySelectorAll("div > img");
    imgs.forEach(img => {
        const num = Math.floor(Math.random()* 5 + 1);
        img.setAttribute("src", `./img/${num}.png`);
    });
    
};

// 2.
document.addEventListener("DOMContentLoaded", () => {
    // 버튼을 가져오기
    const bt1 = document.querySelector("#bt1")
    const imgs = document.querySelectorAll("div > img");

    // 버튼 이벤트 달기
    bt1.addEventListener("click", () => {
        // 1. 내 방법
        //rollDice("div > img:nth-child(1)");
        //rollDice("div > img:nth-child(2)");
        //rollDice("div > img:nth-child(3)");
        
        // 2. 내 방법 또다른 것
        //imgs.forEach(img => rollDiceByItem(img));

        // 3. 교수님 풀이
        // 이 함수는 그대로 두고 rollDice() 함수 내부에서 imgs 의 forEach 문으로 처리하는 방법도 있다.
        rollDiceByProf();
    });
});