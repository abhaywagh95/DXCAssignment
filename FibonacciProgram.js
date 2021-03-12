/**
 * Get Fibonacci sequence
 *
 * @param {integer} nums
 *
 * @return {Array|string}
 */
function GetfibonacciValues(nums) {
  try {
      const tempArray = new Array();
      tempArray.push(0);
      tempArray.push(1);

      if(nums === undefined || nums === null)
        return 0;

      if(!Number.isInteger(nums))
        return 'Invalid Input';
  
      if(nums <= 0)
        return 0;
  
      if(nums === 1)
        return tempArray;
  
      let initialArray = new Array();
      initialArray.push(0);
      initialArray.push(1);  
  
      let data = new Array();
  
      for(let i = 2; i < nums; i++) {    
      initialArray[i] = initialArray[i - 1] + initialArray[i - 2]; 
      data.push(initialArray[i]);     
    }      
    return tempArray.concat(data); 
  } catch (error) {   
    return 0;   
  }
}
module.exports = { GetfibonacciValues };
