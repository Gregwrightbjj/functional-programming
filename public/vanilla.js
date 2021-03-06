/*
  This function should accept an array of strings as a parameter.
  It should return the array, with all strings coverted to uppercase.

  It should not use underscore.
*/
var uppercase = function(array){
  var a =[];
    for(var i=0; i < array.length; i++){
    a.push(array[i].toUpperCase());
  }return a;

}

/*
  This function should accept an array of numbers as a parameter.
  It should return the array, with all numbers sorted in descending order.

  It should not use underscore.
*/
var sort = function(array){
  var a =[];
    for(var i=0; i < array.length; i++){
    a.push(array[i]);
  }return a ;
}

/*
  This function should accept an array of objects as a parameter.
  It should return an array of objects that contain the property "name".
*/
var namesOnly = function(array) {
   return _.filter(array, function(stuff){return stuff.name;});
}

/*
  This function should accept an array of numbers as a parameter.
  It should return the first number that is evenly divisible by 5.
*/
var firstFive = function(array) {
var a =[];
    for(var i=0; i < array.length; i++){
    if( array[i] % 5 == 0){
      a.push(array[i])
    } 
  }return a[0];
}

      
/*
  This function should accept an array of numbers a parameter.
  It should return the sum of all ODD numbers in the array.
    (Ignore the even numbers.)
*/
var sumOdd = function(array) {
  var ee = array.filter(function(num){
    return num % 2 !== 0;});
  var sum= _.reduce(ee,function(memory, num){
    return memory + num;
  },0);
  return sum;
}
