import {useState} from 'react';


const FullDashboard = (props) => {

  const [range, rangeChange] = useState("year")

  const rangeStyle = (selected) => {
    if (selected == range){
      return "rangeSelected"
    }else{
      return "rangeUnselected"
    }
  }

  return (
  
    <React.Fragment>
    
      {props.children}
      
      <div style={{position: "relative", width: "90%", height: "8vh", margin: "0 5% 8vh 5%", backgroundColor: "rgba(50, 0, 50, 1)", zIndex: "3", display: "flex", justifyContent: "center"}}>
              
        <div 
          onClick={() => {rangeChange("year"), props._yearRange()}} 
          className={`timeRangeSelector ${rangeStyle("year")}`}>
          
          <p>Past Year</p>
          
        </div>

        <div 
          onClick={() => {rangeChange("month"), props._monthRange()}} 
          className={`timeRangeSelector ${rangeStyle("month")}`}>
          
          <p>Past Month</p>

        </div>

        <div 
          onClick={() => {rangeChange("week"), props._weekRange()}} 
          className={`timeRangeSelector ${rangeStyle("week")}`}>
          
          <p>Past Week</p>

        </div>

      </div>

    </React.Fragment>

  )
}

export default FullDashboard