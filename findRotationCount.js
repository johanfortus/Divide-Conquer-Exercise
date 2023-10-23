// findRotationCount
// Write a function called findRotationCount which accepts an array of distinct numbers sorted in increasing order. The array has been rotated counter-clockwise n number of times. Given such an array, find the value of n.

// Constraints:

// Time Complexity: O(log N)

// Examples:

// findRotationCount([15, 18, 2, 3, 6, 12]) // 2
// findRotationCount([7, 9, 11, 12, 5]) // 4
// findRotationCount([7, 9, 11, 12, 15]) // 0

function findRotationCount(arr){
    let leftIdx = 0;
    let rightIdx = arr.length - 1;
    let count = 0
    while(leftIdx <= rightIdx){
        count++
        let middleIdx = Math.floor((leftIdx + rightIdx) / 2);
        let middleVal = arr[middleIdx];
        console.log('COUNT =>', count);
        console.log('MIDDLE VALUE =>', middleVal)
        console.log('NEXT VALUE =>', arr[middleIdx + 1])
        console.log('')
        console.log('PART ONE')
        console.log('ITERATION => ', count);
        console.log('LEFT INDEX => ', leftIdx, 'VALUE =>', arr[leftIdx])
        console.log('MIDDLE INDEX =>', middleIdx, 'MIDDLE VALUE =>', arr[middleIdx])
        console.log('RIGHT INDEX => ', rightIdx, 'VALUE =>', arr[rightIdx])
        console.log('')

        if(arr[middleIdx + 1] < arr[0] && arr[middleIdx - 1] > arr[0]){
            if(middleVal > arr[0]){
                rightIdx = middleIdx + 1;
                break
            }
            else{
                rightIdx = middleIdx;
                break
            }
        }
        if(middleVal > arr[0]){
            leftIdx = middleIdx + 1;
        }
        else if(middleVal < arr[0]){
            rightIdx = middleIdx - 1;
        }
    
    }
    if(arr[rightIdx] > arr[0]){
        return 0;
    }
    else{
        return rightIdx
    }
}
