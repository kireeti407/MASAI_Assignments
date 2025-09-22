// Explain what Rest and Spread operators are.
// Show at least one example of Rest (collecting arguments into an array).
// Show at least one example of Spread (expanding arrays/objects).
// Explain shallow copy vs deep copy using Spread operator on objects/arrays.
// Demonstrate why Spread makes a shallow copy by showing changes to nested objects.
// Provide a working example of your own (write the code live in the video).
// Do not use any pre-written code – write it during the recording.

function sum(...nums){
    let res=0
    for(let i of nums) res+=i
    return res
}

console.log(sum(10,20,30,60))

let arr1=[1,2,3,6,7]
let arr2=[8,10]

let res=[...arr1,...arr2]

console.log(res)

let obj={name:'kireeti',age:21,adress:{city:"atp",pincode:515001}}
let obj2=obj //normal copy
// obj2.name="kiyo"

// console.log(obj)

let obj3={...obj}
// obj3.name="kiyo"
// obj3.adress.city="kadiri"
// console.log(obj)

let obj4=JSON.parse(JSON.stringify(obj)) //deep copy

obj4.adress.pincode=515002

console.log(obj)
console.log(obj4)




