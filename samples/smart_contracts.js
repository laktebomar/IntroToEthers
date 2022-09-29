const ether = require("ethers")

const provider = new ether.providers.JsonRpcProvider('https://mainnet.infura.io/v3/137dfa2e784342759624ead16b3c4815');

const address = '0xd2877702675e6cEb975b4A1dFf9fb7BAF4C91ea9';

const ERC_20_ABI = [
    "function name() view returns (string)",
    "function symbol() view returns (string)",
    "function totalSupply() view returns (uint256)",
    "function balanceOf(address) view returns (uint)",
]

const contract = new ether.Contract(address, ERC_20_ABI, provider)

const smartContract = async() => {
    const name = await contract.name()

    const symbol = await contract.symbol();
    const totalSupply = await contract.totalSupply();

    console.log(`\n reading from ${address}`)
    console.log(`\n total supply of ${name} is ${totalSupply}`)
}

smartContract();


// some examples to help you get started with ether.js.
// all what you can do is clone the repo, then cd to the etherjs and install etherjs with npm
// command tp clone the project : 
// git clone ..
// cd etherjs
// npm i etherjs
// then run :
// node ./samples/accountinfo.js