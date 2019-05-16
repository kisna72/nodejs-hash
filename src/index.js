const generateNewHash =  require("./helpers").generateNewHash
const getRandomAlphaNumericString = require("./helpers").getRandomAlphaNumericString
const {LinkedList} = require("./linked-list");

function addQRCodeToBlockChain(qr_code, customer, dummyBlockChain){
  const timestamp = Date.now();
  //If adding first item in our dummyBlockChain, there will be no last_hash, so use empty string. 
  const last_hash = dummyBlockChain.tail ? dummyBlockChain.tail.hash : ""
  return generateNewHash(qr_code,timestamp,customer,last_hash)
  .then(new_hash=>{
    dummyBlockChain.add({
      hash:new_hash,
      timestamp:timestamp,
      company_name:customer,
      barcode:qr_code
    });
    console.log("Blockchain updated")
  })
}

/*
USAGE EXAMPLE
*/

// Create a dummy block chain for this exercise. Block chains are conceptually linked list, so we will use a linked list for this exercise.
const dummyBlockChain = new LinkedList()
// Seed the dummyBlockChain with the first block
dummyBlockChain.add({
  hash:"97b8ea3e5d8b4b32ff2b1838f79546a8a3215d13b03d5e27320b77606db0b751",
  timestamp:1557963365148,
  company_name:"Parkhub",
  barcode:"LrBSHF3cane7A"
})
console.log(dummyBlockChain)

//Generate a pseudo-random number between 12 - 16. We will pass this to our getRandomAlphaNumericString function to produce qr codes.
const randCharLength = 12 + Math.floor(Math.random()*5);
const company_name = "SpotHero" //Example Company.
getRandomAlphaNumericString(randCharLength) //Decided to use crypto's (pseudo) random algorithm for this exercise - which can take time, hence written as async code. 
.then(qr_code => {
  addQRCodeToBlockChain(qr_code, company_name,dummyBlockChain)
}).catch(err=>console.log("Error"))

module.exports = addQRCodeToBlockChain //Exporting for testing