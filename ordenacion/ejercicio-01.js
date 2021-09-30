let v = [1,2,3,"A","A","B",2,2,"C"]
let z = []

// Ordenamiento numerico
// Puedo clasificar en dos arrays
// - Array de numeros
// - Array de letras (string)

let numArr = []
let strArr = []

v.map( item => {
    if(typeof item == 'number'){
        numArr.push(item)
    } else if(typeof item == 'string'){
        strArr.push(item)
    }
})

let bubbleOrder = inputArr => {
    // Bubble sort
    for (let i = 0; i < inputArr.length; i++) {
        for (let j = 0; j < inputArr.length; j++) {
            if(inputArr[j] > inputArr[j+1]){
                let tmp = inputArr[j]
                inputArr[j] = inputArr[j+1]
                inputArr[j+1] = tmp
            }
        }
    }
    return inputArr
}

numArr = bubbleOrder(numArr)
strArr = bubbleOrder(strArr)

console.log(numArr, strArr)