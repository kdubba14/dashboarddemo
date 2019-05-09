import React from 'react';
import Head from 'next/head';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import FullDashboard from '../components/FullDashboard';

import DemoData from '../components/demoData';


/**
 *  
 * 
 *        Fix same day sales to accumulate
 *        Example on: July 01 2018 on Past Year
 * 
 *        Fix 'vs. Goal' - if not set it should say so
 *        Plus should have button to set their Y/M/W goal
 *        Should create alert/warning on login to set goal
 * 
 *        Fix the callback on point tooltips (on line graph)
 *        to show purchase price & date rather than default
 * 
 * 
 */

class Index extends React.Component {
  state={
    active: "dashboard", 
    goalPercent: 0, 
    timeRange: "year", 
    totalSales: "$0", 
    today: {
      dd: null, 
      mm: null, 
      yyyy: null, 
      date: null
    }, 
    timeData: {
      labels: [], 
      datasets: [
        {
          label: "Song Sales - Past Year", 
          data: []
        }
      ] 
    }, 
    doughnutData: {
      labels: ["Unlimited Wav", "Unlimited Trackout", "Exclusive"], 
      datasets: [
        {
          data: [0,0,0]
        }
      ]
    }, 
    barData: {
      labels: ['Empty Slot', 'Empty Slot', 'Empty Slot', 'Empty Slot', 'Empty Slot'],
      datasets: [
        {
          label: 'Top Performing Songs',
          data: [0,0,0,0,0]
        }
      ]
    }
  }



  componentWillMount(){
    
    
    // temporary
    this.state.goalPercent = 17
  // xxxxxxxxxxxx
    
    
    let today = new Date();
    let dd = today.getDate();
    let mm = today.getMonth() + 1; //January is 0!
    let yyyy = today.getFullYear();

    if (dd < 10) {
      dd = '0' + dd;
    } 
    if (mm < 10) {
      mm = '0' + mm;
    } 
    this.state.today.dd = dd;
    this.state.today.mm = mm;
    this.state.today.yyyy = yyyy;
    this.state.today.date = yyyy + '-' + mm + '-' + dd;

    
    let sortedData = DemoData.sort(function (a, b) {
      return a.orderDate.localeCompare(b.orderDate);
    });

    
    let addSale = 0
    let pastYearSongs = []
    let year = yyyy

    
    for (let i=0; i<13; i++){
      let month = (Number(mm)+i)%12
      
      if ( month == 0 ){
        this.state.timeData.labels.push(`${Number(year)-1}-12-${dd}`)
        year = String(Number(year)+1)
      }
      if ( month == 11 ){
        this.state.timeData.labels.push(`${Number(year)-1}-11-${dd}`)
      }
      if ( month == 10 ){
        this.state.timeData.labels.push(`${Number(year)-1}-10-${dd}`)
      }
      else if (month < 10 && month !== 0) {
          this.state.timeData.labels.push(`${Number(year)-1}-0${month}-${dd}`)
      }
    }
    
    
    sortedData.map((purchase, i) => {
      
      let date = purchase.orderDate.slice(0,10)
      let MMDD = date.slice(4,date.length)
      let YYYY = date.slice(0,4)
      YYYY = String(Number(YYYY)+1)

      let pastYear = YYYY + MMDD

      let dataset = (year) => this.state.timeData.datasets[year].data

      if (i == 0){
        dataset(0).push({
          x: `${Number(yyyy)-1}-${mm}-${dd}`, 
          y: (0)
        })
      }
      
      if (this.state.today.date.localeCompare(pastYear) < 1){
        pastYearSongs = [...pastYearSongs, purchase]
        
        dataset(0).push({
          x: date, 
          y: (purchase.price/100 + addSale)
        })

        addSale += purchase.price/100

        if (purchase.license === "unlimited wav"){
          this.state.doughnutData.datasets[0].data[0] += 1
        }
        if (purchase.license === "unlimited trackout"){
          this.state.doughnutData.datasets[0].data[1] += 1
        }
        if (purchase.license === "exclusive"){
          this.state.doughnutData.datasets[0].data[2] += 1
        }
      }
      
    })


    addSale = String(addSale).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    // ^^^ Adds thousands comma seperator ^^^
    this.state.totalSales = `$${addSale}`

    
    let tally = pastYearSongs.reduce((a, c) => {
      a[c.artTitle] = (a[c.artTitle] || 0) + 1;
      return a;
    }, {});

    
    let songs = pastYearSongs.reduce((list, item) => {
      if (list.indexOf(item.artTitle) == -1){
        list.push(item.artTitle)
      }
      return list;
    }, []);

    
    let top5Amounts = Array(5).fill(0)
    let top5Names = Array(5).fill('Empty Slot')

    for (let k=0; k<songs.length; k++){
      let lowest = Math.min(...top5Amounts)
      if (tally[songs[k]] > lowest){
        let spot = top5Amounts.indexOf(lowest)
        top5Amounts.splice(spot, 1, tally[songs[k]])
        top5Names.splice(spot, 1, songs[k])
      }
    }

    this.state.barData.datasets[0].data = top5Amounts
    this.state.barData.labels = top5Names

  }
  
  

  _yearRange = () => {


    // temporary
    this.setState({
      goalPercent: 17
    })
  // xxxxxxxxxxxx


    let {dd, mm, yyyy} = this.state.today
    let stateDate = this.state.today.date

    
    let sortedData = DemoData.sort(function (a, b) {
      return a.orderDate.localeCompare(b.orderDate);
    });

    
    let addSale = 0
    let year = yyyy

    let wav = 0
    let trackout = 0
    let exclusive = 0

    let pastYearSongs = []
    let fauxLabels = []
    let fauxData = []

    fauxLabels.push(`${Number(year)-1}-${mm}-${dd}`)


    for (let i=0; i<13; i++){
      let month = (Number(mm)+i)%12
      
      if ( month == 0 ){
        fauxLabels.push(`${Number(year)-1}-12-${dd}`)
        year = String(Number(year)+1)
      }
      if ( month == 11 ){
        fauxLabels.push(`${Number(year)-1}-11-${dd}`)
      }
      if ( month == 10 ){
        fauxLabels.push(`${Number(year)-1}-10-${dd}`)
      }
      else if (month < 10 && month !== 0) {
          fauxLabels.push(`${Number(year)-1}-0${month}-${dd}`)
      }
    }
    
    
    sortedData.map((purchase, i) => {
      
      let date = purchase.orderDate.slice(0,10)
      let MMDD = date.slice(4,date.length)
      let YYYY = date.slice(0,4)
      YYYY = String(Number(YYYY)+1)

      let pastYear = YYYY + MMDD
      

      if (i == 0){
        fauxData.push({
          x: `${Number(yyyy)-1}-${mm}-${dd}`, 
          y: 0
        })
      }

      
      if (this.state.today.date.localeCompare(pastYear) < 1){
        
        pastYearSongs = [...pastYearSongs, purchase]
        
        fauxData.push({
          x: date, 
          y: (purchase.price/100 + addSale)
        })

        addSale += purchase.price/100

        if (purchase.license === "unlimited wav"){
          wav += 1
        }
        if (purchase.license === "unlimited trackout"){
          trackout += 1
        }
        if (purchase.license === "exclusive"){
          exclusive += 1
        }
      }
      
    })


    addSale = String(addSale).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    // ^^^ Adds thousands comma seperator ^^^
    addSale = `$${addSale}`

    
    let tally = pastYearSongs.reduce((a, c) => {
      a[c.artTitle] = (a[c.artTitle] || 0) + 1;
      return a;
    }, {});

    
    let songs = pastYearSongs.reduce((list, item) => {
      if (list.indexOf(item.artTitle) == -1){
        list.push(item.artTitle)
      }
      return list;
    }, []);

    
    let top5Amounts = Array(5).fill(0)
    let top5Names = Array(5).fill('Empty Slot')

    for (let k=0; k<songs.length; k++){
      let lowest = Math.min(...top5Amounts)
      if (tally[songs[k]] > lowest){
        let spot = top5Amounts.indexOf(lowest)
        top5Amounts.splice(spot, 1, tally[songs[k]])
        top5Names.splice(spot, 1, songs[k])
      }
    }


    this.setState({
      totalSales: addSale
    })

    this.setState({
      barData: {
        ...this.state.barData, 
        labels: top5Names, 
        datasets: [{
          ...this.state.barData.datasets, 
          label: "Top Performing Songs", 
          data: top5Amounts
        }]
      }
    })

    this.setState({
      timeData: {
        labels: fauxLabels, 
        datasets: [{
          label: "Song Sales - Past Year", 
          data: fauxData
        }]
      }
    })

    if (wav==0&&trackout==0&&exclusive==0){

      this.setState({
        doughnutData: {
          ...this.state.doughnutData, 
          labels: ["No Licenses Sold"], 
          datasets: [{
            data: [1]
          }]
        }
      })

    }else{

      this.setState({
        doughnutData: {
          ...this.state.doughnutData, 
          labels: ["Unlimited Wav", "Unlimited Trackout", "Exclusive"], 
          datasets: [{
            data: [wav, trackout, exclusive]
          }]
        }
      })

    }

  }

  

  _monthRange = () => {


    // temporary
    this.setState({
      goalPercent: 32
    })
    // xxxxxxxxxxxx


    let {dd, mm, yyyy, date} = this.state.today

    
    let sortedData = DemoData.sort(function (a, b) {
      return a.orderDate.localeCompare(b.orderDate);
    });

    
    let addSale = 0
    let year = yyyy
    let month = mm
    let fauxLabels = []

    let lastMonth = new Date().getMonth()

    if (lastMonth < 10){
      if (lastMonth == 0){
        lastMonth === '12'
      }else{
        lastMonth === '0'+String(lastMonth)
      }
    }else{
      lastMonth === String(lastMonth)
    }

    lastMonth = new Date(yyyy+'-'+lastMonth+'-'+dd)
    let today = new Date(yyyy+'-'+(new Date().getMonth()+1)+'-'+dd)

    let ONE_DAY_TIMESTAMP = 86400000
    let daysCounted = 0

    
    while (lastMonth.getTime()+(daysCounted*ONE_DAY_TIMESTAMP) < today.getTime()+1){
      
      let onDay = lastMonth.getTime()+(daysCounted*ONE_DAY_TIMESTAMP)
      
      onDay = new Date(onDay)

      let yr = String(onDay.getFullYear())
      let mnth = String(onDay.getMonth()+1)
      let dt = String(onDay.getDate())

      if (Number(mnth) < 10){
        mnth = '0'+mnth
      }
      if (Number(dt) < 10){
        dt = '0'+dt
      }

      fauxLabels.push(yr + '-' + mnth + '-' + dt)

      daysCounted += 1;
    }

    
    let pastMonthSongs = []
    let fauxData = [];
    let wav = 0;
    let trackout = 0;
    let exclusive = 0;

    
    sortedData.map((purchase, i) => {
      
      let date = purchase.orderDate.slice(0,10)
      let MM = String(Number(date.slice(5,7))+1)
      let DD = date.slice(7,date.length)
      let YYYY = date.slice(0,5)

      if (Number(MM)<10){
        MM = '0' + MM
      }

      let pastMonthCheck = YYYY + MM + DD
      let prevMonth;

      if (Number(mm)<10){
        prevMonth = yyyy + '-0' + String(Number(mm)-1) + dd
      }else if (Number(mm)==10){
        prevMonth = yyyy + '-09-' + dd
      }else{ 
        prevMonth = yyyy + '-' + String(Number(mm)-1) + dd
      }
      
      if (i == 0) {
        fauxData = [
          ...fauxData, 
          {'x': prevMonth, 'y': 0}
        ]
      }

      if (this.state.today.date.localeCompare(pastMonthCheck) < 1){

        pastMonthSongs = [...pastMonthSongs, purchase]

        let tempObj = {
          'x': date, 
          'y': (purchase.price/100 + addSale)
        }
        
        fauxData = [
          ...fauxData, 
          tempObj
        ]

        addSale += purchase.price/100

        if (purchase.license === "unlimited wav"){
          wav += 1
        }
        if (purchase.license === "unlimited trackout"){
          trackout += 1
        }
        if (purchase.license === "exclusive"){
          exclusive += 1
        }
      }
      
    })

    fauxData = [
      ...fauxData, 
      {
        x: this.state.today.date, 
        y: addSale
      }
    ]

    this.setState({
      timeData: {
        ...this.state.timeData, 
        labels: fauxLabels, 
        datasets: [{
          label: "Song Sales - Past Month", 
          data: fauxData
        }]
      }
    })
    if (wav==0&&trackout==0&&exclusive==0){

      this.setState({
        doughnutData: {
          ...this.state.doughnutData, 
          labels: ["No Licenses Sold"], 
          datasets: [{
            data: [1]
          }]
        }
      })

    }else{

      this.setState({
        doughnutData: {
          ...this.state.doughnutData, 
          labels: ["Unlimited Wav", "Unlimited Trackout", "Exclusive"], 
          datasets: [{
            data: [wav,trackout,exclusive]
          }]
        }
      })

    }

    addSale = String(addSale).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    // ^^^ Adds thousands comma seperator ^^^
    this.setState({
      totalSales: `$${addSale}`
    })
    
    
    let tally = pastMonthSongs.reduce((a, c) => {
      a[c.artTitle] = (a[c.artTitle] || 0) + 1;
      return a;
    }, {});

    
    let songs = pastMonthSongs.reduce((list, item) => {
      if (list.indexOf(item.artTitle) == -1){
        list.push(item.artTitle)
      }
      return list;
    }, []);

    
    let top5Amounts = Array(5).fill(0)
    let top5Names = Array(5).fill('Empty Slot')


    for (let k=0; k<songs.length; k++){
      let lowest = Math.min(...top5Amounts)
      if (tally[songs[k]] > lowest){
        let spot = top5Amounts.indexOf(lowest)
        top5Amounts.splice(spot, 1, tally[songs[k]])
        top5Names.splice(spot, 1, songs[k])
      }
    }


    this.setState({
      barData: {
        labels: top5Names, 
        datasets: [{
          label: "Top Performing Songs", 
          data: top5Amounts
        }]
      }
    })

  }

  

  _weekRange = () => {

    // temporary
      this.setState({
        goalPercent: 0
      })
    // xxxxxxxxxxxx
    
    
    let {dd, mm, yyyy} = this.state.today
    let stateDate = this.state.today.date

    
    let sortedData = DemoData.sort(function (a, b) {
      return a.orderDate.localeCompare(b.orderDate);
    });

    
    let addSale = 0
    let year = yyyy
    let month = mm
    let fauxLabels = []
    
    let today = new Date(yyyy+'-'+(new Date().getMonth()+1)+'-'+dd)
    let ONE_DAY_TIMESTAMP = 86400000
    
    
    for (let i=6; i>-1; i--){
      
      let onDay = today.getTime()-(i*ONE_DAY_TIMESTAMP)
      
      onDay = new Date(onDay)

      let yr = String(onDay.getFullYear())
      let mnth = String(onDay.getMonth()+1)
      let dt = String(onDay.getDate())

      if (Number(mnth) < 10){
        mnth = '0'+mnth
      }
      if (Number(dt) < 10){
        dt = '0'+dt
      }

      fauxLabels.push(yr + '-' + mnth + '-' + dt)
    }

    
    let pastWeekSongs = []
    let fauxData = [];
    let wav = 0;
    let trackout = 0;
    let exclusive = 0;

    
    sortedData.map((purchase, i) => {
      
      let date = purchase.orderDate.slice(0,10)
      let MM = date.slice(5,7)
      let DD = date.slice(8,date.length)
      let YYYY = date.slice(0,4)

      let pastWeekCheck = new Date(stateDate).getTime()
      let prevWeek = new Date(date).getTime()+(ONE_DAY_TIMESTAMP*6);

      if ( i == 0){
        fauxData = [
          ...fauxData, 
          {
            x: new Date(pastWeekCheck-(6*ONE_DAY_TIMESTAMP)), 
            y: 0
          }
        ]
      }

      if (pastWeekCheck-1 < prevWeek){
        
        pastWeekSongs = [...pastWeekSongs, purchase]

        let tempObj = {
          'x': date, 
          'y': (purchase.price/100 + addSale)
        }
        
        fauxData = [
          ...fauxData, 
          tempObj
        ]

        addSale += purchase.price/100

        if (purchase.license === "unlimited wav"){
          wav += 1
        }
        if (purchase.license === "unlimited trackout"){
          trackout += 1
        }
        if (purchase.license === "exclusive"){
          exclusive += 1
        }
      }
      
    })

    fauxData = [
      ...fauxData, 
      {
        x: this.state.today.date, 
        y: addSale
      }
    ]

    this.setState({
      timeData: {
        ...this.state.timeData, 
        labels: fauxLabels, 
        datasets: [{
          label: "Song Sales - Past Week", 
          data: fauxData
        }]
      }
    })

    if (wav==0&&trackout==0&&exclusive==0){

      this.setState({
        doughnutData: {
          ...this.state.doughnutData, 
          labels: ["No Licenses Sold"], 
          datasets: [{
            data: [1]
          }]
        }
      })

    }else{

      this.setState({
        doughnutData: {
          ...this.state.doughnutData, 
          labels: ["Unlimited Wav", "Unlimited Trackout", "Exclusive"], 
          datasets: [{
            data: [wav,trackout,exclusive]
          }]
        }
      })

    }

    addSale = String(addSale).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    // ^^^ Adds thousands comma seperator ^^^
    this.setState({
      totalSales: `$${addSale}`
    })
    
    let tally = pastWeekSongs.reduce((a, c) => {
      a[c.artTitle] = (a[c.artTitle] || 0) + 1;
      return a;
    }, {});


    let songs = pastWeekSongs.reduce((list, item) => {
      if (list.indexOf(item.artTitle) == -1){
        list.push(item.artTitle)
      }
      return list;
    }, []);

    
    let top5Amounts = Array(5).fill(0)
    let top5Names = Array(5).fill('Empty Slot')

    for (let k=0; k<songs.length; k++){
      let lowest = Math.min(...top5Amounts)
      if (tally[songs[k]] > lowest){
        let spot = top5Amounts.indexOf(lowest)
        top5Amounts.splice(spot, 1, tally[songs[k]])
        top5Names.splice(spot, 1, songs[k])
      }
    }

    this.setState({
      barData: {
        labels: top5Names, 
        datasets: [{
          label: "Top Performing Songs", 
          data: top5Amounts
        }]
      }
    })

  }

  render() {
    
    return (
  
      <React.Fragment>

        <Head>
          <title>
            Divici Services
          </title>
          <link rel="stylesheet" href="../static/dashboard.css" />
          <script src="https://cdn.jsdelivr.net/npm/chart.js@2.8.0/dist/Chart.min.js" />
        </Head>
        
        <div id="hero">
          
          <Nav active={this.state.active} />
          <div className="under-nav" style={{height: "8vh", width: "100vh"}} />

          <FullDashboard 
            _yearRange={this._yearRange} 
            _monthRange={this._monthRange} 
            _weekRange={this._weekRange} 
            totalSales={this.state.totalSales} 
            goalPercent={this.state.goalPercent} 
            timeData={this.state.timeData} 
            barData={this.state.barData} 
            doughnutData={this.state.doughnutData} />
          
        </div>

        <Footer />

      </React.Fragment>

    )
  }
}



export default Index;
