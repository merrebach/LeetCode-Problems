/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function (accounts) {
    let maximumWealth = 0;
    for(let acc of accounts){

        let wealth = acc.reduce((sum, value) => sum += value, 0)        
        if(wealth > maximumWealth){
            maximumWealth = wealth
        }
    };
    return maximumWealth
};

/**
 * # A shorter version but more complex to understand...
 * 
 * 1. The accounts array is mapped and we are iterating trough each item. The items are individual accounts in this case.\
 * 2. We then reduce the acc array, so that we build the sum of each acc array.\
 * 3. Because of the map from accounts, we get an array which contains the sums of each accounts wealth.\
 * 4. Math.max() is used to get the largest customer wealtch. With the spread operator (...) we "spread" the accounts array and can iterate trough each value.\
 *    Normally Math.max() only allows "normal" values.
 * @param {number[][]} accounts
 * @return {number}
 */
var shortMaximumWealth = function (accounts) {
    let maximumWealth = Math.max(...accounts.map(acc => acc.reduce((wealth, value) => wealth+=value, 0)))
    return maximumWealth
};

const customer = [[2, 8, 7], [7, 1, 3], [1, 9, 5]];

console.log(`This is the normal versions result: ${maximumWealth(customer)}`)
console.log(`This is the shorter versions result: ${shortMaximumWealth(customer)}`)