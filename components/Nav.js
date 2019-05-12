

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
      mobileScroll: false, 
      showMobileLinks: false, 
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



  showLinks = () => {
    // let keepDown = () => {
    //   return " keep mobile links down"
    // }
    if (this.state.mobileScroll){
      if (this.state.showMobileLinks) {
        
        return " mobile-scroll"
      }else{
        return " show-mobile-links-up"
      }
    }else{
      if (this.state.showMobileLinks) {
        //setTimeout(() => keepDown(),900)
        return " show-mobile-links-down"
      }else{
        return " show-mobile-links-up"
      }
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

  _accClickMobile = () => {
    this.setState({
      mobileScroll: !this.state.mobileScroll
    })
  }

  _showMobileLinks = () => {
    this.setState({
      showMobileLinks: !this.state.showMobileLinks
    })
  }

  render(){
    return (
  
      <div id="navWhole">
        <div id="mainNav">
          <div className="nav-container">
            
            <div className="nav-logo">
              <h3 style={{margin: "auto auto auto 0", verticalAlign: "center"}}>DASHBOARD</h3>
            </div>

            <div className="navMobileRight">
              <div onClick={this._showMobileLinks} className="nav-button">
                <img src="../static/menu-button.svg"/>
              </div>
            </div>

            <div id="navLinks" className={this.showLinks()}>
              
                <div name="dashboard" className="nav-link">
                  <a className={active("dashboard",this.props.active)} href='#'>
                    Dashboard
                  </a>
                </div>

                <div onMouseEnter={this._accHoverOn} onMouseLeave={this._accHoverOff} 
                 onClick={this._accClickMobile} name="account" className="nav-link">
                  
                  <div className={active("account",this.props.active)}>
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

                <div name="media" className="nav-link">
                  <a className={active("media",this.props.active)} href='#'>
                    Media
                  </a>
                </div>
                
                <div name="settings" className="nav-link">
                  <a className={active("settings",this.props.active)} href='#'>
                    Settings
                  </a>
                </div>
              
            </div>

          </div>
        </div>
        
        





        
        
        
        <div className={this.showLinks()} onMouseEnter={this._accHoverOn} onMouseLeave={this._accHoverOff} id="dropdowns">
        
          <div className={`nav-drop-options nav-drop-1 ${this.accScroll()}`}>
          
              <a href="#" className="nav-drop-links">
                <span style={{margin: "auto"}}>
                  Your Site
                </span>
              </a>
          </div>

          <div className={`nav-drop-options nav-drop-2 ${this.accScroll()}`}>

                <a href="#" className="nav-drop-links">
                  <span style={{margin: "auto"}}>Payments</span>
                </a>

          </div>

          <div className={`nav-drop-options nav-drop-3 ${this.accScroll()}`}>

                <a href="#" className="nav-drop-links">
                  <span style={{margin: "auto"}}>Stats</span>
                </a>

          </div>
        
        </div>

      </div>
)}
}

export default Nav;