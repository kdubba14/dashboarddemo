# Dashboard Demo

Project link: https://dashboarddemo.kdubba14.now.sh

## Random Data created using https://www.json-generator.com/
### I used the following equation to generate data: 
[
  '{{repeat(100)}}',
  {
    orderId: '{{objectId()}}',
    orderDate: '{{date(new Date(2017, 1, 1), new Date(), "YYYY-MM-ddThh:mm:ss")}}',
    license: '{{random("unlimited wav", "unlimited trackout", "exclusive")}}',
    artType: '{{"audio"}}',
    artTitle: '{{random("song1", "song2", "song3", "song4", "song5", "song6", "song7")}}',
    price: '{{random("5000", "10000", "20000")}}'
  }
]

## Technologies Used: 
- Chart.js (react-chartjs-2)
- React Hooks
- Regex
- Next.js
- React.js
- CSS

Created by Kyle Williams

