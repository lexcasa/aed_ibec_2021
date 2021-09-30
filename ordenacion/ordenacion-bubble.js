let v = [1,5,12,3,6,11,9,2]

for (let i = 0; i < v.length; i++) {
    for (let j = 0; j < v.length; j++) {
        if(v[j] > v[j+1]){
            let tmp = v[j]
            v[j] = v[j+1]
            v[j+1] = tmp
        }
    }
    console.log(`i: ${i}`, v)
    console.log("i: "+i, v)
}