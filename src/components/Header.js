import React from "react";
import yeheader from "../Yeezusheader.png"

const Header = () => {
    return(
        <div>
          <header className="app-header">
              <img className="app-logo"src={yeheader} alt="logo"/>
          </header>
        </div>
    )
}
export default Header