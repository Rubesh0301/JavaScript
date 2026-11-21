const vechicle=["car","bus","truck"];
vechicle.push("bike");// add the element at the end
console.log(vechicle);
vechicle.pop();// remove the last element
console.log(vechicle);
vechicle.shift();// remove the first element
console.log(vechicle);
vechicle.unshift("bike");// add the element at the first 
console.log(vechicle);
console.log(vechicle.indexOf("truck"));
console.log(vechicle.indexOf("train"));// it will return -1 since there is no train in the array
vechicle.splice(2,2);// it will remove the element at index 1
console.log(vechicle);
vechicle.splice(1);
console.log(vechicle);// it will remove all the elements from index 1 to the end of the array
vechicle.splice(1,0,"train");
console.log(vechicle);
vechicle.splice(2,2,3);
console.log(vechicle);
