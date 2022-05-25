const { Block } = require("./Block.js");
const { GENESIS_DATA } = require("./config.js");
const cryptoHash = require('./crypto-hash');

describe("Block", () => {
  const TimeStamp = 123456;
  const hash = "hash";
  const lastHash = "last-hash";
  const data = "data";
  const block = new Block({
    TimeStamp,
    hash,
    lastHash,
    data,
  });
  it("this test hase TimeStamp, hash, lasthash, data", () => {
    expect(block.TimeStamp).toEqual(TimeStamp);
    expect(block.hash).toEqual(hash);
    expect(block.lastHash).toEqual(lastHash);
    expect(block.data).toEqual(data);
  });
});

describe("Genesis ()", () => {
  const genesisBlock = Block.genesis();

  it("return the block instance", () => {
    expect(genesisBlock instanceof Block).toEqual(true);
  });

  it("return the genesis data", () => {
    expect(genesisBlock).toEqual(GENESIS_DATA);
  });

  describe("minedBlock()", () => {
    const lastBlock = Block.genesis();
    const data = "mined_data";
    const minedBlock = Block.minedBlock({ lastBlock, data });
    // console.log('genesis Block log from test.js'+ lastBlock.hash)
    // console.log('data log from test.js'+ data)

    it("return the minedBlock instance", () => {
      expect(minedBlock instanceof Block).toEqual(true);
    });

    it("sets The lastBlock `Hash` to the minedBlock `lastHash`", () => {
      expect(minedBlock.lastHash).toEqual(lastBlock.hash);
    });

    it("sets minedBlock `data` to `data`", () => {
      expect(minedBlock.data).toEqual(data);
    });

    it("sets the `TimeStamp`", () => {
      expect(minedBlock.TimeStamp).not.toEqual(undefined);
    });
    it("sets the `hash` to the `timestamp`, `lastHash`, `data`", () => {
      expect(minedBlock.hash).toEqual(cryptoHash(minedBlock.TimeStamp, minedBlock.lastHash, minedBlock.data));
    });
  });
});
