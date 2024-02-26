document.addEventListener("DOMContentLoaded", () => {

    const buttons = document.querySelectorAll("section button");

    for(let button of buttons) {
        button.addEventListener("click", () => handleClick(button.textContent));

        // 버튼1,버튼2,버튼3...
        // button.textContent.slice(-1) 사용
    }
});

const handleClick = (num) => {
    let computerNum = Math.floor(Math.random()* 5 + 1);

    const imgs = document.querySelectorAll("section img");
    imgs[0].setAttribute("src", `./img/${computerNum}.png`);
    imgs[1].setAttribute("src", `./img/${num}.png`);

    if(computerNum === parseInt(num)) 
        document.querySelector("#result").innerHTML = "맞음";
    else 
        document.querySelector("#result").innerHTML = "틀림";

    // ==  : 동등 비교 연산자 
    // === : 데이터 타입까지 비교한다: 문자열과 숫자 -> parseInt 사용
}

