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


// sortedFrequency
// Given a sorted array and a number, write a function called sortedFrequency that counts the occurrences of the number in the array
// Constraints:
// Time Complexity: O(log N)
// Examples:
// sortedFrequency([1,1,2,2,2,2,3],2) // 4
// sortedFrequency([1,1,2,2,2,2,3],3) // 1
// sortedFrequency([1,1,2,2,2,2,3],1) // 2
// sortedFrequency([1,1,2,2,2,2,3],4) // -1

function sortedFrequency(arr, num){
    let leftIdx = 0;
    let rightIdx = arr.length - 1;
    let middleIdx = Math.floor((leftIdx + rightIdx) / 2);
    let middleVal = arr[middleIdx];

    let count = 0;
    while(leftIdx <= rightIdx && count < 15){
        count++;
        middleIdx = Math.floor((leftIdx + rightIdx) / 2);
        middleVal = arr[middleIdx];

        if(middleVal < num){
            leftIdx = middleIdx + 1;
        }
        else if(middleVal > num){
            rightIdx = middleIdx;
        }
        else if(middleVal === num){
            rightIdx = middleIdx - 1;
        }
        console.log('iteration', count);
        console.log('right pointer =>', 'index = ', rightIdx, 'value = ', arr[rightIdx] )
        console.log('left pointer =>', 'index = ', leftIdx, 'value = ', arr[leftIdx] )
        console.log('-------------------------------------------------------------')

    }
    console.log('part 1 => ', leftIdx)
    let partOne = leftIdx;
    console.log('')
    console.log('')
    console.log('')


    leftIdx = 0;
    rightIdx = arr.length - 1;
    count = 0;
    while(leftIdx <= rightIdx && count < 20){
        count++
        let middleIdx = Math.floor((leftIdx + rightIdx) / 2);
        let middleVal = arr[middleIdx];

        if(middleVal > num){
            rightIdx = middleIdx - 1;
        }
        else if(middleVal < num){
            leftIdx = middleIdx + 1;
        }
        else if(middleVal === num){
            leftIdx = middleIdx + 1; 
        }
        console.log('iteration', count);
        console.log('right pointer =>', 'index = ', rightIdx, 'value = ', arr[rightIdx] )
        console.log('left pointer =>', 'index = ', leftIdx, 'value = ', arr[leftIdx] )
        console.log('-------------------------------------------------------------')
    }
    console.log('part 2 => ', rightIdx)
    let partTwo = rightIdx;

    console.log('')

    let result = partTwo - partOne + 1;

    return result ? result : -1;
}


