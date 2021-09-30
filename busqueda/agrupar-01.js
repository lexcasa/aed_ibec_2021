let v = [1,1,5,6,1,6]
let w = [] // 1,6

for(let i = 0; i < v.length; i++){
   if(!w.includes(v[i])){
     w.push(v[i])
   }
}

let z = []
let y = []
for(let i= 0; i<w.length; i++){
    let count = 0
    for(let j = 0; j < v.length; j++){
        if(w[i] == v[j]){
            count++
        }
    }
    if(count > 1){
        z.push(w[i])
        y.push([w[i], count])
    }
}

console.log(w,z,y)