require("@nomicfoundation/hardhat-toolbox");

const SEPOLIA_RPC = "https://sepolia.infura.io/v3/cde135e3d9fe4e169436ed3a08b2dd07"; // 或 INFURA 的網址
const PRIVATE_KEY = "1768078c0a3a8336ad03f8624f4b40e1f6c8e64d72bd7cc4fa0b1ed302f38f53";

module.exports = {
  solidity: "0.8.20",
  networks: {
    sepolia: {
      url: SEPOLIA_RPC,
      accounts: [PRIVATE_KEY]
    }
  }
};
