import React , { Component } from 'react';
import MUIDataTable from "mui-datatables";
import ReactDOM from "react-dom";
import { Typography, Paper } from '@material-ui/core';
import {retrunTable} from '../../controllers/processDisplayData'
import {dataCollection} from '../../data/charData/allDataCollection'




class SummaryTable extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      data: []
    };
}
componentDidMount(){
  const tempData = retrunTable(this.props.twitterData, this.props.crimeData, this.props.unemploymentData)
  this.setState({data:tempData})

}


render(){
  const columns = ["City Name", "Wrath Twitter", "Crime Rate",  "Unemployment", "Population","Year"];


  let options = {
    filterType: "dropdown",
    responsive: "scroll"
  };

  return(
    <Paper style ={{width:"80%", margin:"40px 20px 20px 20px"}}>
    <MUIDataTable
      title={"Twitter Crime and unemployment"}
      data={this.state.data}
      columns={columns}
      options={options}
    />
    </Paper>
  )
}
}

export default SummaryTable;