/**
 * Created by weng on 2016/12/7.
 */

var a = [];
for (let i = 0; i < 10; i++) {
    a[i] = function () {
        console.log(i);
    };
}
a[7]();


    let obj = {};
    let arr = [];

    ({ foo: obj.prop, bar: arr[0] } = { foo: 123, bar: true });

    console.log(obj);
    console.log(arr);

const [aa, bb, cc, dd, ee] = 'hello';
console.log(aa);


let { tan,log, sin, cos } = Math;
console.log(tan(2*Math.PI));

let {length : len} = 'hello';
console.log(len);


var jsonData = {
    id: 42,
    status: "OK",
    data: [867, 5309]
};

let { id, status, data:number } = jsonData;
console.log(id,status,number);

var map = new Map();
map.set('hello','world');
map.set('nihao','shijie');
for(let [key,value] of map){
    console.log(key,value);
}
for(let [key]of map){
    console.log(key);
}


for (let codePoint of "foo"){
    console.log(codePoint);
}
//"f"
//"o"
//"o"


function f() {
    return 'hello world';
}

console.log(`foo ${f()} bar`);
var h = 'your';
tag`Hello ${h},world`;

function tag(s,v1){
    console.log(s[0]);
    console.log(s[1]);
    console.log(s[2]);
    console.log(v1);
}
//Hello
//,world
//undefined
//your

function m1({x,y}={x:0,y:0}){
    return[x,y];
}
function m2({x=0,y=0}={}){
    return[x,y];
}
console.log(m1());
console.log(m1({x:3}));
console.log(m2());
console.log(m2({x:3}));



function add(...values) {
    let sum = 0;
    for (var val of values){
        sum +=val;
    }
    console.log(sum);
    return sum;
}


add(2,5,3);

function push(arr, ...numb) {
    arr.push(...numb);
    //numbers=arr;
}

var numbers = [];
function add2(...num) {
    let s =0;
    for(var nu of num){
        s+=nu;
    }
    console.log(s);
}
(function() {
    for(let w =1;w<101;w++){
        push(numbers,w);
    }

})();

add2(...numbers);


var arr1 =[1,2,3];
var arr2 = [4,5,6];
arr1.push(...arr2);
console.log(arr1);

var go =function *() {
    yield 1;
    yield 2;
    yield 3;
};

console.log(...go());

const ht = (head,...tail) =>[head,tail];
console.log(ht(1,2,3,4,5));
