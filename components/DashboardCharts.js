import LicenseDoughnut from './LicenseDoughnut'
import BeatBarChart from './BeatBarChart'
import TimeChart from './TimeChart'
import { Pie } from 'react-chartjs-2';



const DashboardCharts = (props) => {
  
  const goalProp = {
    labels: ["Until Goal", "Done"],
    datasets: [{
      data: [100-props.goalPercent, props.goalPercent]
    }]
  }
  
  return (

    <div className="dashboard-charts">
            
      <div className="otherCharts">

        <LicenseDoughnut doughnutData={props.doughnutData} />

        <BeatBarChart barData={props.barData} />

      
      </div>

      <TimeChart timeData={props.timeData} />

      <div className="otherStats">

        <div className="sales-stat stats">
          <h2>Sales</h2>
          <h3>{props.totalSales}</h3>
        </div>

        <div className="goal-stat stats">
          <h2>vs. Goal</h2>
          <h3>{props.goalPercent}%</h3>
        </div>

        <div className="goal-chart">
          <Pie options={{
            animation: {
              animateScale: true
            }, 
            layout: {
              padding: {
                top: 10
              }
            },
            legend: {
              display: false
            },
            elements: {
              arc: {
                backgroundColor: [
                  "rgba(255,255,255,0.45)", 
                  "rgba(224,199,77,0.5)"
                ]
              }
            },
            responsive: true, 
            maintainAspectRatio: false
          }} data={goalProp} />
        </div>
      
      </div>
    
    </div>

  )
}

export default DashboardCharts