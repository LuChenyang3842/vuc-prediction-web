//Dependencies
import React , { Component } from 'react';
import {withStyles,Typography,Card, Divider,ListItem, AppBar,Tabs, Tab,CardHeader,CardContent, List} from '@material-ui/core';


//Data

//UI


const styles = theme => ({
  map:{
    width: "500px",
    height: "500px"
  },
  card:{
    backgroundColor: theme.palette.primary.light,
},
tabs:{
    boxShadow:'none',
    shadow:'none',
    backgroundColor: theme.palette.primary.light,
},
cardContent: {
    backgroundColor: theme.palette.secondary.light,
},


});



export class InfoCard extends Component{
  constructor(props){
    super(props);
    this.state = {
        previousMaptype: this.props.maptype,
        value:this.props.maptype,

    };
}



render(){
    const {value} = this.state;
    const {classes} = this.props; 
    return(
        <div>
            <Card classes={{
                    root: classes.card, // class name, e.g. `classes-nesting-root-x`
                  }}>
                <CardHeader title={
                <Typography variant = "h5" color ="error">
                        {this.props.cityName}
                </Typography>
                 } 
                 color="#fffff" />

                <CardContent className ={classes.cardContent}>
                    <Typography variant = "body1" color ="primary">
                    <List dense= {true}>
                        <ListItem>
                            Predicted Crime Rate : {this.props.currentPredictCrimeData}
                        </ListItem>
                        <ListItem>
                            Predicted unemployment Rate: {this.props.currentPredictUnemploymentData}
                        </ListItem>
                </List>
                </Typography>
                </CardContent>
            </Card>
        </div>



    )
}
}



export default withStyles(styles)(InfoCard);