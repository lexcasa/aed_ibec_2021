let v =  [1, 2, 3, "A","B","A", 2, 2]

let w = []
let z = []

for (let i = 0; i < v.length; i++) {
    const element = v[i];
    if(typeof element == 'number'){
        w.push(element)
    } else if (typeof element == 'string'){
        z.push(element)
    }
}

let bubble = function (arr){
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if(arr[j] > arr[j+1]){
                let tmp = arr[j];
                arr[j] = arr[j+1]
                arr[j+1] = tmp
            }
        }
        
    }
    return arr
}

let numOrder = []
let strOrder = []
let allOrder = []

numOrder = bubble(w)
strOrder = bubble(z)
allOrder = numOrder.concat(...strOrder)

console.log(allOrder)