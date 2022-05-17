function task2() {
    let x = prompt ( "phần tử x:")
    creatArray()
    let count = 0

    for (let i = 0; i < array.length; i++) {
        if (x === array[i] ) {
            count++
        }
    }
    console.log(array)
    console.log("có bao nhiêu phân tử  : " + count)
}