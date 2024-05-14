import { useState,useEffect } from "react";
import { connectWallet } from "../../utils/connectWallet";
import Web3Context from "../../context/web3Context";
import Button from "../Button/Button";
import { handleAccountChange } from "../../utils/handleAccountChange";
import { handleChainChange } from "../../utils/handleChainChange";
import './wallet.css'
import { toast } from "react-hot-toast";

const Wallet =({children})=>{
 const [state,setState]=useState({
    provider:null,
    selectedAccount:null,
    tokenSaleContract:null,
    tokenContract:null,
    chainId:null
 })
 const [isLoading,setIsLoading] = useState(false)
  useEffect(()=>{
   window.ethereum.on('accountsChanged',()=>handleAccountChange(setState))
   window.ethereum.on('chainChanged',()=>handleChainChange(setState)) 
   
   return()=>{
    window.ethereum.removeListener('accountsChanged',()=>handleAccountChange(setState))
    window.ethereum.removeListener('chainChanged',()=>handleChainChange(setState)) 
   }
},[])
 const handleWallet = async()=>{
    try{
    setIsLoading(true)
        const { provider,selectedAccount, tokenSaleContract,tokenContract,chainId} = await connectWallet();
        setState({provider,selectedAccount,tokenSaleContract,tokenContract,chainId})

    }catch(error){
       toast.error("Error connecting wallet")
       console.error(error.message)
    }
    finally{
      setIsLoading(false)
    }
 }
 return (
   <div className="Connect-Wallet">
     <Web3Context.Provider value={state}>{children}</Web3Context.Provider>
     <Button onClick={handleWallet} type="button" label="Connect Wallet" />
   </div>
 )
}
export default Wallet;