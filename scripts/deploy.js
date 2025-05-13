const hre = require("hardhat");

async function main() {
  const Voting = await hre.ethers.getContractFactory("Voting");

  // 初始化候選人數量為 3
  const voting = await Voting.deploy(3);

  // 等待部署完成（新版 ethers v6 寫法）
  await voting.waitForDeployment();

  console.log("Voting contract deployed to:", voting.target);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
