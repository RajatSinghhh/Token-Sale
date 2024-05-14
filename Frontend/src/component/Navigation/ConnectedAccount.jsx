import { useContext,useState } from "react"
import Web3Context from "../../context/web3Context"
import './Navigation.css'
const ConnectedAccount = ()=>{

    const {selectedAccount}=useContext(Web3Context);
   
    return (
        <div>
          <p className="connected-ac">{selectedAccount || " Not Connected"}</p>
       
        </div>
      );

}
export default ConnectedAccount