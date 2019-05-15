const generateNewHash =  require("./helpers").generateNewHash
const getRandomAlphaNumericString = require("./helpers").getRandomAlphaNumericString
const {Node,LinkedList} = require("./linked-list");

// Create a dummy block chain for this exercise. Block chains are conceptually linked list, so we will use that.
dummyBlockChain = new LinkedList()
dummyBlockChain.add({
  hash:"97b8ea3e5d8b4b32ff2b1838f79546a8a3215d13b03d5e27320b77606db0b751",
  timestamp:1557963365148,
  company_name:"Parkhub",
  barcode:"LrBSHF3cane7A"
})

console.log(dummyBlockChain)

//Example Usage:
const old_hash = dummyBlockChain.tail.hash;
const timestamp = Date.now();
const randCharLength = 12 + Math.floor(Math.random()*5)
company_name = "ParkHub Customer A"
getRandomAlphaNumericString(randCharLength).then(randChar => {
  console.log("creating hash for ", randChar);
  console.log(timestamp);

  generateNewHash(randChar, timestamp, "Parkhub", old_hash).then(
    new_hash => {
      dummyBlockChain.add({
        hash:new_hash,
        timestamp:timestamp,
        company_name:company_name,
        old_hash:dummyBlockChain.tail
      });

      console.log(dummyBlockChain)
    },
    error => {
      console.log("Error Producing New Hash! ");
      console.log(error)
    }
  )
  
})


