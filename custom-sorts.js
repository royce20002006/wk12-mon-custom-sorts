function ageSort(users) {
  return users.sort((a, b) => a.age - b.age)
}

function oddEvenSort(arr) {
  return arr.sort((a, b) => {
    if (a % 2 === 0 && b % 2 === 1) return 1;
    if (b % 2 === 0 && a % 2 === 1) return -1;
    return a - b;
  })
}


function validAnagrams(s, t) {
  let arrS = s.split('');
  let arrT = t.split('');
  let sortedS = arrS.sort();
  let sortedT = arrT.sort();
  return sortedS.join('') === sortedT.join('');
}
// understand the problem
// group numbers by its base ex. 100 vs 10 vs 1
// in the group we want to assend the order ex 100 101 102
// inputs is an array of decimals.

function reverseBaseSort(arr) {
  
  return arr.sort((a, b) => {
    // let arrbase100 = arr.filter(el => el >= 100);
    // let arrBase10 = arr.filter(el => el >= 10 && el < 100);
    // let arrBase1 = arr.filter(el => el < 10)
    // arrbase100.sort();
    // arrBa
    
    
    
    if (Math.floor(Math.log10(a)) > Math.floor(Math.log10(b)) ) return -1;
    if (Math.floor(Math.log10(b)) > Math.floor(Math.log10(a)) ) return 1;
    return a - b
    
    
  })
}

function frequencySort(arr) {
  // Your code here 
}

module.exports = [
  oddEvenSort,
  validAnagrams,
  reverseBaseSort,
  frequencySort,
  ageSort,
];
