require("dotenv").config();
const { ethers, network } = require("hardhat");
const hre = require("hardhat");

async function main() {
  const KeeperMinter = await hre.ethers.getContractFactory("KeeperMinter");
  const keeperMinter = await KeeperMinter.deploy(20);
  await keeperMinter.deployed();
  console.log("KeeperMinter deployed to:", keeperMinter.address);
  console.log(`current network :${network.config.chainId}`);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
