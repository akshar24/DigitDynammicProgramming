/**
 * @author: Akshar Patel
 * This contains a function that counts the total number of integers that begin with given prefix between range from low to high inclusive 
 */

/**
 * Counts the total number of integers that begin with given prefix between range from low to high inclusive 
 * @param prefix 
 * @param low 
 * @param high 
 */
const countNumbersWithPrefixInRange__optimal = (prefix: string, low: number, high: number) => {
    const left = __optimal_algorithm_helper(prefix, low - 1)
    const right = __optimal_algorithm_helper(prefix, high)
    return right - left
}

const __optimal_algorithm_helper = (prefix_as_string: string, high_as_number: number): number => {
    const prefix_as_number: number = +prefix_as_string;
    const high_as_string: string = high_as_number.toString();
    //if number of digits in prefix is greater than number of digits in high, than number cannot exist with given prefix in range
    if (prefix_as_string.length > high_as_string.length) {
        return 0
    }else if(prefix_as_string.length === high_as_string.length) {
        //if prefix and high both have same number of digits, then only one number can exist with that prefix if prefix <= high or no number exists if prefix > high
        return prefix_as_number <= high_as_number ? 1: 0
    }
    //Below 3 lines counts the number of integers that has given prefix and has number of digits less than that of high
    const remaining_digit_slots = high_as_string.length - prefix_as_string.length // remaining places where digits can be placed in potential number
    const common_ratio = Math.pow(10, remaining_digit_slots)
    let total = (1 - common_ratio) / -9 //Geometric series sum with a = 1 and r = 10 and n = remaining_digit_slots
    //Below lines count number of integers that has given prefix and has number of digits equal to that of high
    const high_prefix = +high_as_string.substr(0, prefix_as_string.length)
    if(prefix_as_number < high_prefix) {
        total += common_ratio
    }else {
        total  += +high_as_string.substr(prefix_as_string.length) + 1
    }
    return total
}
/**
 * Counts the total number of integers using brute force algorithm that begin with given prefix between range from low to high inclusive 
 * @param prefix 
 * @param low 
 * @param high 
 */
const countNumbersWithPrefixInRange__bruteForce = (prefix: string, low: number = 1, high: number) => {
    let count = 0
    for(let i = low; i <= high; i++){
        if(i.toString().startsWith(prefix)) {
            count++
        }
    }
    return count
}
module.exports = {
    optimal: countNumbersWithPrefixInRange__optimal,
    brute_force: countNumbersWithPrefixInRange__bruteForce
}