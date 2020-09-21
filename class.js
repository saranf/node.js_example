var Human = function(type){
    this.type = type || 'human';
};

Human.isHuman = function (human) {
    return human instanceof Human;
}

Human.prototype.brethe = function () {
    alert('h-a-a-m');
};

var Zero = function (type , firstName, lastName) {
    Human.apply(this, arguments);
    this.firstName = firstName;
    this.lastName = lastName;
};

Zero.prototype = Object.create(Human.prototype);
Zero.prototype.contructor = Zero;
Zero.prototype.sayName = function () {
    alert(this.firstName + '' + this.lastName)
};

var oldZero = new Zero('human', 'Zero' , 'Cho');
Human.isHuman(oldZero);

///////////////////////////////////////////////////////////////

class Human2{
    constructor(type='human'){
        this.type = type;
    }

    static isHuman2(human){
        return human2 instanceof Human2;
    }

    breathe(){
        alert('h-a-a-m');
    }

}

class Zero extends Human2 {
    constructor(type, firstName , lastName){
        super(type);
        this.firstName = firstName;
        this.lastName = lastName;
    }

    sayName(){
        super.breathe();
        alert(`${this.firstName} ${this.lastName}`);
    }
}

const newZero = new Zero ('human' , 'Zero' , 'Cho');
Human2.isHuman2(newZero);

/*
 생성자 함수는 constructor 안으로 들어갔고 , human , ishuman 같은 클래스 함수는 static 키워드로 전환 되었습니다.

 클래스 문법으로 바뀌었어도 자바스크립트는 프로토타입 기반으로 동작한다.
 
*/

