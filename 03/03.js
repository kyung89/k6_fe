// DOM TREE 가 완성된 후 실행
document.addEventListener("DOMContentLoaded", () => {
    console.log("DOMContentLoaded ok"); // 웹 콘솔에 출력

    // 버튼 생성
    const bt3 = document.createElement("button");
    const bt3Txt = document.createTextNode("버튼3");
    bt3.appendChild(bt3Txt);
    bt3.setAttribute("id", "bt3"); // id 속성 달기

    const bt4 = document.createElement("button");
    const bt4Txt = document.createTextNode("버튼4");
    bt4.appendChild(bt4Txt);
    bt4.setAttribute("id", "bt4");

    // 버튼 추가하기
    document.querySelector("#btArea2").append(bt3);
    document.querySelector("#btArea2").append(bt4);
    
    // 버튼 이벤트 달기
    bt3.addEventListener("click", ()=>{
        handleClick(3);
    });
    bt4.addEventListener("click", ()=>{
        handleClick(4);
    });
});

/*
 * 함수 작성 2: 화살표 함수
 */

// const: 상수 선언, 함수도 넣기 가능
// let: 변수 선언
const handleClick = (n) => {

    let msg;
    if (n == 1) msg = "<h2>안녕하세요</h2>";
    else if (n == 2) msg = "<h2>안녕히 가세요</h2>";
    else if (n == 3) msg = `<h2>버튼 ${n}</h2>`;
    else if (n == 4) msg = `<h2>버튼 ${n}</h2>`;
    document.querySelector("#msgArea").innerHTML = msg;
    // callback 함수를 쓸 때 사용할 예정
}

/*
 * 함수 작성 1
 */
// function handleClick(n) {
//     // 메시지 영역 가져오기 1
//     // document.getElementById("msgArea").innerHTML = "안녕하세요";

//     // 메시지 영역 가져오기 2
//     // document.querySelector("#msgArea").innerHTML = "<h2>버튼 " + n + " 이 눌러졌습니다.</h2>";

//     document.querySelector("#msgArea").innerHTML = `<h2>버튼 ${n} 이 눌러졌습니다.</h2>`; //백틱 문자열!
// }