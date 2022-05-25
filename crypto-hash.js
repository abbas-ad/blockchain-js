const crypto = require("crypto");
//crypto its defualt node method 
const cryptoHash = (...input) => {
  const hash = crypto.createHash("sha256"); // we want sha256 algoretm from the crypto
  hash.update(input.sort().join(" "));
  return hash.digest("hex");// we want the hex outpoud 
};

module.exports = cryptoHash;
