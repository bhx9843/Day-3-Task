var obj1 = {name: "bhx",age: "5",};
var keys1 =object.keys(obj1).sort();
console.log(keys1);

var obj2 = {age: "5",name :"bhx"};
var keys2 = object.keys(obj2).sort();
console.log(keys2);

if(JSON.stringify(keys1) === JSON.stringify(keys2)){
    console.log("equal");
}else{
    console.log("not wqual");
}