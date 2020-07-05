import React from 'react';
import { withRouter } from "react-router-dom";
import styles from './Form.module.css';

class HomePage extends React.Component{
    constructor (props) {
        super(props)
        this.state = { cityName: '' }
    }

    /**
     * Input onChange Handler
     * @param {event} e - Event params return all the data of that event
     */
    inputOnChange = (e) => {
        this.setState({ cityName: e.target.value })
    }

    /**
     * Submit Handler to get data from API for forecast 96 hours
     */
    submit = () => {
        // fetch("http://api.openweathermap.org/data/2.5/weather?q="+this.state.cityName+"&appid=7fe80dc14fea25de6ab7b4d67821e22f", {
        // })
        // .then(res => res.json())       
        // .then((data) => {
        //     console.log(data);
        //  this.setState({ data: data.main })                    
        // })
        // .catch((error) => {
        //     console.log(error);
        // })
        this.props.history.push("/Graph");      //Route to next page
    }

    render() {
        return ( 
            <div className={styles.form}>
                <h1> Weather Forecast For 96 Hours</h1>
                <input type="text" placeholder="Enter a city name" className="city" onChange={this.inputOnChange}/> 
                <button className="button" onClick={this.submit}>Submit</button>
            </div>
        )
    }
}
 
export default withRouter(HomePage);