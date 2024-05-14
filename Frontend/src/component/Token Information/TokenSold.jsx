import { useState,useContext,useEffect } from "react";
import {ethers} from "ethers"
import web3Context from "../../context/web3Context"

const TokenSoldInfo =()=>{
  const {tokenSaleContract}=useContext(web3Context);
  const [tokenVal,setTokenVal]=useState("0");

  useEffect(()=>{
    const fetchTotalTokensSold =async()=>{
        try{
          //fetching earned amount of a user
           const tokenValueWei = await tokenSaleContract.tokensSold();
           const tokenValueEth = ethers.formatUnits(tokenValueWei,18).toString();
        
           setTokenVal(tokenValueEth)
        }catch(error){
          
          console.error(error.message)
        }
      }
        const interval = setInterval(()=>{
          tokenSaleContract &&  fetchTotalTokensSold();
        },10000)
        return ()=> clearInterval(interval)
  },[tokenSaleContract])

  return(
    <div className="earned-reward">
      <p>Total Tokens Sold:</p>
      <span>{tokenVal}</span>
  </div>
  )
}
export default TokenSoldInfo ;