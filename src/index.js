module.exports = function towelSort(matrix) {
    if (matrix === undefined || matrix.length === 0) {
        return []
    }
    let matrixArray = []
    for (let index = 0; index < matrix.length; index++) {
        let array = matrix[index]
        if (index % 2 !== 0) array.sort().reverse()
        for (let i = 0; i < array.length; i++) {
            matrixArray.push(array[i])
        }
    }

    return matrixArray
}
