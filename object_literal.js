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
    ES5 
*/

