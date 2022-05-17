function task1() {
    creatArray()
    let count = 0
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 === 0) {
            count++
        }
    }
    console.log(array)
    console.log("số chẵn có tất cả là : " + count)
}

