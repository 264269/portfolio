"use strict"

//random numbers for array
var getRandomInt = function(max){
    return Math.floor(Math.random() * Math.floor(2 * max) - Math.floor(max));
}

//max&min for array (2 ways)
function getMaxOfArray(numArray){
    return Math.max.apply(null, numArray);
}
function getMinOfArray(numArray){
    return Math.min.apply(null, numArray);
}
function getMax(numArray){
    
    var maxNum = numArray[0];
    for (var i = 0; i < numArray.length; i++) {
        if (numArray[i] > maxNum) {
            maxNum = numArray[i];
        }
    }
    return maxNum;
}
function getMin(numArray){
    var minNum = numArray[0];
    for (var i = 0; i < numArray.length; i++) {
        if (numArray[i] < minNum) {
            minNum = numArray[i];
        }
    }
    return minNum;
}

//median for array
function getMedian(numArray){
    var half = Math.floor(numArray.length / 2);
    numArray.sort(function(a, b) { return a - b;})
    return numArray[half];
}

//array filling
function getArray(len, rnd) {
    var tmp = [];
    for (let i = 0; i < len; i++) {
        tmp.push(getRandomInt(rnd));
    }
    return tmp;
}

//quicksort
function swap(items, firstIndex, secondIndex){
    var temp = items[firstIndex];
    items[firstIndex] = items[secondIndex];
    items[secondIndex] = temp;
}
function partition(items, left, right) {
    var pivot = items[Math.floor((right + left) / 2)],
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
}
function quickSort(items, left, right) {
    var index;
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
}

//tags count
function countTags(tagNames){
    for (var [key, value] of tagNames) {
        tagNames.set(key, document.querySelectorAll(key).length)
    }
}

var testArray = getArray(1000, 100)
console.log(testArray);

document.writeln("Max: "+getMax(testArray)+"<br>");
document.writeln("Min: "+getMin(testArray)+"<br>");
document.writeln("Median: "+getMedian([...testArray])+"<br>");

console.log(quickSort(testArray, 0, testArray.length));

var tags = new Map();
tags.set("div", undefined).set("a", undefined).set("section", undefined).set("h1", undefined);
tags.set("nav", undefined).set("ul", undefined).set("a", undefined).set("li", undefined);
tags.set("img", undefined).set("p", undefined).set("h4", undefined).set("dl", undefined);
tags.set("dt", undefined).set("dd", undefined).set("time", undefined).set("pre", undefined);
tags.set("q", undefined).set("code", undefined).set("script", undefined);
countTags(tags);
document.writeln("<br>---tags---<br><br>");
for (var [key, value] of tags) {
    document.writeln(key + ": " + value + "<br>");
}