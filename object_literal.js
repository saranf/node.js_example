//예전문법
var sayNode = function() {
    console.log('Node');
};
var es = 'ES';

var oldObject ={
    sayJs:function(){
        console.log('Js');
    },
    sayNode:sayNode,
};

oldObject[es + 6] = 'Fantastic';
oldObject.sayNode();
oldObject.sayJs();
console.log(oldObject.ES6);

/////////////////////////////////////////////////////////

//ES2015문법
var es2 = 'ES';

const newObject = {
    sayJs2() {
        console.log('JS');
    },
    sayNode,
    [es2 +6] : 'Fantastic',
};
newObject.sayNode();
newObject.sayJs2();
console.log(newObject.ES6);

/*
    예전 문법에서는 ES6 라는 속성명을 만들려면 객체 리터럴(oldObject) 바깥에서 [es + 6] 를 해야 했습니다.
    ES2015 문법에서는 객체 리터럴 안에 동적 속성을 선언해도 됩니다.
    newObject  안에서 [es + 6 ] 가 속성명으로 바로 사용되고 있습니다.
*/

