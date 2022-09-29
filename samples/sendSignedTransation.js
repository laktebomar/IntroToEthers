const ethers = require("ethers");

const provider = new ethers.providers.JsonRpcProvider('https://kovan.infura.io/v3/137dfa2e784342759624ead16b3c4815');

const accountAddress1 = '0x5472871bc5944d6D0e76e2b27e13819Ae7d00371'
const accountAddress2 = '0x0A3Bc84Cd4cf3399de151fa02D491d2fd2a2Dd47'

const prvKey = '0f178f92c85b12e961dc079e850aa744ae32a15634d47237d35a307a5c1cd88a'

const wallet =new ethers.Wallet(prvKey, provider)

const sendTransaction = async() =>{
    const senderBalanceB = await provider.getBalance(accountAddress2);
    const recieverBalanceB = await provider.getBalance(accountAddress1);

    console.log(`\nSender balance before transaction: ${ethers.utils.formatEther(senderBalanceB)}`)
    console.log(`reciever balance before transaction: ${ethers.utils.formatEther(recieverBalanceB)}\n`)

    const tx = await wallet.sendTransaction({
        to: accountAddress1,
        value: ethers.utils.parseEther('0.04')
    })

    await tx.wait();
    console.log(tx)

    const senderBalanceA = await provider.getBalance(accountAddress2);
    const recieverBalanceA = await provider.getBalance(accountAddress1);

    console.log(`\nSender balance after transaction: ${ethers.utils.formatEther(senderBalanceA)}`)
    console.log(`reciever balance after transaction: ${ethers.utils.formatEther(recieverBalanceA)}\n`)
}

sendTransaction()