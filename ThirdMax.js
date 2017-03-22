
var thirdMax = function(nums) {
  var max = nums[0];
  var second;
  var third;
  for(var i = 1; i < nums.length; i++){
    if(i===1){
      if(nums[i]<max){
        second = nums[i]
      } else if (nums[i] !== max) {
      second = max;
      max = nums[i];
      }
    }
    if(i===2){
      if(nums[i]>max){
        third = second;
        second = max;
        max = nums[i]
      } else if(nums[i]>second && nums[i] !== max){
        third = second;
        second = nums[i]
      } else if (second !== nums[i] && max !== nums[i]) {
        third = nums[i]
      }
    }
    if(i>2){
      if(nums[i]>max){
          third = second;
          second = max;
          max = nums[i]
      }else if(nums[i]>second && nums[i] !== max) {
        third = second;
        second = nums[i]
      }else if(nums[i]>third && nums[i] !== max && nums[i] !== second) {
        third = nums[i]
      } else if(second === undefined && nums[i] !== max){
        second = nums[i]
      } else if(third === undefined && nums[i] !== second && nums[i] !== max){
        third = nums[i]
      }
    }
  }
  if(third === undefined){
    return max
  }
  console.log('third:', third, 'second:', second, 'max:', max)
  return third;
};