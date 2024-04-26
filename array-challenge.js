const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

/*
    Challenge: Display the numbers using the below format
*/
 

let evenNum = []
let oddNum = []


for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      evenNum.push(arr[i]);
    } else {
      oddNum.push(arr[i]);
    }
  }
  
  console.log("EVEN NUMBERS:");
  for (let i = 0; i < evenNum.length; i++) {
    console.log(evenNum[i]);
  }
  
  console.log("ODD NUMBERS:");
  for (let i = 0; i < oddNum.length; i++) {
    console.log(oddNum[i]);
  }