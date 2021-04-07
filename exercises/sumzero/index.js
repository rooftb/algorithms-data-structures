/* function sumZero(arr) {
  for(let i = 0; i<arr.length; i++) {
    for(let j = i+1; j < arr.length; j++) {
      if(arr[i] + arr[j] === 0) {
        console.log([arr[i], arr[j]]);
      }
    }
  }
} */

function sumZero(arr) {
let left = 0;
let right = arr.length - 1;

while(left < right) {
	let sum = arr[left] + arr[right];
  if(sum === 0) {
  	console.log([arr[left], arr[right]])
  	} else if (sum > 0){
  		right--;
  	} else {
  		left++;
  	}
	}
}

sumZero([-5, -3, -2, -1, 0, 1, 3 ,5])