import React, { Component } from 'react';
import data from "./data";
import VictoryLib from "./VictoryLibrary";
import { withRouter } from "react-router-dom";
import styles from './Form.module.css';

class Graph extends Component {
    constructor(props) {
        super(props);
        this.state = {                  // state management
          temperatureData: [],
          humidityData: [],
          pressureData: []
        };
    }

    componentDidMount() {               //Life cycle method of react to get the data before load
        let newTempData = [],
            newHumidData = [],
            newPressureData = [];

        data.list.map(function(val,ind){        //map function used here to form object required for the graph data.
            return ( 
                newTempData.push({hour : ind+1, temperature : val.main.temp}),
                newHumidData.push({hour : ind+1, humidity : val.main.humidity.toFixed()}),
                newPressureData.push({hour : ind+1, pressure : val.main.pressure})
            ) 
        })

        this.setState({
            temperatureData: newTempData,
            humidityData: newHumidData,
            pressureData: newPressureData
        })
    }

    previousPage = (e) => {                     // Go back to Home page
        this.props.history.push("/");
    }

    render() {
        var buttonStyle = { 
            height: '30px',
            width: '200px',
            position: 'relative',
            top: '25px',
            left: '5%'
        }
        return ( 
            <React.Fragment>
                <div class={styles.header}>     
                    <button onClick={this.previousPage} style={buttonStyle}> Click For Home Page </button>
                    <h1>Forecast Graph</h1>
                </div>
                <VictoryLib data = {this.state.temperatureData} x = "Hour" y = "temperature"/>
                <VictoryLib data = {this.state.humidityData} x = "Hour" y = "humidity"/>
                <VictoryLib data = {this.state.pressureData} x = "Hour" y = "pressure"/>
            </React.Fragment>
        )
    }
}
 
export default withRouter(Graph);