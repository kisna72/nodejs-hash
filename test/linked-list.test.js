const { Node, LinkedList } = require("../src/linked-list");
const assert = require("assert");//import inbuilt assertion library. 

describe("LinkedList Function", function(){
  
  it("Should be empty", async function(){
    let dummyBlockChain = new LinkedList()
    assert.equal(dummyBlockChain.size, 0);
  });

  it("Should change size when new Node is added", async function(){
    let dummyBlockChain = new LinkedList()
    dummyBlockChain.add({
      hash:"97b8ea3e5d8b4b32ff2b1838f79546a8a3215d13b03d5e27320b77606db0b751",
      timestamp:1557963365148,
      company_name:"Parkhub",
      barcode:"LrBSHF3cane7A"
    })
    assert.equal(dummyBlockChain.size, 1);
  });

});

describe("Node Function", function(){

  it("Should create a new node", function(){
    let n = new Node({foo:'bar'})
    assert.equal(typeof(n),"object");
    assert.equal(n.prev, null)
  })

});