document.addEventListener("DOMContentLoaded", () => {

    const sel1 = document.querySelector("#sel1");
    const sel2 = document.querySelector("#sel2");

    const txt1 = document.querySelector("#txt1");
    const txt2 = document.querySelector("#txt2");

    const labels = document.querySelectorAll("label");

    // "input" -> 글자가 입력될 때마다 이벤트 발생
    txt1.addEventListener("change", () => convertTemperature(sel1, txt1, txt2));

    sel1.addEventListener("change", () => handleChange(sel1, sel2, labels[0], labels[1], txt1, txt2));
    sel2.addEventListener("change", () => handleChange(sel2, sel1, labels[1], labels[0], txt1, txt2));

});

// 중복된 것은 함수로 빼내준다
const handleChange = (s1, s2, lb1, lb2, txt1, txt2) => {
    // form 값은 .value 로 가지고 온다
    if(s1.value == "°C") {
        s2.value = "°F";
        lb1.innerHTML = "°C";
        lb2.innerHTML = "°F";
    } else {
        s2.value = "°C";
        lb1.innerHTML = "°F";
        lb2.innerHTML = "°C";
    }
    convertTemperature(sel1, txt1, txt2); // clear 시켜주는 방식도 있다
    txt1.focus();
}

const convertTemperature = (sel1, txt1, txt2) => {
    if(sel1.value == "°C") {
        txt2.value = parseFloat(txt1.value) * 9/5 + 32;
    } else {
        txt2.value = (parseFloat(txt1.value) - 32) * 5/9;
    }
}