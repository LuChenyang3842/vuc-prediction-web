/*
@This file is developed by Team 11 of COMP90024 of The University of Melbourne, under Apache Licence(see LICENCE). 
 Researched Cities: Victoria, AU 
 Team member - id: 
 Chenyang Lu 951933
 Echo Gu 520042
 Pengcheng Yao	886326
 Zhijia Lu 921715
 Jing Du	77507
*/




//Dependencies
import React , { Component } from 'react';
import {withStyles,Typography, Avatar,Card, CardHeader, CardContent,Grid} from '@material-ui/core';
import ReactDOM from "react-dom";

//UI
import PersonCard from './PersonCard'
const styles = theme =>({
  aboutUsText:{
    height:"400px",
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
      The Victoria Unemployment and Crime (VUC) Prediction project is designed to collect and analyze the twitter post located within Victoria,
       Australia. Sentiment analysis is conducted on the harvested tweets to identify the ratio of wrath posts in each local government area.
       rther development of regression model is used to identify the relationship between the ratio of wrath tweets and two social factors:
        crime rate and unemployment rate, for years from 2014 to 2016. This model is used to predict future crime and unemployment rate in
         each area based on the currently streaming collection of Twitter data.<br/> <br/>
This project is designed and developed by a team of University of Melbourne students. Detailed information can be found below.
      </div>
      </Typography>
      </div>
      
      <div style ={{margin:"20px 0 0 0"}}>
      <Grid container spacing={16}>
      <Grid xs={4}>
        <PersonCard
        name = {"Chenyang Lu"}
        role ={"Front-end Developer"}
        Introduction = {["Front-end development and data visualization",  "chenyangl5@student.unimelb.edu.au"," https://www.linkedin.com/in/chenyang-lu-9ab85b148/2"]}
        />
        </Grid>
        <Grid xs={4}>
        <PersonCard
        name = {"Echo Gu"}
        role ={"Data Analyst"}
        Introduction = {["Data analytic and intepretation", "echo.echo@outlook.com","https://www.linkedin.com/in/echogu/"]}
        />
        </Grid>
        <Grid xs={4}>
        <PersonCard
        name = {"Jing Du"}
        role ={"Database Administrator"}
        Introduction = {["Database design and administration", "chenyangl5@student.unimelb.edu.au","https://github.com/Carina827"]}     
        />
        </Grid>
        <Grid xs={4}>
        <PersonCard
        name = {"Zhijia Lu"}
        role ={"Back-end Developer"}
        Introduction = {["Twitter harvesting and back-end development",  "zhijial94@outlook.com","https://github.com/zhijia25"]}      
        />
        </Grid>
        <Grid xs={4}>
        <PersonCard
        name = {"Pengcheng Yao"}
        role ={"Architecture"}
        Introduction = {["Architecture design and implementation",  "chenyangl5@student.unimelb.edu.au","https://github.com/LuChenyang3842"]}     
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