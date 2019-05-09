import { HorizontalBar } from 'react-chartjs-2';

const BeatBarChart = (props) => (

  <div className="barChart">
          
    <HorizontalBar options={{
      responsive: true, 
      maintainAspectRatio: false, 
      legend: {
        labels: {
          fontColor: 'white', 
          boxWidth: 0
        }
      }, 
      elements: {
        rectangle: {
          backgroundColor: 'rgba(255,0,255,0.2)',
          borderColor: 'rgba(200,0,200,1)',
          borderWidth: 1,
          hoverBackgroundColor: 'rgba(255,0,255,0.4)',
          hoverBorderColor: 'rgba(200,0,200,1)'
        }
      },
      scales: {
        xAxes: [{
          gridLines: {
            color: 'rgba(40,40,40,1)'
          },
          ticks: {
            beginAtZero: true, 
            suggestedMax: 7, 
            fontColor: 'white', 
          }
        }], 
        yAxes: [{
          gridLines: {
            color: 'rgba(40,40,40,1)'
          },
          ticks: {
            fontColor: 'white'
          }
        }]
      }
    }} data={props.barData} />
  
  </div>

)

export default BeatBarChart