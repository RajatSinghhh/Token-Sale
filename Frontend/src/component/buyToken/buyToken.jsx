import { useState,useContext,useRef } from "react";
import {ethers} from "ethers"
import Web3Context from "../../context/web3Context";
import Button from "../Button/Button";
import './buyToken.css'
import {toast} from "react-hot-toast"

const BuyToken=()=>{
 const {tokenSaleContract}=useContext(Web3Context);
 const buyAmountRef = useRef();
 const [errorMessage,setErrorMessage] = useState('')

 const buyToken=async(e)=>{
   e.preventDefault();
   const amount = buyAmountRef.current.value.trim();
   console.log(amount)
   if(isNaN(amount) || amount<=0){
    toast.error("Please enter a valid positive number")
    return;
   }
   
   
   try{
    const transaction = await tokenSaleContract.buyTokens(amount)
    await toast.promise(transaction.wait(),
    { loading : "Transaction is pending....",
      success: "Transaction successful",
      error: "Transaction failed"

    });
    
   buyAmountRef.current.value = "";

   
    } catch (error) {
    toast.error("Staking Failed")
      console.error(error)
    }
  };
    return (
      <form onSubmit={buyToken} className="stake-amount-form" >
        <label className="stake-input-label">Enter  Amount:</label>
        <input type="text" ref={buyAmountRef} placeholder="Max 100 Token" />
        <Button onClick={buyToken} type="submit" label="Buy Token" />
      </form>
       
       )
}
export default BuyToken;