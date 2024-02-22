function handleClick(n) {
    // 메시지 영역 가져오기 1
    // document.getElementById("msgArea").innerHTML = "안녕하세요";

    // 메시지 영역 가져오기 2
    // document.querySelector("#msgArea").innerHTML = "<h2>버튼 " + n + " 이 눌러졌습니다.</h2>";

    document.querySelector("#msgArea").innerHTML = `<h2>버튼 ${n} 이 눌러졌습니다.</h2>`; //백틱 문자열!
}