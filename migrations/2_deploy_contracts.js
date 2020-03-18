const Smiss = artifacts.require("../SmeduToken.sol");

module.exports = function(deployer) {
  deployer.deploy(Smiss,1000000);
};
