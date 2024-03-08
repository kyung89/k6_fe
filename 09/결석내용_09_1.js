let arr1 = [1, 2, 3] ;
// 요소가 primitive type인 경우는 깊은복사(deep copy)효과
let arr2 = arr1.map(v => v) ;

console.log("arr1 = ", arr1);
console.log("arr2 = ", arr2);

arr2[0] = arr2[0] * 10 ;
console.log("arr1 = ", arr1);
console.log("arr2 = ", arr2);

arr1 = [[1,2], [3,4]] ;
// 요소가 reference type인 경우는 얕은복사(shallow copy)효과
arr2 = arr1.map(v => v) ;
// let arr3 = arr2.map (v => v) ;

// 요소가 reference type인 경우는 깊은복사(deep copy)효과
// JSON.stringify() : 객체를 JSON 문자열로 변환
// JSON.parse() :  JSON 형식의 문자열을 JavaScript 값이나 객체로 변환
let arr3 = JSON.parse(JSON.stringify(arr1)) ;

arr2[0][1] = arr2[0][1] * 10 ;
console.log("arr1 = ", arr1);
console.log("arr2 = ", arr2);
console.log("arr3 = ", arr3);

