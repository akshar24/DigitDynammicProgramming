/**
 * @author: Akshar Patel
 * This contains a function that counts the total number of integers that begin with given suffix between range from low to high inclusive 
 */


/**
 * Counts the total number of integers that begin with given suffix between range from low to high inclusive 
 * @param suffix 
 * @param low 
 * @param high 
 */
const countNumbersWithSuffixInRange__optimal = (suffix: string, low: number, high: number) => {
    const left = __optimal_algorithm__helper(suffix, low - 1);
    const right = __optimal_algorithm__helper(suffix, high);
    return right - left
}

const __optimal_algorithm__helper = (suffix_as_string: string,  high_as_number: number) => {
    const suffix_as_number: number = +suffix_as_string;
    const high_as_string: string = high_as_number.toString();
    //if number of digits in suffix is greater than number of digits in high, than number cannot exist with given suffix in range
    if (suffix_as_string.length > high_as_string.length) {
        return 0
    }else if(suffix_as_string.length === high_as_string.length) {
        //if suffix and high both have same number of digits, then only one number can exist with that suffix if suffix <= high or no number exists if suffix > high
        return suffix_as_number <= high_as_number ? 1 : 0;
    }
    const remaining_digit_slots = high_as_string.length - suffix_as_string.length
    let total = 1
    const common_ratio = Math.pow(10, remaining_digit_slots - 1)
    total += 9 * ((1 - common_ratio) / -9)
    let power = 1
    for(let i = remaining_digit_slots - 1; i >= 0; i--) {
        const digit = +high_as_string.charAt(i)
        total += power * (i === 0 ? digit - 1: (i === remaining_digit_slots - 1 ? digit + 1:digit))
        power *= 10
    }
    const high_suffix = +high_as_string.substr(remaining_digit_slots)
    if (suffix_as_number > high_suffix) {
        total--;
    }    
    return total
}

const countNumbersWithSuffixInRange__bruteForce = (suffix: string, low: number, high: number) => {
    let count = 0;
    for(let i = low; i <= high; i++) {
        if(i.toString().endsWith(suffix)) {
            count++;
        }
    }
    return count
}

const functions = {
    optimal: countNumbersWithSuffixInRange__optimal,
    brute_force: countNumbersWithSuffixInRange__bruteForce
}

module.exports = functions