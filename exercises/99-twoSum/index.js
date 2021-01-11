function twoSum(n,target) {
    let result = [];
    
      for (let i = 0; i < n.length; i++) {
        for(let j = i + 1; j < n.length; j++){
          console.log('inside i ', i);
          console.log('inside j ', j);
          if(n[i] + n[j] === target) {
            result.push(i);
            result.push(j)
            break
          }
        }
      }
      console.log('Result is = ', result)
      return result;
    }
    
twoSum([2,7,11,15],0);