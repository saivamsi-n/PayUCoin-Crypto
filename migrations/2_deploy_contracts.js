const Abhi = artifacts.require("../AbhiToken.sol");

module.exports = function(deployer) {
  deployer.deploy(Abhi,1000000);
};
