// By using closures 

function Calculator(){
    let total = 0 
    return add = function(x){
        total+=x 
        return function (y){
            total+=y 
            return function(z){
                total+=z 
                return total
            }
        }
    }
}
let myCalculator = Calculator()
console.log(myCalculator(4)(20)(6)) // 30