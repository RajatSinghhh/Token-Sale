import { useContext } from "react"
import Web3Context from "../../context/web3Context"
import './Navigation.css'

const ConnectedNetwork = ()=>{
   const {chainId}=useContext(Web3Context);
   if(chainId===null){
      return <p className="network">Not Connected</p>;
   }
   else if (chainId === 11155111) {
      return <p className="network">Sepolia</p>;
    } else {
      return <p className="network"> Network Not Detected</p>;
    }
}
export default ConnectedNetwork