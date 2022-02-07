var sequential = require("sequential-ids");
 
var generator = new sequential.Generator({
  digits: 6, letters: 3,
  restore: "AAB - 000"
});
module.exports=generator