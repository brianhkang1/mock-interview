// 1. given a sentence out put this in reverse order
// input: this is a test string
// output: string test a is this
function reverse(input) {
  let arr = input.split(" ")
  let reversed = arr.reverse()
  return(reversed.join(" "))
}


// 2. given a word output true if it's a palindrome and false if it is not
// note: you cannot use the reverse method this time
function palindrome(input) {
  let arr = input.split("")
  for (let i = 1; i < arr.length / 2; i++){
      if (arr[i - 1] !== arr[arr.length - i]) {
          return false
      }
  }
  return true;
}

// 3. given a sentence find the frequency of each character ignoring whitespace
// input: "this is a test string"
// NOTE: ignore whitespace character
// output: t:4,h:1,i:3...etc
function frequency(input){
  let obj = {}
  let arr = input.split("")

  arr.forEach(element => {
    if(!obj[element]){
        obj[element] = 1
    } else {
      obj[element] = obj[element] + 1
    }
  })

  delete obj[" "]
  return obj
}

// 4. given an index N find the value at the index N in the fibonacci sequence recursively
// fibonacci sequence 1,1,2,3,5,8,13,21
// indices:           0,1,2,3,4,5,6, 7
// if N = 6 output 8
function fibIndex(index){
  if (index < 2){
    return 1
  } else {
    return fibIndex(index-1) + fibIndex(index-2)
  }
}
