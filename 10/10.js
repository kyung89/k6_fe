// 몫으로 구하기
// 1 ~ 9: 0
// 10~19: 1
// 20~29; 2
// 30~39: 3
// 40~49: 4

document.addEventListener("DOMContentLoaded", () => {

    const btn = document.querySelector("button");
    const numDisp = document.querySelector("#numDisp");

    let nums = [];

    btn.addEventListener('click', () => {
        // 1 ~ 45 랜덤 숫자 줄복되지 않게 7개 만들기
        //nums = []; // 버튼을 누를 때마다 새로 만들어져야 되기에 배열 초기화 필요
        nums.length = 0; // length 이용해서도 배열 초기화가 가능하다
        while(nums.length < 7) {
            let n = Math.floor(Math.random()*45) + 1;
            if(!nums.includes(n)) nums.push(n); // 숫자 중복없이 하기
        }

        // 구현 첫번재 방법
        //let tags = "";
        //nums.map((num, index) => {
        //    tags += `<span class='sp${Math.floor(num/10)}'>${num}</span>`;
        //    if (index == 5) tags += "<span>+</span>";
        //})
        //numDisp.innerHTML = tags;

        // 구현 두번째 방법: 앞으로 리액트 쓰면 전부 배열로 담아가지고 출력할거임!
        //let tags = [];
        //tags = nums.map(num => `<span class='sp${Math.floor(num/10)}'>${num}</span>`);
        //tags.splice(6, 0, "<span>+</span>");
        //// tags 를 문자열로 만드는 첫번째 방법: toString() 과 replace() 사용하기  
        //numDisp.innerHTML = tags.toString().replaceAll(',', '');      
        //// tags 를 문자열로 만드는 두번째 방법: join() 사용하기
        ////numDisp.innerHTML = tags.join("");    

        // 구현 세번재 방법: tags 변수 사용 안하기
        nums = nums.map(num => `<span class='sp${Math.floor(num/10)}'>${num}</span>`);
        nums.splice(6, 0, "<span>+</span>");
        numDisp.innerHTML = nums.toString().replaceAll(',', '');   
    });

});