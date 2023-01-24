// [LTC]Easy/two-sum/10m/23-01-24
// https://leetcode.com/problems/two-sum/description/

var twoSum = function(nums, target) {
    let result = []
    for(let i = 0; i < nums.length; i++){
        for(let j = 0; j < nums.length; j++){
            if(j !== i){
                if(nums[i] + nums[j] === target)
                    result.push(i, j);
            }
        }
    }
    const answer = new Set(result);
    return [...answer]
};

//10m