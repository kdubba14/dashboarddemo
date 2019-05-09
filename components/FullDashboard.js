import {useState} from 'react';
import RangeSelectors from './RangeSelectors';
import DashboardCharts from './DashboardCharts';


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
  
    <div className="full-dashboard" >
    
      <DashboardCharts goalPercent={props.goalPercent} totalSales={props.totalSales} timeData={props.timeData} barData={props.barData} doughnutData={props.doughnutData} />
      
      <RangeSelectors rangeChange={rangeChange} rangeStyle={rangeStyle} _yearRange={props._yearRange} _monthRange={props._monthRange} _weekRange={props._weekRange} />

    </div>

  )
}

export default FullDashboard