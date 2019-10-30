var result = 0;

console.time('duration_sum');

for (var i = 1; i <= 1000 ; i ++){
    result += i;
}

console.log('1에서 1000까지 더한 결과물 : %d', result);

console.log('현재 파일의 이름 : %s', __filename);
console.log('현재 파일의 경로 : %s', __dirname);
console.timeEnd('duration_sum')

//콘솔의 객체 dir() 메소드를 이용하여 객체 안에 들어 있는 속성들을 확인
var Person = {name:'Moonjong shin', age: 20};
console.dir(Person);
console.log(Person);
console.dir('현재 파일의 경로 : %s', __dirname) // console.dir 메소드는 객체 출력


//argv 메소드를 이용하여 파라미터 정보 출력
console.log('argv 속성의 파라미터 수 :' + process.argv.length);
console.dir(process.argv);


//세번째 파라미터 값을 확인  실행 -> cmd node <filename.js> __port 7001
if (process.argv.length > 2 ){
    console.log('세 번쨰 파라미터의 값 :%s', process.argv[2]);
}

process.argv.forEach(function(element,index){
    console.log(index + ':',element);
});

//변수형

//진릿값
var BOOL = true
console.log(BOOL);
//Dictionary 형식
var BOOL2 = new Boolean(true);
console.log(BOOL2);

//Number
var age = 0;
console.log(age);

//string
var name = '신문종';
console.log(name);

//Property
var Person = {}; // 빈 객체 할당

Person.age = 20;//속성에 값 할당
Person.name = '신문종';
Person['mobile'] = '010-2536-7500';

//출력
console.log('나이:%d', Person.age);
console.log('이름:%s',Person.name);
console.log('핸드폰 번호:%s',Person.mobile);

console.log(Person); //JSON형식으로 출력


var foo = 20;

var Me = {};

Me.age = foo;

console.log(Me.age);

foo = 24;

console.log(foo)
console.log(Me.age);

//함수도 속성으로 할당
Person.add = function add(a,b) {
                return a+b;
                };


console.log(Person.add(10,15));


//함수를 객체에 할당한 뒤 속성으로 부여
var div = function di(a, b){
            return a/b;
            };

Person.divide = div;

console.log(Person.divide(10,5));

//JSON형식으로 객체에 속성 부여 JSON:javascript object notation

var People = {
    '신문종' :{                                //JSON에 JSON을 속성으로 부여
        'age': 26,
        'name' : '신문종',
        'major' : 'Electrical Engineering'
    },
    '이용현': {
        'age' : 25,
        'name' : '이용현',
        'major' : 'CS'
    },

    'add' : function(a,b){                   //JSON 형식에 함수를 속성으로 부여
        return a + b;
    }
};

console.log(People.신문종.age); // 속성 이름에 한글 입력 가능

console.log(People.add(People.신문종.age, People.이용현.age)); //속성 age에 들어있는 값 호출


//배열