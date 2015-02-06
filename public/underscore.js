/*
  This function should accept an array of strings as a parameter.
  It should return the array, with all strings coverted to uppercase.

  It SHOULD use underscore.
*/

var underscoreUppercase = function(array){
  var y =  _.map(array, function(word){return word.toUpperCase();});
 return y;
 }

/*
  This function should accept an array of numbers as a parameter.
  It should return the array, with all numbers sorted in descending order.

  It SHOULD use underscore.
*/
var underscoreSort = function(array){
  var f = _.sortBy(array);
return f.reverse();
} 

/*
  This function should accept an array of objects as a parameter.
  It should return an array of objects that contain the property "name".

  It SHOULD use underscore.
*/
var underscoreNamesOnly = function(array) {
    
    return _.filter(array, function(num){ return num.name;});
    
     
}

/*
  This function should accept an array of numbers as a parameter.
  It should return the first number that is evenly divisible by 5.

  It SHOULD use underscore.
*/
var underscoreFirstFive = function(array) {
      var dd = array.filter(function(num){ 
        return num % 5 == 0; });
      return dd[0];

}


/*
  This function should accept an array of numbers a parameter.
  It should return the sum of all ODD numbers in the array.
    (Ignore the even numbers.)

  It SHOULD use underscore.
*/
var underscoreSumOdd = function(array) {
  var ee = array.filter(function(num){ 
        return num % 2 !== 0; });
  

  var sum = _.reduce(ee, function(memory, num){
    return memory + num;
  }, 0)

      return sum;
}
