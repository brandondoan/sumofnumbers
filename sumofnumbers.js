/**
<<<<<<< HEAD
 * Solving experience e26
 * Created by BranDoan on 2/5/2017.
=======
 * Solving experience E26
 * Created by BrandonDoan on 2/5/2017.
>>>>>>> origin/master
 */

const testNums = [1, 2, 3, 4];

function sumFor(nums) {
<<<<<<< HEAD
  let total = 0;
  for (let i = 0; i < nums.length; i += 1) {
    total += nums[i];
  }
  return total;
=======
  let sum = 0;
  for (const num of nums) {
    sum += num;
  }
  return sum;
>>>>>>> origin/master
}

console.log(sumFor(testNums));

function sumWhile(nums) {
<<<<<<< HEAD
  let total = 0;
  let i = 0;
  while (i < nums.length) {
    total += nums[i];
    i += 1;
  }
  return total;
=======
  let sum = 0;
  let i = 0;
  while (i < nums.length) {
    sum += nums[i];
    i++;
  }
  return sum;
>>>>>>> origin/master
}

console.log(sumWhile(testNums));

function sumRecursion(nums) {
  if (nums.length === 0) {
    return 0;
  }
<<<<<<< HEAD
  return nums[0] + sumRecursion(nums.slice(1, nums.length));
=======
    return nums[0] + sumRecursion(nums.slice(1, nums.length));
>>>>>>> origin/master
}

console.log(sumRecursion(testNums));

function sumTheSimpleWay(nums) {
<<<<<<< HEAD
  return _.reduce(nums, function mems(memo, num) { return memo + num;}, 0);
}

console.log(sumTheSimpleWay(testNums));
=======
  return _.reduce(nums, function mem(memo, num) { return memo + num; }, 0);
}

console.log(sumTheSimpleWay(testNums));
>>>>>>> origin/master
