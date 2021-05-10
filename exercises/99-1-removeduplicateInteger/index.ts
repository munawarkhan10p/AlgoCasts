


//Input: [1,1,1,3,3,4,3,2,4,2]  true

function containsDuplicate(nums: number[]): number[] {

    let tmp: number[] = [];

    for(let i = 0; i < nums.length; i++) {
        if(tmp.indexOf(nums[i]) == -1 ) {
            tmp.push(nums[i]);
        }
    }
  return tmp;


// or also we can use below method 

 const a = [...new  Set(nums)];
 console.log(a);

 // or we can use 

  const array = [1,3,2,5,2,1,4,2,1]
  const newArray = array.filter((elem, i, arr) => {
    if (arr.indexOf(elem) === i) {
     return elem
   }
})

console.log(newArray);

};

const v = containsDuplicate([1,1,1,3,3,4,3,2,4,2]);

console.log(v);