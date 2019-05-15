const generateNewHash =  require("./helpers").generateNewHash

const old_hash = "2A66ABC28AE4AB719EC9B84F2F7FC1C1CA5F8AA6906E8D30C3C8A0454CABD6D7"

//Example Usage:
generateNewHash("Parkhub",old_hash).then(
  new_hash => {console.log(new_hash)},
  error => {
    console.log("Error Producing New Hash! ");
    console.log(error)
  }
)

