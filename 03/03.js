/*
 * 함수 작성 2: 화살표 함수
 */

// const: 상수 선언, 함수도 넣기 가능
// let: 변수 선언
const handleClick = (n) => {

    let msg;
    if (n == 1) msg = "<h2>안녕 하세요</h2>";
    else msg = "<h2>안녕히 가세요</h2>";
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