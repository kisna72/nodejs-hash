const assert = require("assert");//import inbuilt assertion library. 
const addQRCodeToBlockChain = require("../src/index");
const { LinkedList } = require("../src/linked-list");

describe("addQRCodeToBlockChain Function", function(){
  
    it("Should update empty blockchain", async function(){
      let dummyBlockChain = new LinkedList()
      await addQRCodeToBlockChain("qrcode","customer", dummyBlockChain)
      assert.equal(dummyBlockChain.size, 1);
    });

    it("Should update non-empty blockchain", async function(){
        let dummyBlockChain = new LinkedList()
        dummyBlockChain.add({
            hash:"97b8ea3e5d8b4b32ff2b1838f79546a8a3215d13b03d5e27320b77606db0b751",
            timestamp:1557963365148,
            company_name:"Parkhub",
            barcode:"LrBSHF3cane7A"
        })
        await addQRCodeToBlockChain("qrcode","customer", dummyBlockChain)
        assert.equal(dummyBlockChain.size, 2);
    });
});
  
