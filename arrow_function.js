function add1(){
    return x+y;
}

const add2 = (x , y) =>{
    return x+y;
};

const add3 = (x,y)=> x+y;

const add4 = (x,y) => (x + y);

function not1(x){
    return !x;
}

const not2 = x => !x;

/*
add 1 ~ add 4 는 같은 기능을 하는 함수 입니다.
not1 ~ not2  도 같은 기능을 하는 함수 입니다.

=>함수는 function 선언 대신 사용 가능합니다. 또 변수에 대힙하면 나중에 재사용 할 수 있습니다.

화살표 함수에서 내부에 return 문밖에 없는 경우에는 return 문을 줄일 수 있습니다. 

*/