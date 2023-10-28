// findRotatedIndex
// Write a function called findRotatedIndex which accepts a rotated array of sorted numbers and an integer. The function should return the index of num in the array. If the value is not found, return -1.

// Constraints:

// Time Complexity: O(log N)

// Examples:

// findRotatedIndex([3,4,1,2],4) // 1
// findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 8) // 2
// findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 3) // 6
// findRotatedIndex([37,44,66,102,10,22],14) // -1
// findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 12) // -1


function findRotatedIndex(arr, num){
    let leftIdx = 0;
    let rightIdx = arr.length - 1;
    while(leftIdx <= rightIdx){
        let middleIdx = Math.floor((leftIdx + rightIdx) / 2);
        let middleVal = arr[middleIdx];

        if(middleVal < arr[0] && middleVal < arr[middleIdx - 1]){
            rightIdx = middleIdx - 1;
            break
        }
       
        if(middleVal > arr[0]){
            leftIdx = middleIdx + 1;
        }
        else if(middleVal < arr[0]){
            rightIdx = middleIdx;
        }
        else if(middleIdx === leftIdx && middleIdx === 0){
            rightIdx = 0;
            break
        }
    }

    partOne = rightIdx + 1;
    leftIdx = 0;

    while(leftIdx <= rightIdx){
        let middleIdx = Math.floor((leftIdx + rightIdx) / 2);
        let middleVal = arr[middleIdx];

        if(middleVal < num){
            leftIdx = middleIdx + 1;
        }
        else if(middleVal > num){
            rightIdx = middleIdx - 1;
        }
        else if(middleVal === num){
            return middleIdx
        }
        else{
            break
        }
    }
    
    leftIdx = partOne
    rightIdx = arr.length - 1;

    while(leftIdx <= rightIdx){
        let middleIdx = Math.floor((leftIdx + rightIdx) / 2);
        let middleVal = arr[middleIdx];

        if(middleVal < num){
            leftIdx = middleIdx + 1;
        }
        else if(middleVal > num){
            rightIdx = middleIdx - 1;
        }
        else if(middleVal === num){
            return middleIdx
        }
        else{
            break
        }
    }
    return -1;
}





// ATTEMPT ONE
function findRotatedIndex(arr, num){
    let leftIdx = 0;
    let rightIdx = arr.length - 1;

    let count = 0;
    while(leftIdx < rightIdx && count < 10){
        count++
        console.log('COUNT', count)
        let middleIdx = Math.floor((leftIdx + rightIdx) / 2)
        let middleVal = arr[middleIdx];
        console.log('MIDDLE VALUE =>', middleVal)
        console.log('NEXT VALUE =>', arr[middleIdx + 1])
        console.log('')
        console.log('PART ONE')
        console.log('ITERATION => ', count);
        console.log('LEFT INDEX => ', leftIdx, 'VALUE =>', arr[leftIdx])
        console.log('MIDDLE INDEX =>', middleIdx, 'MIDDLE VALUE =>', arr[middleIdx])
        console.log('RIGHT INDEX => ', rightIdx, 'VALUE =>', arr[rightIdx])
        console.log('')
        if(arr[middleIdx - 1] > arr[0] && arr[middleIdx + 1] < arr[0] || arr[middleIdx + 1] === undefined){
            if(arr[middleIdx] < arr[0]){
                rightIdx = middleIdx - 1;
                leftIdx = 0;
                break
            }
            else{
                rightIdx = middleIdx
                leftIdx = 0;
                break
            }
        }
        if(middleVal < arr[0]){
            rightIdx = middleIdx;
        }
        else if(middleVal > arr[0]){
            leftIdx = middleIdx;
        }
    }
    console.log('END RIGHT POINTER =>', rightIdx, 'VALUE =>', arr[rightIdx])
    let partTwoLeftIdx = rightIdx + 1;

    count = 0
    while(count < 10){
        count++
        let middleIdx = Math.floor((leftIdx + rightIdx) / 2)
        let middleVal = arr[middleIdx]
        
        console.log(arr)
        console.log('PART TWO')
        console.log('ITERATION => ', count);
        console.log('LEFT INDEX => ', leftIdx, 'VALUE =>', arr[leftIdx])
        console.log('MIDDLE INDEX =>', middleIdx, 'MIDDLE VALUE =>', arr[middleIdx])
        console.log('RIGHT INDEX => ', rightIdx, 'VALUE =>', arr[rightIdx])
        console.log('')
        if(middleVal < num){
            leftIdx = middleIdx + 1;
        }
        else if(middleVal > num){
            rightIdx = middleIdx - 1;
        }
        else if(middleVal === num){
            return middleIdx
        }
        else if(middleVal !== num){
            leftIdx = partTwoLeftIdx;
            rightIdx = arr.length - 1;
            count = 0
            break
        }
    }

    while(count < 10){
        count++
        let middleIdx = Math.floor((leftIdx + rightIdx) / 2)
        let middleVal = arr[middleIdx]
        
        console.log(arr)
        console.log('PART THREE')
        console.log('ITERATION => ', count);
        console.log('LEFT INDEX => ', leftIdx, 'VALUE =>', arr[leftIdx])
        console.log('MIDDLE INDEX =>', middleIdx, 'MIDDLE VALUE =>', arr[middleIdx])
        console.log('RIGHT INDEX => ', rightIdx, 'VALUE =>', arr[rightIdx])
        console.log('')
        if(middleVal < num){
            leftIdx = middleIdx + 1;
        }
        else if(middleVal > num){
            rightIdx = middleIdx - 1;
        }
        else if(middleVal === num){
            return middleIdx
        }
        else if(middleVal !== num){
                leftIdx = partTwoLeftIdx;
                rightIdx = arr.length - 1;
                count = 0
                break
        }
    }
    return -1
}
