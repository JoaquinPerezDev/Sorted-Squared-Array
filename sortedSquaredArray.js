// Write a function that takes in a non-empty array of integers that are sorted in ascending order and returns a new array of the same length with the squares of the original integers also sorted in ascending order. 

//Sample input:  array =      [1, 2, 3, 5, 6, 8, 9]
//Sample output: squaredArr = [1, 4, 9, 25, 36, 64, 81]

//Brute force: My first thought was to create a new array to store the squared values in, then sort the array, then run a forEach loop to insert the squared value of each number into the new squaredArr. Finally, we would need to sort the squaredArr, as some negative values in array could throw off the order of squaredArr. The time complexity here is because of the final sorting function after running the forEach loop.

//O(nlog(n)) time | O(n) space complexity

function sortedSquaredArray(array) {
  // Write your code here.
  squaredArr = [];
  array.sort((a, b) => a - b);
  array.forEach((num) => squaredArr.push(num ** 2));
  squaredArr.sort((a, b) => a - b);
  return squaredArr;
}

//Pointers approach: The above approach is not the most optimal, since we have to sort through arrays twice. To avoid this, we can use two pointers at each end of the array. These pointers would then compare the absolute values of each integer, multiplying the higher value by its square root, then inserting it at the end of the squaredArr. This combines the sorting and looping functions to create a linear time complexity. Space complexity is also linear, given that this is based on the size of the arrays.  

//O(n) time | O(n) space complexity

function sortedSquaredArray(array) {
  // Write your code here.
  squaredArr = [];

  let start = 0;
  let end = array.length - 1;

  //We need to loop through the array in reverse order. 
  for( let i = end; i > -1; i--) {
    startValue = Math.abs(array[start]) ** 2;
    endValue = Math.abs(array[end]) ** 2;

    if(startValue < endValue) {
      //insert value of end pointer to end of squaredArr
      //move end pointer to the left, end--
      squaredArr[i] = endValue;
      end--;
    } else {
      //insert value of end pointer to end of squaredArr
      //move start pointer to the right, start++
      squaredArr[i] = startValue;
      start++;
    }
  }
  return squaredArr;
}