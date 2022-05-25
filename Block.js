const {GENESIS_DATA} = require ("./config.js")
const cryptoHash = require('./crypto-hash');

class Block {
  constructor({ TimeStamp, hash, lastHash, data }) {
    this.TimeStamp = TimeStamp,
      this.hash = hash,
      this.lastHash = lastHash,
      this.data = data;
  }

  static genesis(){
    return new this(GENESIS_DATA);
  }
  static minedBlock({lastBlock, data}){
    const TimeStamp = Date.now();
    const lastHash = lastBlock.hash;
    
    return new this({
      TimeStamp ,
      lastHash ,
      data:data,
      hash:cryptoHash(TimeStamp, lastHash, data)
    })
    
  }
}

module.exports = { Block };

