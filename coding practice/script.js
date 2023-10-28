//Question 1 : Write a function createHelloWorld. It should return a new function that always returns "Hello World". Ref->https://leetcode.com/problems/create-hello-world-function/?envType=study-plan-v2&envId=30-days-of-javascript
let createHelloWorld = function() {
    return function(){
     return "Hello World"   
    }
  };

//Question 2 : Given an integer n, return a counter function. This counter function initially returns n and then returns 1 more than the previous value every subsequent time it is called (n, n + 1, n + 2, etc). Ref -> https://leetcode.com/problems/counter/
var createCounter = function(n) {
    let currentCount = n - 1;
    return function() {
      currentCount += 1;
      return currentCount;      
    };
  };

//Question 3 : Given a positive integer millis, write an asynchronous function that sleeps for millis milliseconds. It can resolve any value. Ref -> https://leetcode.com/problems/sleep/
async function sleep(millis) {
    await new Promise(resolve => setTimeout(resolve, millis));

}