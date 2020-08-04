//Objective is to count the number if 1's bits in a 32-bit integer

let n = 15


//O(1) solution that uses a bitmask to count the number of 1's in the number's bits

let count = 0
let mask = 1

for (let i = 0; i < 32; i++) {
    //For this to be true, both must not be 0's
    //Just for reference, '&' is only true if both are 1's
    if ((n & mask) == 1) {
        count++
    }
    mask <<= 1
}

return count