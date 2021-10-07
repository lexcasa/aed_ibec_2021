let w = [1,"1","11"]
const flag = 1
let z = []
let v = []

for (let i = 0; i < w.length; i++) {
    if(w[i].toString().includes( flag.toString() )){
        z.push(w[i])
    }
}

console.log(z)

for (let i = 0; i < w.length; i++) {
    if( flag +"1" === w[i]){
        v.push(w[i])
    }
}
console.log(v)