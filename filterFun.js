const arr=[1,2,3,4,3,5,6,7]
// print the all elelments in an array
arr.filter((item)=>{
    console.log(item)
})

// get the a specific elelment in an array
const result =arr.filter((item)=>{
    return item===3
})
console.log(result)