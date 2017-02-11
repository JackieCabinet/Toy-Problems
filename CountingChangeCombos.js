//Code Wars Kata: Counting Change Combinations

// Write a function that counts how many different ways you can make change for an amount of money, given an array of coin denominations. For example, there are 3 ways to give change for 4 if you have coins with denomination 1 and 2:

// 1+1+1+1, 1+1+2, 2+2.
// The order of coins does not matter:

// 1+1+2 == 2+1+1
// Also, assume that you have an infinite ammount of coins.

// Your function should take an amount to change and an array of unique denominations for the coins:

//   countChange(4, [1,2]) // => 3
//   countChange(10, [5,2,3]) // => 4
//   countChange(11, [5,7]) //  => 0


var countChange =  function(money, coins){
  var count = 0;
  var solutions = {};
  var combo = "";
  var recurse = function(sum, coins, combo){
    if(sum===money){
      solutions[combo]=true;
      combo="";
      count++;
      return;
    }
  for(var i = 0; i < coins.length; i++){
     
     if(sum + coins[i] <= money){
       recurse(sum + coins[i], coins.slice(i), combo + coins[i].toString())
     }
   }
  }
  recurse(0, coins, "")
  return count;
}