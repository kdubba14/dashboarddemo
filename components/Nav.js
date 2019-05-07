

const navStyle = {
  height: "8vh", 
  width: "100%", 
  /* position: "fixed", 
  top: "0", 
  left: "0", 
  right: "0", */
  backgroundColor: "rgba(0,0,0,0.95)", 
  color: "rgb(255,255,235)", 
  // zIndex: "9", 
  display: "block"
}

const navStyle2 = {
  height: "6vh", 
  width: "100%", 
  position: "relative", 
  bottom: "26vh", 
  transition: ".6s",  
  /*position: "fixed", 
  top: "8vh", 
  left: "0", 
  right: "0", 
  backgroundColor: "rgba(0,0,0,0.6)", */
  color: "rgb(255,255,235)", 
  zIndex: "-1"
}

const navStyle3 = {
  height: "6vh", 
  width: "100%", 
  position: "relative", 
  bottom: "26vh",  
  transition: ".5s",  
  /*position: "fixed", 
  top: "8vh", 
  left: "0", 
  right: "0", 
  backgroundColor: "rgba(0,0,0,0.6)", */
  color: "rgb(255,255,235)", 
  zIndex: "-1"
}

const navStyle4 = {
  height: "6vh", 
  width: "100%", 
  position: "relative", 
  bottom: "26vh", 
  transition: ".4s",  
  /*position: "fixed", 
  top: "8vh", 
  left: "0", 
  right: "0", 
  backgroundColor: "rgba(0,0,0,0.6)", */
  color: "rgb(255,255,235)", 
  zIndex: "-1"
}

const active = (navName, activeState) => {
  if (navName === activeState) {
    return "active"
  }
}

class Nav extends React.Component{
  
  constructor(props){
    super(props);

    this.state={
      accountScroll: false, 
      settingsScroll: false
    }
  }
  
  accScroll = () => {
    if (this.state.accountScroll) {
      return "scroll"
    }
    else{
      return "gone"
    }
  }

  _accHoverOn = () => {
    this.setState({
      accountScroll: true
    })
  }

  _accHoverOff = () => {
    this.setState({
      accountScroll: false
    })
  }

  render(){
    return (
  
      <div id="navWhole" style={{width: "100vw", height: "8vh", position: "fixed", top: "0", right: "0", left: "0", zIndex: "10"}}>
        <div id="nav" style={navStyle}>
          <div className="container" style={{boxSizing: "border-box", width: "100%", height: "100%", padding: "0 15%"}}>
            
            <div style={{float: "left", height: "100%", display: "flex", width: "30%"}}>
              <h3 style={{margin: "auto auto auto 0", verticalAlign: "center"}}>DASHBOARD</h3>
            </div>

            <div id="navLinks" style={{float: "right", clear: "right", width: "70%", height: "100%", textAlign: "right"}}>
              
                <div name="dashboard" style={{margin: "auto 0 auto 5%", height: "100%", width: "15%", display: "inline-flex", boxSizing: "border-box"}}>
                  <a className={active("dashboard",this.props.active)} href='#' style={{height: "min-content", margin: "auto 0 auto auto"}} >
                    Dashboard
                  </a>
                </div>

                <div onMouseEnter={this._accHoverOn} onMouseLeave={this._accHoverOff} name="account" style={{margin: "auto 0 auto 5%", height: "100%", width: "15%", display: "inline-flex", boxSizing: "border-box"}}>
                  
                  <div className={active("account",this.props.active)} style={{height: "min-content", margin: "auto 0 auto auto"}}>
                    <a href='#' >
                      Account
                    </a>
                    <span>
                      
                      <img 
                        aria-label="Account Services" src="../static/arrowDown.svg" 
                        style={{width: ".75em", marginTop: "7.5%"}} />

                    </span>
                  </div>

                  

                </div>

                <div className="anotha" style={{margin: "auto 0 auto 5%", height: "100%", width: "10%", display: "inline-flex"}}>
                  <div name="media" style={{display: "flex", margin: "auto 0 auto auto"}}>
                    <a className={active("media",this.props.active)} href='#' style={{height: "min-content", margin: "auto 0 auto auto"}} >
                      Media
                    </a>
                  </div>
                </div>
                
                <div name="settings" style={{ margin: "auto 0 auto 5%", height: "100%", width: "15%", display: "inline-flex", boxSizing: "border-box"}}>
                  <a className={active("settings",this.props.active)} href='#' style={{height: "min-content", margin: "auto 0 auto auto"}} >
                    Settings
                  </a>
                </div>
              
            </div>

          </div>
        </div>
        
        





        
        
        
        <div className={this.accScroll()} onMouseEnter={this._accHoverOn} onMouseLeave={this._accHoverOff} id="dropdowns" style={{width: "12.25%", marginRight: "29.65%", marginLeft: "58.1%", height: "auto", position: "relative", bottom: "26vh", zIndex: "-1", transition: ".6s", backgroundColor: "rgba(56, 29, 73, 0.9)"}}>
        
          <div className={`nav-drop-options ${this.accScroll()}`} style={navStyle2}>
          
              <a href="#" className="nav-drop-links" style={{float: "right", clear: "right", width: "100%", height: "100%", textAlign: "right", display: "flex"}}>
                <span style={{margin: "auto"}}>
                  Your Site
                </span>
              </a>
          </div>

          <div className={`nav-drop-options ${this.accScroll()}`} style={navStyle3}>

              <div className="nav-drop-links" style={{float: "right", clear: "right", width: "100%", height: "100%", textAlign: "right", display: "flex"}}>
                <a href="#" style={{margin: "auto"}}>
                  Payments
                </a>
              </div>
          </div>

          <div className={`nav-drop-options ${this.accScroll()}`} style={navStyle4}>

              <div className="nav-drop-links" style={{float: "right", clear: "right", width: "100%", height: "100%", textAlign: "right", display: "flex"}}>
                <a href="#" style={{margin: "auto"}}>
                  Stats
                </a>
              </div>
          </div>
        
        </div>







      </div>
)}
}

export default Nav;