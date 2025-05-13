const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Voting", function () {
  let voting, voter1, voter2;

  beforeEach(async function () {
    const Voting = await ethers.getContractFactory("Voting");
    voting = await Voting.deploy(3); // 3 candidates: 0, 1, 2
    await voting.waitForDeployment();

    [voter1, voter2] = await ethers.getSigners();
  });

  it("should allow one vote per address", async function () {
    await voting.connect(voter1).vote(0);
    expect(await voting.getVotes(0)).to.equal(1);
    await voting.connect(voter2).vote(1);
    expect(await voting.getVotes(1)).to.equal(1);
    await expect(voting.connect(voter1).vote(2)).to.be.revertedWith("Already voted");
  });

  it("should reject votes to invalid candidates", async function () {
    await expect(voting.connect(voter1).vote(5)).to.be.revertedWith("Invalid candidate");
  });

  it("should count multiple valid votes correctly", async function () {
    await voting.connect(voter1).vote(0);
    await voting.connect(voter2).vote(0);
    expect(await voting.getVotes(0)).to.equal(2);
  });

  it("should keep each voter’s vote isolated", async function () {
    await voting.connect(voter1).vote(1);
    await expect(voting.connect(voter1).vote(2)).to.be.revertedWith("Already voted");
    await voting.connect(voter2).vote(2);
    expect(await voting.getVotes(1)).to.equal(1);
    expect(await voting.getVotes(2)).to.equal(1);
  });
});
