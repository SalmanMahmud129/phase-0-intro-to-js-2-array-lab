// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"]


function destructivelyAppendCat(newCat){
    //cat = "Ralph"
    cats.push(newCat)
}

function destructivelyPrependCat(newCat){
    cats.unshift(newCat)
}

function destructivelyRemoveLastCat(){
    cats.pop()
}

function destructivelyRemoveFirstCat(){
    cats.shift()
}

function appendCat(newCat){
    const newCatArr = [...cats, newCat]

    return newCatArr
}

function prependCat(newCat){
    const newCatArr = [newCat, ...cats]

    return newCatArr
}

function removeLastCat(){
    const lastCatRemoved = cats.slice(0,cats.length - 1) //starts at the first index. The length of the list is 3 which means it goes up to index 2. The -1 is to get to index 2 since the length is 3. Index 2 is the last index so that will be the one to be removed
    
    return lastCatRemoved
}

function removeFirstCat(){
    const firstCatRemoved = cats.slice(1) // starts at index one and copies the rest of the original list. Leaving out the first cat at index 0

    return firstCatRemoved
}