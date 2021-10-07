let a = [0,1,15,20,25]
let b = [0,1]
let fxyz = function (x,y,z){
    let cond1 = x != a[0] && a.includes(x) && z != a[a.length -1]
    let cond2 = z != b[b.length -1] && b.includes(z)
    if(cond1){
        return x + y
    } else if (cond2){
        return z+1
    } else {
        return 1/2
    }
}