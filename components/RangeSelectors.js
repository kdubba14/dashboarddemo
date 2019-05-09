

const RangeSelectors = (props) => (

  <div className="range-selector-group">
              
    <div 
      onClick={() => {props.rangeChange("year"), props._yearRange()}} 
      className={`timeRangeSelector ${props.rangeStyle("year")}`}>
      
      <p>Past Year</p>
      
    </div>

    <div 
      onClick={() => {props.rangeChange("month"), props._monthRange()}} 
      className={`timeRangeSelector ${props.rangeStyle("month")}`}>
      
      <p>Past Month</p>

    </div>

    <div 
      onClick={() => {props.rangeChange("week"), props._weekRange()}} 
      className={`timeRangeSelector ${props.rangeStyle("week")}`}>
      
      <p>Past Week</p>

    </div>

  </div>

)

export default RangeSelectors