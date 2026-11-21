const arr=new Array(3)
arr[0]=1
console.log(arr)
arr[1]=2
arr[2]=3
console.log(arr)
arr[3]="haii"
console.log(arr)
arr[4]=5
console.log(arr)
arr[5]=true
console.log(arr)
console.log(arr.at(3))
console.log(Array.isArray(arr))
var a=5
console.log(Array.isArray(a))
arr[0]=10
console.log(arr)
console.log("Length of the array is: "+arr.length)
var sum=0
for(var i=0;i<arr.length;i++){
    sum+=arr[i]
}
console.log("Sum of array elements is: "+sum)
console.log(arr)
console.log(arr[-1])
console.log(typeof arr)
var a=10
console.log(typeof a)