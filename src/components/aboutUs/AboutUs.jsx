//Dependencies
import React , { Component } from 'react';
import {withStyles,Typography, Avatar,Card, CardHeader, CardContent,Grid} from '@material-ui/core';
import ReactDOM from "react-dom";

//UI
import PersonCard from './PersonCard'
const styles = theme =>({
  aboutUsText:{
    height:"300px",
    // alignContent:"center", 
    textAlign:"center",  
    verticalAlign: "middle",
    width:"100%",
    padding: "5px",
    margin:"10px 10px 20px 10px auto",
    // borderStyle:"solid"


  }

});



class AboutUs extends Component{
  constructor(props){
    super(props);
    this.state = {
    };
}

componentDidMount(){
  console.log("hre")
  const here = this.props.unemploymentData
}



render(){
  console.log("here")
const {classes} =  this.props;
  return(
    <div style={{height:1500, margin:"20px 20px 20px 40px"}} >

      <div className={classes.aboutUsText}>
      <Typography variant = "h2" color ="primary">
      <div>
      About Us
      </div>
      </Typography>
      <Typography variant = "h6" color ="primary">
      <div style={{marin:"0 auto", padding:"80px",textAlign:"center"}}>
      This project aims to analyze the twitter post, unemployment rate and crime rate <br/>
      in Victoria, Australia during the last 5 years (from 2014 to 2018) <br/>
      And make a relatively accurate prediction of the crime and unemployment rate in Victoria in 2019. <br/>
      The project is developed by 5 University of Melbourne students, detial information can be found below.
      </div>
      </Typography>
      </div>
      
      <div style ={{margin:"20px 0 0 0"}}>
      <Grid container spacing={16}>
      <Grid xs={4}>
        <PersonCard
        name = {"Chenyang Lu"}
        role ={"Front End"}
        Introduction = {["Responsible for Front-end Development in this project",  "chenyangl5@student.unimelb.edu.au"," https://www.linkedin.com/in/chenyang-lu-9ab85b148/2"]}
        />
        </Grid>
        <Grid xs={4}>
        <PersonCard
        name = {"Echo Gu"}
        role ={"Data Analytics"}
        Introduction = {["Responsible for Data Analyze in this project", "echo.echo@outlook.com","https://www.linkedin.com/in/echogu/"]}
        />
        </Grid>
        <Grid xs={4}>
        <PersonCard
        name = {"Jing Du"}
        role ={"Database Administrator"}
        Introduction = {["Responsible for DataBase Development and Management in this project", "chenyangl5@student.unimelb.edu.au","https://github.com/Carina827"]}     
        />
        </Grid>
        <Grid xs={4}>
        <PersonCard
        name = {"Zhijia Lu"}
        role ={"Crawler"}
        Introduction = {["Responsible for twitter crawler this project",  "zhijial94@outlook.com","https://github.com/zhijia25"]}      
        />
        </Grid>
        <Grid xs={4}>
        <PersonCard
        name = {"Pengcheng Yao"}
        role ={"Architecture"}
        Introduction = {["Architecture in this project",  "chenyangl5@student.unimelb.edu.au","https://github.com/LuChenyang3842"]}     
        />
        </Grid>
        <Grid xs={4}/>
    </Grid>
    </div>
    </div>
  )
}
}

export default withStyles(styles)(AboutUs);