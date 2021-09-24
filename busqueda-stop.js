let v = [1,2,5,"A","C",6,"B","B","A","B"]
let z = []
const flag = "B"
let pb = 0
let i = 0;

for (i = 0; i < v.length; i++){
    if(v[i] == flag){
        pb = i
        break
    }
}

if(pb == v.length - 1){
    i = pb
}

z.push(flag, pb, i)

console.log(z)