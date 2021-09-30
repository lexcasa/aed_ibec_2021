let v = ["B","B",1,1,1,2,2,0,null]
let w = []
let nullable = [0,null]

// Algoritmo 1 - Verifico los valores nulables
for (let i = 0; i < nullable.length; i++) {
    const item = nullable[i];
    if(v.includes(item)){
        w.push(item)
        break
    }   
}

// Algoritmo 2 - Saco los repetido
let z = []

for(let i = 0; i < v.length; i++){
    if(!z.includes(v[i])){
      z.push(v[i])
    }
 }

 // algoritmo 3
 for(let i= 0; i<z.length; i++){
    let count = 0
    for(let j = 0; j < v.length; j++){
        if(z[i] == v[j]){
            count++
        }
    }
    if(count > 2){
        w.push(z[i])
    }
}

console.log("Output: ", w)

