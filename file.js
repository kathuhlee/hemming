
// TOOLS
// integer to base number conversation
// iteration

/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 https://leetcode.com/problems/hamming-distance/
 */

const intToBase2 = (int) => {
    const storage = [];

    while (int !== 0) {
        let current = int % 2;
        storage.push(current);
        int = Math.floor(int / 2);
    }

    return storage.reverse().join('');
}

// console.log(intToBase2(728));

var hammingDistance = function(x, y) {
    let xStr = intToBase2(x);
    let yStr = intToBase2(y);

    // let xStr = x.toString(2);
    // let yStr = y.toString(2);

    console.log("XSTRING: ", xStr);
    console.log("YSTRING: ", yStr);

    let xPointer = xStr.length - 1;
    let yPointer = yStr.length - 1;

    let counter = 0;

    while (xPointer > -1 && yPointer > -1) {
        if (xStr[xPointer] !== yStr[yPointer]) {
            counter++;
        }
        xPointer--;
        yPointer--;
    }

    while (xPointer > -1) {
        if (xStr[xPointer] !== "0") {
            counter++;
        }
        xPointer--;
    }
    
    while (yPointer > -1) {
        if (yStr[yPointer] !== "0") {
            counter++;
        }
        yPointer--;
    }

    return counter;
};

console.log(hammingDistance(1, 4));

/*

Notes: 
- Need a process to convert x,y, integers into their bit representation
- create a counter; iterate backwards through x_str and y_str
    - increment counter when characters at same index are different 
- when one of the pointers goes out of bounds, the remaining in-bounds 
  pointer will compare the remainder of its string against 0
    - increment counter when character at in-bound index is not zero 
    
base10 numbering system

728 % 10 ==> 8     ones
728 / 10 ==> 72

72 % 10 ==> 2      tens
72 / 10 ==> 7

7 % 10 ==> 7       hundreds
7 / 10 ==> 0


"0123456789abcdef"

base16 numbering system

728 % 16 ==> 8    ones ==> "8"
728 / 16 ==> 45

45 % 16 ==> 13    tens ==> "d"
45 / 16 ==> 2

2 % 16 ==> 2      hundreds ==> "2"


"2d8"





base2 numbering system

3 % 2 ==> 1     ones 
3 / 2 ==> 1

1 % 2 ==> 1     tens
1 / 2 ==> 0


       x
3 ==> "11"

       y
1 ==>  "1"


counter = 2

   i
   "1"

  j
"0100"

Example 1:

Input: x = 1, y = 4
Output: 2
Explanation:
1   (0 0 0 1)
4   (0 1 0 0)
       ↑   ↑
The above arrows point to positions where the corresponding bits are different.


Example 2:

Input: x = 3, y = 1
Output: 1
 

Constraints:

0 <= x, y <= 2^31 - 1


*/
