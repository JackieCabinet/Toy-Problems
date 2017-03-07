//Given an array nums, write a function to move all 0's to the end of it while maintaining the relative order of the non-zero elements.

//For example, given nums = [0, 1, 0, 3, 12], after calling your function, nums should be [1, 3, 12, 0, 0].

var moveZeroes = function(nums) {
    var zeroes = [];
    var numsLength= nums.length;
    var count = 0;
    for(var i = 0; i<numsLength; i++){
      if(nums[i]=== 0){
        nums.splice(i,1);
        i--;
        count++;
      }
    }
    for(var j=0; j<count; j++){
      nums.push(0)
    }
};