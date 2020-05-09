import React, { Component } from 'react';
import { Cards, Charts, CountryPicker } from "./Component";
import {Typography} from "@material-ui/core";
import styles from "./App.module.css";
import { fetchData } from './api';

class App extends Component {
    state = {
        data:{}, 
        country:"",  //here state receveing data from didMount
    }

   async componentDidMount(){
        const fetchedData = await fetchData();
        
       this.setState({ data: fetchedData }); // we sendind data to state
    }
    //this is for changing coountires
    handleCoutryChange = async (country) => {
        const fetchedData = await fetchData(country);
        this.setState({ data: fetchedData,country:country });
    }

    render() {
        const { data,country } = this.state;  // we can do with our simple method like this.state.data under card
        return (
            <div className={styles.Container}>
                <Typography variant="h5" color="textSecondary" gutterBottom>Developed By: Takbeer Ali khan</Typography>
                <Typography   varient="h5" color="textSecondary" gutterBottom>COVID-19 Tracking Application</Typography>
                
             <Cards data={data}/>
             <CountryPicker handleCoutryChange={this.handleCoutryChange}/>
             <Charts  data={data} country={country}/>
            
            </div>
          
        );
    }
}

export default App;