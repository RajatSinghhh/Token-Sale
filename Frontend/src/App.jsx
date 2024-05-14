

import  Wallet  from './component/wallet/wallet'
import BuyToken from './component/buyToken/buyToken'
import Navigation from './component/Navigation/Navigation'
import DisplayPannel from './component/Token Information/Display'
import  './App.css'



function App() {
  return (<div className='main-section'>
<Wallet>
<DisplayPannel></DisplayPannel>
<Navigation></Navigation>
<div className='stake-wrapper'>
<BuyToken></BuyToken>
</div>
</Wallet>
  </div>
  
  )
}

export default App
