function filterNumbers(array){
    return array.filter(function(number){return !isNaN(number)});
}
function sortNumbersInArray(array){
  arraynew = filterNumbers(array)
    return arraynew.sort(function(a,b){  return a < b;})
}
function getLastElementOfArray(inputarray){
    var arr = sortNumbersInArray(inputarray);
    var a = arr.pop()
    return a ;

}

var arr = ['rado' ,60, 3,1,2,888, 'kur'];
var newarr = sortNumbersInArray(arr);
console.log(arr);
console.log(filterNumbers(arr));
console.log(newarr);
console.log(newarr[0]);
var a = newarr.pop();
console.log(getLastElementOfArray(arr));
