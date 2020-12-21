"use strict"

//random numbers for array
function getRandomInt(max){
    return Math.floor(Math.random() * Math.floor(2 * max) - Math.floor(max));
};
function getArray(len, rnd) {
    let tmp = [];
    for (let i = 0; i < len; i++) {
        tmp.push(getRandomInt(rnd));
    }
    return tmp;
};


//max&min for array (2 ways)
function getMaxOfArray(numArray){
    let result = numArray[0];
    for (let i = 0; i < numArray.length; i++) {
        if (numArray[i] > result) {
            result = numArray[i];
        };
    };
    return result;
};
function getMinOfArray(numArray){
    let result = numArray[0];
    for (let i = 0; i < numArray.length; i++) {
        if (numArray[i] < result) {
            result = numArray[i];
        };
    };
    return result;
};

//median for array
function getMedian(numArray) {
    if (numArray.length % 2 === 1) {
        return quickselect(numArray, numArray.length / 2);
    } else {
        return 0.5 * (quickselect(numArray, numArray.length / 2 - 1) +
                      quickselect(numArray, numArray.length / 2));
    }
};
function quickselect(numArray, k) {
    if (numArray.length === 1) {
        return numArray[0];
    }

    let pivot = numArray[0];

    let lows = numArray.filter(e => e < pivot);
    let pivs = numArray.filter(e => e === pivot);
    let higs = numArray.filter(e => e > pivot);

    if (k < lows.length) {
        return quickselect(lows, k);
    } else if (k < lows.length + pivs.length) {
        return pivs[0];
    } else {
        return quickselect(higs, k - lows.length - pivs.length);
    }
};

//quicksort functions
function swap(items, firstIndex, secondIndex){
    let temp = items[firstIndex];
    items[firstIndex] = items[secondIndex];
    items[secondIndex] = temp;
};
function partition(items, left, right) {
    let pivot = items[Math.floor((right + left) / 2)],
        i = left,
        j = right;
    while (i <= j) {
        while (items[i] < pivot) {
            i++;
        }
        while (items[j] > pivot) {
            j--;
        }
        if (i <= j) {
            swap(items, i, j);
            i++;
            j--;
        }
    }
    return i;
};
function quickSort(items, left, right) {
    let index;
    if (items.length > 1) {
        index = partition(items, left, right);
        if (left < index - 1) {
            quickSort(items, left, index - 1);
        }
        if (index < right) {
            quickSort(items, index, right);
        }
    }
    return items;
};

//tags count
function countTags() {
    let els = document.body.getElementsByTagName("*");
    let map = new Map();
    for (let el of els) {
        let tag = el.tagName;
        if (map.has(tag)) {
            map.set(tag, map.get(tag) + 1);
        } else {
            map.set(tag, 1);
        }
    }

    console.log(map);
}

let testArray = getArray(1000, 100)
console.log(testArray);
console.log("Max: "+getMaxOfArray(testArray));
console.log("Min: "+getMinOfArray(testArray));
console.log("Median: "+getMedian([...testArray]));
console.log(quickSort(testArray, 0, testArray.length));