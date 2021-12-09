require("@nomiclabs/hardhat-waffle");
require('dotenv').config();

const { DEPLOYER_SIGNER_PRIVATE_KEY, INFURA_PROJECT_ID } = process.env

// npx hardhat
// npx hardhat compile
// npx hardhat test
// npx hardhat run scripts/sample-script.js --network testnet_name
// npx hardhat flatten > flat_contract.sol


/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.8.4",
  networks: {
    rinkeby: {
      url: `https://rinkeby.infura.io/v3/${INFURA_PROJECT_ID}`,
      accounts: [DEPLOYER_SIGNER_PRIVATE_KEY]
    }
  }
};
