// 자바스크립트 데이터 타입

// 기본 타입

// const, let
let n1 = 10; // 정수
let n2 = 10.5; // 실수
let s1 = "안녕하세요."

console.log("정수: ", n1);
console.log("실수: ", n2);
console.log("문자열: ", s1);
console.log("문자열 요소 접근: ", s1[1]); // 문자열은 일종의 배열이다

for(let c of s1) console.log("문자열: ", c); // of 를 사용하면 value 값 반환
for(let i in s1) console.log("문자열: ", s1[i]); // in 을 사용하면 key 값 반환

// 문자열 함수: https://velog.io/@min00/JS-%EB%AC%B8%EC%9E%90%EC%97%B4-%ED%95%A8%EC%88%98-%EB%AA%A8%EC%9D%8C

// 참조타입

// 배열: 파이썬의 리스트 격
// tailing 쉽표 가능: 끝에 쉼표 붙이기
let arr = ["🍤","1","🍙", "2", ]; // 윈도우 이모지: 윈도우키 + 마침표
console.log("배열: ", arr);
console.log("배열의 요소 접근: ", arr[1]); // 배열의 인덱스는 0부터 시작한다

// 배열 순회
for(let c of arr) console.log("배열: ", c); // of 를 사용하면 value 값 반환
for(let i in arr) console.log("배열: ", arr[i]); // in 을 사용하면 key 값 반환

// 배열 map 함수: 안에 callback 함수가 들어간다 (map은 중요하다. 리액트의 30% 를 차지한다)
console.log("<배열 map 함수>");  
let arr2 = arr.map((v) => { // arr2: 변경되는 값이니 const 대신 let 을 사용해야 한다
    console.log("map => v : ", v); // for of 와 동일
    return v + "🍜"; // arr2 생성
});
console.log("map한 배열: ", arr2);
arr.map((v, i) => console.log("map => v : ", v, "map => i : ", i)); // 두번째 값(i)은 index 반환

// 배열 map 함수: callback 
arr2 = arr.map(v => { return v + "🍜"; }); // 콜백의 인수가 하나인 경우는 () 생략가능
arr2 = arr.map(v => v + "🍜"); // return 문 하나인 경우는 {}와 return 생략가능

// 오브젝트: 파이썬의 딕셔너리 격
// tailing 쉽표 가능: 끝에 쉼표 붙이기
let obj = {"🍖": 3, "🥩": 5, }; // 윈도우 이모지: 윈도우키 + 마침표
console.log("오브젝트: ", obj);
console.log("오브젝트의 요소 접근: ", obj["🍖"]);

// 오브젝트 순회
for(let i in obj) console.log("오브젝트: ", obj[i]); // in 을 사용하면 key 값 반환

//for(let c of obj) console.log("오브젝트: ", c) // of 를 사용: 에러!
for(let c of Object.entries(obj)) console.log("오브젝트: ", c); // of 를 사용: Object.entries() -> 앞이 key, 뒤가 value
for(let c of Object.entries(obj)) console.log("오브젝트 키: ", c[0]); 
for(let c of Object.entries(obj)) console.log("오브젝트 값: ", c[1]); 

//구조분해
console.log("<구조분해>");
for(let [k, v] of Object.entries(obj)) {
    console.log("오브젝트 키: ", k);
    console.log("오브젝트 값: ", v);
}

// json: 파이썬에서는 딕셔너리 형태, 자바스크립트에서는 오브젝트 형태
// RESTful service: json 형태의 데이터를 주고 받는다

