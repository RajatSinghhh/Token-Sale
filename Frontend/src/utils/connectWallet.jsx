import {ethers,Contract} from "ethers"
import token_sale_abi from "../ABI/token_sale_abi.json"
import token_abi from "../ABI/token_abi.json"

export const connectWallet = async () => {
    try{
        let [signer,provider,tokenSaleContract,tokenContract,chainId] = [null,null,null,null]
        if(!window.ethereum){
            console.log("Please install metamask")
        }
        const accounts = await window.ethereum.request({method:"eth_requestAccounts"})
        const chainIdHex = await window.ethereum.request({method:"eth_chainId"})
        chainId = parseInt(chainIdHex,16)

      let selectedAccount = accounts[0]
        if(!selectedAccount){
            console.log("Account not detected")
            
        } 
        provider = new ethers.BrowserProvider(window.ethereum)
        signer = await provider.getSigner()

        const tokenSaleContractAddress = "0xb9a5053D18dd00598312806086E6AFD97924bA9C"
        const tokenContractAddress = "0x12fB85f5cA0a33e4ddD3081f327C3336D8Ed7DcE"
        tokenSaleContract = new Contract(tokenSaleContractAddress,token_sale_abi,signer )
        tokenContract = new Contract(tokenContractAddress,token_abi,signer)
        
        return{provider,selectedAccount,tokenSaleContract,tokenContract,chainId}
    } 
    catch(error){
        console.log(error)
    }
}

