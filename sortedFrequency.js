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
