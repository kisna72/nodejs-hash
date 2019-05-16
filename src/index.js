const generateNewHash =  require("./helpers").generateNewHash
const getRandomAlphaNumericString = require("./helpers").getRandomAlphaNumericString
const {LinkedList} = require("./linked-list");

// Create a dummy block chain for this exercise. Block chains are conceptually linked list, so we will use that.
let dummyBlockChain = new LinkedList()
dummyBlockChain.add({
  hash:"97b8ea3e5d8b4b32ff2b1838f79546a8a3215d13b03d5e27320b77606db0b751",
  timestamp:1557963365148,
  company_name:"Parkhub",
  barcode:"LrBSHF3cane7A"
})
console.log(dummyBlockChain)


//Next Generate a QR Code. Next Add this QR Code to the block chain.
const randCharLength = 12 + Math.floor(Math.random()*5);
const timestamp = Date.now();
const company_name = "SpotHero"
let randChar; //Store randChar here, to make code more readable.
getRandomAlphaNumericString(randCharLength)
.then(_randChar=>{
  randChar = _randChar;
  return generateNewHash(_randChar, timestamp, company_name, dummyBlockChain.tail.hash)
})
.then(new_hash => {
  dummyBlockChain.add({
    hash:new_hash,
    timestamp:timestamp,
    company_name:company_name,
    barcode:randChar
  });
  console.log("added to dummy block chain")
  console.log(dummyBlockChain);
})
.catch(err => {
  console.log("Error")
});

