import { Doughnut } from 'react-chartjs-2';

const LicenseDoughnut = (props) => (

  <div className="practiceChart" style={{position: "absolute", width: "100%", height: "47.5%", backgroundColor: "rgba(30, 30, 30, 1)"}}>
          
    <Doughnut options={{
      animation: {
        animateScale: true
      }, 
      legend: {
        labels: {
          fontColor: 'white', 
          boxWidth: 10
        }, 
        position: 'bottom'
      }, 
      layout: {
        padding:{
          top: 30
        }
      }, 
      elements: {
        arc: {
          backgroundColor: [
            "rgba(255,255,255,0.5)", 
            "rgba(255,0,255,0.3)", 
            "rgba(224,199,77,0.5)"
          ]
        }
      },
      responsive: true, 
      maintainAspectRatio: false
    }} data={props.doughnutData} />
  
  </div>

)

export default LicenseDoughnut