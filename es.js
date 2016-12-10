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
