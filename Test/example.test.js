var assert = require('assert');
const program = require('../FibonacciProgram');

describe('Fibonacci Sequence', function() {

  it('should return 0 when the input value is undefined or null', function() {
      try {        
        const array = program.GetfibonacciValues(null);    
        assert.equal(array, 0)  
      } catch (error) {
        assert.ifError("testcase failed");
      }      
  })

  it('should return [0,1] when the input value is 1', function() {
    try{      
      const array = program.GetfibonacciValues(1); 
      assert.equal(isArrayEqual(array, [0,1]), true);      
    }
    catch{
      assert.ifError("Test case failed: if input value is 1");
    }        
  })

  it('should return [0,1,1,2,3,5,8,13] when the input value is 8', function() { 
    try {
      const array = program.GetfibonacciValues(8);
      assert.equal(isArrayEqual(array, [0,1,1,2,3,5,8,13]), true);
    } catch (error) {
      assert.ifError("Test case failed: if input value is 8")
    }      
  })

  it('should return "Invalid Input" message when the input value is Character', function() { 
    try {
      const array = program.GetfibonacciValues('A');      
      assert.equal(array, 'Invalid Input');
    } catch (error) {
      assert.ifError("Test case failed: if input value is 8")
    }      
  })

});

/**
 * Get Fibonacci sequence
 *
 * @param {Array} array1
 * @param {Array} array2
 *
 * @return {boolean}
 */
function isArrayEqual(array1, array2) 
{  
    if(array1.length!=array2.length) 
    {
      return false; 
    }  
    else
    { 
    for(var i=0;i<array1.length;i++) 
    {
        if(array1[i]!=array2[i]) 
          return false;     
    }   
      return true; 
    } 
} 