const Block = require("./Block");
const Blockchain = require('./blockChain')

describe("BlockChain()", () => {
  const blockchain = new Blockchain();

  it("contains a `chain` Array insance", () => {
    expect(blockchain.chain instanceof Array).toBe(true);
  });
  it("start with the genesis block", () => {
    expect(blockchain.chain[0]).toEqual(Block.genesis());
  });
  it("add the new to the chain", () => {
    const newData = "foo bar";
    blockChain.addBlock({ data: newData });
    expect(blockChain.chain[blockchain.chain.length - 1]).toEqual(newData);
  });
});
