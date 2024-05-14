const { hre, ethers } = require("hardhat");

async function main() {
  const [deployer] = await ethers.getSigners();
  console.log(`deploying contract with an account ${deployer.address}`);
  const token_sale_contract = await ethers.getContractFactory("MyTokenSale");
  const tokenSale = await token_sale_contract.deploy(
    "0x12fB85f5cA0a33e4ddD3081f327C3336D8Ed7DcE"
  );

  console.log(
    "deployed contract with an address",
    await tokenSale.getAddress()
  );
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
