import TokenSoldInfo from "./TokenSold"
import BalanceAmount from "./TokenBalance"
import './DisplayPannel.css'


const DisplayPannel = () =>{
    return(<div className="top-wrapper" >
        <TokenSoldInfo></TokenSoldInfo>
        <BalanceAmount></BalanceAmount>
    </div>)
}
export default DisplayPannel