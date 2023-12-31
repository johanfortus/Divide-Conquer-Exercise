// countZeroes
// Given an array of 1s and 0s which has all 1s first followed by all 0s, write a function called countZeroes, which returns the number of zeroes in the array.
// Constraints:
// Time Complexity: O(log N)
// Examples:
// countZeroes([1,1,1,1,0,0]) // 2
// countZeroes([1,0,0,0,0]) // 4
// countZeroes([0,0,0]) // 3
// countZeroes([1,1,1,1]) // 0


function countZeroes(arr){
    let length = arr.length;
    let leftIdx = 0;
    let rightIdx = arr.length - 1;
    if(arr[0] === 0){
        return arr.length;
    }
    if(arr[arr.length - 1] !== 0){
        return 0;
    }
    while(leftIdx <= rightIdx){
        let middleIdx = Math.floor((leftIdx + rightIdx) / 2);
        let middleVal = arr[middleIdx];
        // console.log('middle value = ', middleVal)
        if(middleVal === 1){
            leftIdx = middleIdx + 1;
            // console.log('left index = ', leftIdx)
        }
        else if(middleVal === 0){
            rightIdx = middleIdx - 1;
            // console.log('right index = ', rightIdx)
        }
    }
    // console.log('no infinity loop :)')
    return arr.length - leftIdx
}


