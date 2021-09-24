let v = [1, "1", "11"]
let w = []
const flag = 1

for (let i = 0; i < v.length; i++){
    if(flag === parseInt(v[i])){
        w.push(v[i])
    }
}
console.log(w)