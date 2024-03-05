

const handleClick = (e) => {
    let rnd;
    const num = document.querySelector("#num");
    const img = document.querySelector("img");
    const msg = document.querySelector(".msg");
    const btn = document.querySelector("button");

    // input 박스 내용 가져오기
    if(num.value == "") {
        // alert("숫자를 입력하세요.");
        msg.innerHTML = "<span>숫자를 입력하세요.</span>";
        num.focus();
        return;
    }
    
    let flag = false;

    if(!flag) {
        rnd = Math.floor(Math.random()*100) + 1;
        console.log("rnd = ", rnd);
        flag = true;

        num.style.display = "inline";
        //num.value = "";
        num.focus();

        btn.innerHTML = "확인";
        btn.style.backgroundColor = "blueviolet";
        btn.style.width = "60px";

        msg.innerHTML = "<span>1 에서 100 까지 숫자만 입력하세요.</span>";
    }

    // 숫자 비교
    if(rnd == num.value) {
        msg.innerHTML = "<span>정답입니다.</span>";
        img.setAttribute("src", "./04_updown/good.png")
        // input 없애기
        num.style.display = "none";
        num.value = "";
        // 버튼 "재시작" 밒 색깔 변경
        btn.innerHTML = "재시작";
        btn.style.backgroundColor = "red";
        btn.style.width = "80px";
        flag = false;

    } else if(rnd > num.value) {
        msg.innerHTML = "<span>UP</span>";
        img.setAttribute("src", "./04_updown/up.png")
    } else {
        msg.innerHTML = "<span>DOWN</span>";
        img.setAttribute("src", "./04_updown/down.png")
    }

    // == 연산자: 값만 비교
    // === 연산자: 값과 타입 비교 -> parseInt 를 쓰도록!

}
