import { Line } from 'react-chartjs-2';

const TimeChart = (props) => (
  <div className="practiceChart" style={{position: "relative", width: "100%", height: "100%", zIndex: "3"}}>
    <Line style={{position: "relative", zIndex: "1"}} options={{
      // tooltips: {
        // ADD TOOLTIPS CALLBACK TO SHOW PURCHASE AMOUNT
      // }, 
      layout: {
        padding: {
          left: 10, 
          right: 20
        }
      },
      scales: {
        xAxes: [{
          gridLines: {
            color: 'rgba(40,40,40,1)'
          },
          ticks: {
            fontColor: 'white', 
            source: 'labels'
          },  
          type: 'time',
          time: {
            parser: 'YYYY MM DD',   
            unit: 'month',
              displayFormats: {
                month: 'MMM DD'
              }
          }
        }], 
        yAxes: [{ 
          gridLines: {
            color: 'rgba(40,40,40,1)'
          },
          ticks: {
            fontColor: 'white',
            beginAtZero: true, 
            suggestedMax: 1000
          }
        }]
      }, 
      legend: {
        labels: {
          fontColor: 'white'
        }
      }, 
      elements: {
        point: {
          radius: 3, 
          backgroundColor: "#a79545",
          borderColor: "#a79545"
        }, 
        line: {
          fill: false, 
          backgroundColor: "#a79545",
          borderColor: "#a79545", 
          tension: 0.1
        }
      }, 
      animation:{
        duration: 1500
      },
      maintainAspectRatio: false
    }} data={props.timeData} />
  
  </div> 
)

export default TimeChart