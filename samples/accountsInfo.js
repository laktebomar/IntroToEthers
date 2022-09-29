const ethers = require("ethers")

const provider = new ethers.providers.JsonRpcProvider('https://mainnet.infura.io/v3/137dfa2e784342759624ead16b3c4815');
const address = "0x4b8cE523489A3d17f48fa3AFd45c3dDE728a1cFE"
const accountInfo = async()=>{
    const balance = await provider.getBalance(address);
    console.log(`\nETH Balance of ${address} --> ${ethers.utils.formatEther(balance)} ETH\n`)
} 

accountInfo()