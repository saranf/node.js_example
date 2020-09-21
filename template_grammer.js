var num1 =1;
var num2 =2;
var result = 3;
var string1 = num1 + '더하기' + num2 + '는 \'' + result  + '\''
console.log(string1);

var num3 = 1;
var num4 = 2;
var result2 = 3;
var string2 = `${num3} 더하기 ${num4} 는  ${result2}`
console.log(string2);

/*
ES2015부터는 변수${변수} 형식으로 변수를 더하기 기호 없이 문자열에 넣을 수 있습니다.
기존 따옴표 대신 백틱을 사용하므로 큰따옴표와 함께 사용할 수 있습니다.
*/