var candyMachine = {
    status :{
        name : 'node',
        count : 5,
    },
    getCandy: function (){
        this.status.count--;
        return this.status.count;
    },
};

var getCandy = candyMachine.getCandy;
var count = candyMachine.status.count;

///////////////////////////////////////////////////////

const candyMachine2 ={
    status:{
        name : 'node',
        count : 5,
    },
    getCandy2(){
        this.status.count--;
        return this.status.count;
    },
};

const {getCandy2, status:{count}} = candyMachine2

/*
  candyMachine2 객체 안의 속성을 찾아서 변수와 매칭합니다.
  count처럼 여러 단계 안의 속성도 찾을 수 있습니다. 

  다만 구조분해 할당을 사용하면 함수의 this 가 달라질 수 있습니다.
*/