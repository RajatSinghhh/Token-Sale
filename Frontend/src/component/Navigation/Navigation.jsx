import ConnectedAccount from "./ConnectedAccount";
import ConnectedNetwork from "./ConnectedNetwork";
import EnterStaking from "./EnterStaking";
import './Navigation.css'

const Navigation = ()=>{
  return (
    <header className="navbar">
      <div className="navbar-info">
     
        <div className="navbar-btns">
          <ConnectedAccount />
        </div>

        <div className="navbar-btns">
          <ConnectedNetwork />
        </div>
        <div className="navbar-btns">
          <EnterStaking></EnterStaking>
        </div>
        
        </div>
      
   
    </header>
  );
}
export default Navigation;
