//자바스크립트 데이터 타입
//기본 타입 
let n1 = 10 ;             //정수
let n2 = 10.5 ;           //실수
let s1 = "안녕하세요." ;   //문자열

// console.log("정수 : ", n1) ;
// console.log("실수 : ", n2) ;
// console.log("문자열 : ", s1) ; 

//문자열 순회
// for(let i in s1) {
//   console.log("문자열 :", s1[i]) ;
// }
// for(let c of s1) {
//   console.log("문자열 :", c) ;
// }

//배열 
//tailing 쉼표 사용가능
let arr = ['🍎', 1, '🥕', 2, '🍌', 3 ,] ;
console.log("배열 :", arr) ;
console.log("배열의 요소 접근 :" , arr[1]) ;

//배열 순회
console.log("배열 for in") ;
for(let i in arr) {
  console.log("배열 :", arr[i]) ;
}
console.log("배열 for of") ;
for(let c of arr) {
  console.log("배열 :", c) ;
}

//arr1 만들기
let arr1 = [0,0,0,0,0,0,]; 
for(let i in arr) {
  arr1[i] = arr[i] ;
}
console.log("반복문 첨자로 arr1 = ", arr1) ;


//arr2 만들기
let arr2 = []; 
console.log("arr2 = ", arr2) ;

//반복문으로
// for(let item of arr) {
//   arr2.push(item) ;
// }
for(let i in arr) {
  arr2.push(arr[i]) ;
}
console.log("반복문으로 arr2= ", arr2) ;

//배열 map함수 
console.log("배열 map함수") ;
arr2 = arr.map((v) => {
  let s = v + '❤️' ;
  console.log(v,',', s) ;

  return s ;
});
console.log("map arr2 = ", arr2) ;

console.log("배열 map함수 : 콜백") ;
//콜백의 인수가 1개인 경우는 () 생략가능
//콜백의 body에 실행이 문이 없고 return문만 있으면 {}와 return 생략 가능
arr2 = arr.map(v => v + '❤️') ;
console.log("map arr2 = ", arr2) ;

// console.log("배열 map함수") ;
arr2 = arr.map((v, i) => v + '❤️' + i) ;
console.log("map arr2 = ", arr2) ;

// arr2[1] = 30 ;
// console.log("arr1 = ", arr) ;
// console.log("arr2 = ", arr2) ;

//filter
let arr21 = [] ;
for(let item of arr) {
  if (isNaN(item)) arr21.push(item) ;
}
console.log("반복문 Filter arr21 = ", arr21) ;

arr21 = arr.filter((v) => isNaN(v) );
console.log("Filter arr21 = ", arr21) ;

// 비교하기
// arr21 = arr.map((v) => isNaN(v) );
// console.log("Filter arr21 = ", arr21) ;

// 전개연산자
let arr22 = [...arr] ;
console.log("전개연산자 : ", arr22);



//--------------------------------------
//map()과 filter()는 배열에만 사용가능
//--------------------------------------

//오브젝트
//tailing 쉼표 사용가능
let obj = {'🍎': 1, '🥕': 2, '🍌':3 ,};
console.log("오브젝트 :", obj) ;
console.log("오브젝트 요소 접근 :", obj['🍎']);

// //오브젝트 순회
console.log("오브젝트 for in") ;
for(let i in obj) {
  console.log("오브젝트 :", obj[i]) ;
}
console.log("오브젝트 for of") ;
for(let c of Object.entries(obj)) {
  console.log("오브젝트 :", c) ;
  console.log("오브젝트키 :", c[0]) ;
  console.log("오브젝트값 :", c[1]) ;
}

for(let [k, v] of Object.entries(obj)) { 
  console.log("오브젝트키 :", k) ;
  console.log("오브젝트값 :", v) ;
}

console.log("오브젝트 키배열 :", Object.keys(obj)) ;
let arr3 = Object.keys(obj).map( k => k + obj[k]) ;
console.log("arr3 =", arr3);