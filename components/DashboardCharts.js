import LicenseDoughnut from './LicenseDoughnut'
import BeatBarChart from './BeatBarChart'
import TimeChart from './TimeChart'

const DashboardCharts = (props) => (

  <div className="dashboardCharts" style={{position: "relative", width: "90%", height: "70vh", margin: "10vh 5% 0 5%", padding: "2.5% 2.5% 4% 2.5%", backgroundColor: "rgba(30, 30, 30, 1)", zIndex: "3", display: "grid", gridTemplateColumns: "30% 60% 10%", gridGap: ".5rem", boxSizing: "border-box"}}>
          
    <div style={{position: "relative", height: "100%", width: "100%", display: "grid", gridTemplateRows: "1fr 1fr", gridGap: "1rem", backgroundColor: "rgba(30, 30, 30, 1)", padding: "0 2%", boxSizing: "border-box"}}>

      <LicenseDoughnut doughnutData={props.doughnutData} />

      <BeatBarChart barData={props.barData} />

    
    </div>

    <TimeChart timeData={props.timeData} />

    <div style={{height: "100%", width: "100%", display: "grid", gridTemplateRows: "1fr 1fr", gridGap: ".4rem"}}>

      <div style={{ height: "100%", width: "100%", display: "flex", flexDirection: "column"}}>
        <h2 style={{margin: "auto 0 10% 0", fontSize: "1.5vw"}}>Sales</h2>
        <h3 style={{margin: "10% 0 auto 0"}}>{props.totalSales}</h3>
      </div>

      <div style={{ height: "100%", width: "100%", display: "flex", flexDirection: "column"}}>
        <h2 style={{margin: "auto 0 10% 0", fontSize: "1.5vw"}}>Vs. Goal</h2>
        <h3 style={{margin: "10% 0 auto 0"}}>17%</h3>
      </div>
    
    </div>
  
  </div>

)

export default DashboardCharts