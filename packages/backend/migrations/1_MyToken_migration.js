const MyToken = artifacts.require("MyToken");

module.exports = async function (deployer) {
  // deploy
  deployer.deploy(MyToken, "MyToken", "MTN");
};
