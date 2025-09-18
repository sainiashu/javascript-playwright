




//Find the Most Frequent Element

//Reverse Array
// function reverseArray(array){
    
//     const reversed  = []
//     for(let i =array.length-1; i>=0;i-- ){
//         reversed.push(array[i])
//     }
//     return reversed

// }
// console.log(reverseArray([1,2,3,4]))




//you want a function that takes a number n and returns the sum of all numbers from 1 to n.
// function sumUpto(n){
//     let answer = 0
//     for(let i=1; i<=n; i++)
//     {
//         answer +=i
//     }
//     return answer
// }
// console.log(sumUpto(4))








// function mostFrequent(arr){
//     const count = {}
//     let maxCount = 0
//     let mostFrequentElem

//     for (let num of arr){
//         count[num] = (count[num] || 0) + 1
//         if(count[num] > maxCount){
//             maxCount = count[num]
//             mostFrequentElem = num
//         }

//     }
//     return mostFrequentElem

// }

// console.log(mostFrequent([1, 2, 2, 3, 3, 3, 4]))




// function mostFrequent(arr){
//     const count = {}
//     let maxCount = 0
//     let mostFrequentElem

//     for (let num of arr){
//         count [num] = (count[num] || 0) + 1
//         if(count[num] > maxCount){
//             maxCount = count[num]
//             mostFrequentElem = num 
//         }
//     }
//     return mostFrequentElem

// }
// console.log(mostFrequent([1, 2, 2, 3, 3, 3, 4]))







//Remove Duplicates from Array of Objects

// function uniqueById(arr){
//     const seen  = new Set()
//     return arr.filter(item=>{
//         if(seen.has(item.id)) return false
//         seen.add(item.id)
//         return true
//     })
// }

// const data= [
//     { id: 1, name : 'tester'},
//     { id: 2, name : 'demo'},
//     { id: 1, name : 'tester'}
// ] 


// console.log(uniqueById(data))

// function groupByLength(words){
//     return words.reduce((acc, word)=>{
//         const len = word.length
//         acc[len] = acc[len] || []
//         acc[len].push(word)
//         return acc
//     }, {})

// }
// console.log(groupByLength(["hi", "yes", "no", "maybe"]));









//Find the First Non-Repeating Character
// function firstNonRepeatingChar(str) {
//   const count = {};
//   for (let char of str) {
//     count[char] = (count[char] || 0) + 1;
//   }
//   for (let char of str) {
//     if (count[char] === 1) return char;
//   }
//   return null;
// }

// console.log(firstNonRepeatingChar("swiss")); // w







// function removeDuplicates(arr){
//     return [... new Set(arr)]
// }

// console.log(removeDuplicates([1,2,3,3,3,3,4]))


// function removeDuplicates(arr){
//     return [... new Set(arr)]
// }

// console.log(removeDuplicates([1,2,3,3,2,5,4,]))
//------
// function toUpperCase(str){
//     return str.toUpperCase()
// }

// console.log(toUpperCase('test'))





// function toUpperCaseArray(arr){

//     return arr.map(str => str.toUpperCase())
// }
// console.log(toUpperCaseArray(['apple','mango']))


// }




//------
// function sumEven(arr){

//  return arr.filter(x => x % 2 === 0).reduce((a,b)=>a+b, 0)
// }

// console.log(sumEven([1,2,3,4]))




// function commonElement(arr1, arr2){

//         return arr1.filter(x=> arr2.includes(x))
// }

// console.log(commonElement([1,2,3],[2,3,4,5]))



//------
// function factorial (n){
//     if(n===0 ) return 1
//     return n * factorial(n-1)
// }




// console.log(factorial(5))

//--------------
// function primesUpTo(n) {
//     const primes = [];
//     for (let i = 2; i <= n; i++) {
//         if (!primes.some(p => i % p === 0)) primes.push(i);
//     }
//     return primes;
// }	

// console.log(primesUpTo(10)); // Output: [2,3,5,7]


//---------------
// function isAnagram(str1, str2){
//     return str1.split('').sort().join('') === str2.split('').sort().join('')
// }

// console.log(isAnagram('listen', 'silent'))





// function isAnagram(str1, str2){
//     return str1.split('').sort().join('') === str2.split('').sort().join('')
// }
// console.log(isAnagram('silent', 'aa'))

//---------------
// function wordCount(str){
//     return str.trim().split(/\s+/).length
// }



// console.log(wordCount("I will do it"))
//---------------
// function secondLargest(arr){
//     const unique = [... new Set(arr)]
//     unique.sort((a,b)=> b-a)
//     return unique[1]

// }

// console.log(secondLargest([1,2,3,4]))



//--------------------
// function mergeUnique(arr1, arr2){

//     return [... new Set([...arr1, ...arr2])]
// }
// console.log(mergeUnique([1,2,3],[3,4,5]))





//--------------------

// function removeFalsyValue(arr){
//     return arr.filter(Boolean)

// }
// console.log(removeFalsyValue([2,6,9,'',false]))




//--------------------
// function countVowel(str){
//     const vowel = 'aeiou'
//     let count = 0
//     for (const char of str){
//         if (vowel.includes(char)) count ++
//     }
//     return count
// }
// console.log(countVowel('vowel'))




//--------------
// function findMin(arr){
//     return Math.min(...arr)
// }
// console.log(findMin([2,6,9]))

// function findMax(arr){
//     return Math.max(...arr)
// }
// console.log(findMax([2,6,9]))


//--------------------------------
// function flattenArray(arr){

//     return arr.flat(Infinity)
// }
// console.log(flattenArray([1,2,[3,4,[5,6]]]))







//------------------------
// function filterEven(arr){
//     return arr.filter(num => num%2 ===0)
// }
// console.log(filterEven([10,20,15,7]))
//------------------------



// function countChar(str){
//     const count = {}
//     for (const char of str){
//         count[char] = (count[char] || 0) + 1
//     }
//     return count
// }
// console.log(countChar('testing'))





//------------------------
// function topthreeUnique(arr){
//     const unique = [... new Set(arr)]
//     unique.sort((a,b)=> b-a )
//     return unique.slice(0,3)
// }

// console.log(topthreeUnique([1,2,2,3,4,5]))




//------------------------
// function sumArr(arr){
//     return arr.reduce((acc, val)=> acc + val, 0)
// }

// console.log(sumArr([1,2,3]))



//-------------------
//Duplicate func
// function findDuplicate(arr){

//     const seen = new Set()
//     const duplicate = new Set()

//     arr.forEach(num => {
//         if(seen.has(num)){
//             duplicate.add(num)
//         }
//         else{
//             seen.add(num)
//         }                
//     });
//     return Array.from(duplicate)
// }

// console.log(findDuplicate([1,2,3,1,4]))




//**************** */s
//palindrome
// function ispalindrome(str){

//     const reverse= str.split('').reverse().join('')
//     return str ===reverse
// }


// console.log(ispalindrome('racer'))



// function ispalindrome(str){
//     const reverse = str.split('').reverse().join('')
//     return str === reverse
// }
// console.log(ispalindrome('racer'))


//**************** */
//Reverse string
// function reverseString(str){
//     return str.split('').reverse().join('')
// }

//  console.log(reverseString('dummy'))
