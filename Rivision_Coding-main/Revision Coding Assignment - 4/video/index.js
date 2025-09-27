
// spread

let arr=[1,2,3,4,56,7]

let copyarr=[...arr]



let arr2=[1,2,3,45,5]

let res=[...arr,...arr2]

console.log(res)


let obj={name:"kireeti",age:21}

let ob2={rollno:46,branch:"cse"}

let mob={...obj,...ob2}

console.log(mob)


// rest

function add(...args){
    console.log("args:- ",args)
    let res=0
    for(let i of args) res+=i
    return res
}

console.log(add(1,2,3,4,5,6))
