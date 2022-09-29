const ethers = require("ethers")

const provider = new ethers.providers.JsonRpcProvider('https://kovan.infura.io/v3/137dfa2e784342759624ead16b3c4815');

const accountAddress1 = '0x5472871bc5944d6D0e76e2b27e13819Ae7d00371'
const accountAddress2 = '0x0A3Bc84Cd4cf3399de151fa02D491d2fd2a2Dd47'

const prvKey = '0f178f92c85b12e961dc079e850aa744ae32a15634d47237d35a307a5c1cd88a'

const wallet =new ethers.Wallet(prvKey, provider)

const ERC_20_ABI = [
    "function symbol() view returns (string)",
    "function balanceOf(address) view returns (uint)",
]


const address = '0xe6a51CF10D43365C179ab54b78e0d875B1364Dc0'
const contract = new ethers.Contract(address, ERC_20_ABI, provider)

const writeContract = async() => {
    const balance = await contract.balanceOf(address)

    console.log(`\n Reading from ${address}`)
    console.log(`\n with the balance of ${balance}`)

    const contractWlt = new contract.connect(wallet)

    const tx = await contractWlt.transfer(accountAddress2, balance)
    await tx.wait()

    console.log(tx)

    const senderBalanceA = await contract.balanceOf(accountAddress2);
    const recieverBalanceA = await contract.balanceOf(accountAddress1);

    console.log(`\nSender balance after transaction: ${ethers.utils.formatEther(senderBalanceA)}`)
    console.log(`reciever balance after transaction: ${ethers.utils.formatEther(recieverBalanceA)}\n`)

}

writeContract()