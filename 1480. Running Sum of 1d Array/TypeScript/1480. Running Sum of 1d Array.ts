function runningSum(nums: number[]): number[] {

    let runningSums: number[] = []
    let runningSum: number = 0

    nums.forEach(function (num){

        runningSum += num
        runningSums.push(runningSum)

    }); 
    return runningSums   
};

let nums = [1,2,3,4];

runningSum(nums);