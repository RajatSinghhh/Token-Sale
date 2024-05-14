require("@nomicfoundation/hardhat-toolbox");
require("@nomicfoundation/hardhat-ethers");
require("dotenv").config();

const SEPOLIA_PRIVATE_KEY = process.env.SEPOLIA_PRIVATE_KEY;
const SEPOLIA_INFURA_URL = process.env.SEPOLIA_INFURA_URl;

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.20",
  networks: {
    sepolia: {
      url: `${SEPOLIA_INFURA_URL}`,
      accounts: [SEPOLIA_PRIVATE_KEY],
    },
  },
};
