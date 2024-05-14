import {useState,useEffect,useContext} from "react"
import Web3Context from "../../context/web3Context"
import {ethers} from "ethers"

const BalanceAmount = () => {
    const {tokenContract,selectedAccount} = useContext(Web3Context)
    const [balanceAmount,setBalanceAmount] = useState("0");

    useEffect (() => {
        const fetchBalance = async() => {
            try{
                const balanceWei = await tokenContract.balanceOf(selectedAccount)
                const balanceEth = ethers.formatUnits(balanceWei.toString(),18);
                setBalanceAmount(balanceEth)
            }
            catch(error){
                 console.log(error)
            }
        }
        tokenContract && fetchBalance()
        const interval = setInterval(()=>{
            tokenContract &&  fetchBalance();
          },5000)
          return ()=> clearInterval(interval)

    },[tokenContract,selectedAccount,])

    return(<div  className="staked-amount">
        <p> Your Balance:</p><span>{balanceAmount}</span>
    </div>)

}
export default BalanceAmount 