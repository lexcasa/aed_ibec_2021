let R = [1,22,3]
let C = [0.5,12,50]
let TIME = 10
let K = 10000

let pOpt = function (r,c,t){
    if(r.length == c.length){
        let opt = 0
        for (let i = 0; i < r.length; i++) {
            opt += r[i] * c[i] * t;
        }
        return opt
    }
    return 0
}

let popt = 0

for (let j = 0; j <= TIME; j++) {
    popt += pOpt(R,C,j);
    
    if(popt > K){
        console.log("popt DOWN :: ", popt)
    } else {
        console.log("popt OK :: ", popt)
    }
}