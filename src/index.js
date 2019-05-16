const generateNewHash =  require("./helpers").generateNewHash
const getRandomAlphaNumericString = require("./helpers").getRandomAlphaNumericString
const {LinkedList} = require("./linked-list");



function addQRCodeToBlockChain(qr_code, customer, dummyBlockChain){
  const timestamp = Date.now();
  const last_hash = dummyBlockChain.tail ? dummyBlockChain.tail.hash : ""
  return generateNewHash(qr_code,timestamp,customer,last_hash)
  .then(new_hash=>{
    dummyBlockChain.add({
      hash:new_hash,
      timestamp:timestamp,
      company_name:customer,
      barcode:qr_code
    });
    console.log(dummyBlockChain.size)
  })
}


/*
USAGE
*/

// Create a dummy block chain for this exercise. Block chains are conceptually linked list, so we will use that.
const dummyBlockChain = new LinkedList()
dummyBlockChain.add({
  hash:"97b8ea3e5d8b4b32ff2b1838f79546a8a3215d13b03d5e27320b77606db0b751",
  timestamp:1557963365148,
  company_name:"Parkhub",
  barcode:"LrBSHF3cane7A"
})
console.log(dummyBlockChain)


//Next Generate a QR Code. Next Add this QR Code to the block chain.
const randCharLength = 12 + Math.floor(Math.random()*5);
console.log(randCharLength)
const company_name = "SpotHero"
getRandomAlphaNumericString(randCharLength)
.then(qr_code => {
  addQRCodeToBlockChain(qr_code, company_name,dummyBlockChain)
}).catch(err=>console.log("Error"))


module.exports = addQRCodeToBlockChain