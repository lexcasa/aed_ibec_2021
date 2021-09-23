let v = [1,2,3,"A","B",5]
let w = []
let z = []

for (let i = 0; i < v.length; i++){
 if(typeof v[i] == 'number'){
     w.push(v[i])
 } else if( typeof v[i] == 'string'){
    z.push(v[i])
 }   
}
console.log(w,z)