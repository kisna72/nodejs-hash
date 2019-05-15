const assert = require("assert");//import inbuilt assertion library. 
const generateSha256Hash = require("../src/helpers").generateSha256Hash;
const getRandomAlphaNumericString = require("../src/helpers").getRandomAlphaNumericString;

describe("Generates Corrent Hash Function", function(){
  it("app should return hash value", async function(){
    const input_string = "Hello";
    const output_string = "185f8db32271fe25f561a6fc938b2e264306ec304eda518007d1764826381969";
    const func_output = await generateSha256Hash(input_string)
    assert.equal(func_output, output_string);
  })
});


describe("getRandomAlphaNumericString Function Returns String Type", function(){
  it("getRandomAlphaNumericString should return string", async function(){
    const randChar = await getRandomAlphaNumericString();
    assert.equal(typeof(randChar), "string")
  })

  it("getRandomAlphaNumericString Function Should respect input length", async function(){
    const length = 10;
    const randChar = await getRandomAlphaNumericString(length);
    assert.equal(length, randChar.length )
  })
})
