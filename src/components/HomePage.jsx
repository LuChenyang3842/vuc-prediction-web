//Dependencies
import React , { Component } from 'react';
import {withStyles,AppBar, Toolbar, IconButton, Typography, Button, Tabs, Tab, LinearProgress } from '@material-ui/core';
// import {MenuIcon} from '@material-ui/icons/Menu';

//UI
import MapSection from './MapSection/MapSection'
import DataVisualizationPage from './datavisualizationSection/DataVisualizationPage'
import DataPredictionMap from './dataPrediction/DataPredictionMap'
import AboutUs from './aboutUs/AboutUs'

// import AboutUs from './aboutUs/AboutUs'
import {processCrimeData} from '../controllers/processCrimeData'
// import TextMapSection from './TextMapSection'

const styles = theme => ({
  root: {
    flexGrow: 1,
    backgroundColor:theme.palette.secondary.light,
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
});




class HomePage extends Component{
  constructor(props){
    super(props);
    this.state = {
      value: 0,
      crimeData:{},
      twitterData:{},
      unemploymentData:{},
      crimeDataLoaded: false,
      twitterDataLoaded: false,
      unemploymentDataLoade: false,
      completed: 0,
      buffer: 10,
    };
}

componentWillUnmount() {
  clearInterval(this.timer);
}

componentDidMount(){

  // const requireData = require('require-data')

  // const crimeData = new Promise(function (resolve, reject) {
  //   var data = require('../data/api_crime_new.json')
  //   resolve(data);
  // });
  // crimeData.then((data) => {
  //   console.log(data)

  //                 this.setState({
  //                   crimeData: data['task']['value'],
  //                   crimeDataLoaded: true
  //             })
  // })


  // const unData = new Promise(function (resolve, reject) {
  //   var data = require('../data/api_unemployment.json')
  //   resolve(data);
  // });
  // unData.then((data) => {
  //   console.log(data)
  //                 this.setState({
  //                   unemploymentData: data['task']['value'],
  //                   unemploymentDataLoade: true
  //             })
  // })


  this.timer = setInterval(this.progress, 500);
  let twitterUrl = "http://172.26.37.33:8080/crimitter/api/tasks/twitter-all"
  let crimeUrl = "http://172.26.37.33:8080/crimitter/api/tasks/crime-all"
  let unemploymentUrl = "http://172.26.37.33:8080/crimitter/api/tasks/unemployment-all"

  var opts = {
      method: "GET", //请求方法
      headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
      }
  }
  fetch(twitterUrl, opts)
      .then(res => {
          res.json().then((dataJson) => {
              console.log(dataJson)
              this.setState({
                  twitterData: dataJson,
                  twitterDataLoaded: true
              })
              return dataJson;
          })
      })

  fetch(crimeUrl, opts)
      .then(res => {
          res.json().then((dataJson) => {
              console.log(dataJson)
              dataJson = processCrimeData(dataJson)
              this.setState({
                  crimeData: dataJson,
                  crimeDataLoaded: true
              })
              return dataJson;
          })
      })

  fetch(unemploymentUrl, opts)
      .then(res => {
          res.json().then((dataJson) => {
              console.log(dataJson)
              this.setState({
                  unemploymentData: dataJson,
                  unemploymentDataLoade: true
              })
              return dataJson;
          })
      })
    
  //   const unData = new Promise(function (resolve, reject) {
  //   var data = require('../data/supplymentary.json')
  //   resolve(data);
  // });
  //  unData.then((data) => {
  //   console.log(data)
  //                 this.setState({
  //                   supportingData: data['task']['value'],
  //                   unemploymentDataLoade: true
  //             })
  // })

}

progress = () => {
  const { completed } = this.state;
  if (completed > 100) {
    this.setState({ completed: 0, buffer: 10 });
  } else {
    const diff = Math.random() * 10;
    const diff2 = Math.random() * 10;
    this.setState({ completed: completed + diff, buffer: completed + diff + diff2 });
  }
};

handleChange = (event, value) => {
  this.setState({ value });
};

render(){
const {classes} =  this.props;
const { value } = this.state;
const { completed, buffer } = this.state;
if (!(this.state.crimeDataLoaded && this.state.twitterDataLoaded && this.state.unemploymentDataLoade)){
  return(
      <div style ={{marginTop:"15px"}}>
            <LinearProgress variant="buffer" value={completed} valueBuffer={buffer} color ="secondary" />
      </div>
  )
}
else{
  return(
    <div>
    <div className={classes.root}>
      <AppBar position="static" color= "primary">
        <Toolbar variant="dense">
          <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
            {/* <MenuIcon /> */}
          </IconButton>
          <Typography variant="h4" color="inherit" className={classes.grow}>
          VUC Prediction
          </Typography>
          {/* <Button color="inherit">About Us</Button> */}
        </Toolbar>
        <Toolbar variant="dense">
        <Tabs value={value} onChange={this.handleChange}>
            <Tab label="Current Map" />
            <Tab label="Data visualization" />
            <Tab label="Crime and Unemployment Predication" />
            <Tab label="About Us" />
        </Tabs>
        </Toolbar>
      </AppBar>
    </div>
    {value === 0 && 
        <MapSection 
          crimeData= {this.state.crimeData}
          twitterData = {this.state.twitterData}
          unemploymentData = {this.state.unemploymentData}
          />}
    {value === 1 && <DataVisualizationPage 
      twitterData ={this.state.twitterData} 
      unemploymentData = {this.state.unemploymentData} 
      crimeData = {this.state.crimeData}/>}
    {value === 2 && 
    <DataPredictionMap
    crimeData= {this.state.crimeData}
    twitterData = {this.state.twitterData}
    unemploymentData = {this.state.unemploymentData}
    />}
    {value === 3 && <AboutUs
    unemploymentData = {this.state.unemploymentData}/>}
    </div>

  )
}
}
}

export default withStyles(styles)(HomePage);
