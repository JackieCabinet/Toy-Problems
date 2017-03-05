//The Hamming distance between two integers is the number of positions at which the corresponding bits are different.

//Given two integers x and y, calculate the Hamming distance.

var hammingDistance = function(x, y) {
    var first = Number(x).toString(2);
    var second = Number(y).toString(2);
    var count = 0;
    console.log(first,second)
    if(x>y){
      var diff = first.length - second.length;
      for(var k = 0; k<diff; k++){
        second = '0' + second;
      }
      for(var i = 0; i<first.length; i++){
        if(first[i]!==second[i]){
          count++;
        }
      }
    }
      else{
        var differ = second.length - first.length;
        for(var l = 0; l<differ; l++){
          first = '0' + first;
        }
        for(var j = 0; j<second.length; j++){
          if(first[j]===undefined){
            first[j]='0'
          }
          if(first[j]!==second[j]){
            count++;
          }
        }
      }
    return count;
};