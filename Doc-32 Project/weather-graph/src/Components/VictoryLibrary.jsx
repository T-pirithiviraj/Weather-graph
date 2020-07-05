import React, { Component } from 'react';
import { VictoryLine, VictoryChart, VictoryAxis } from "victory";

/**
 * Victory JS Library - Graph
 * Common component to display graph in a page.
 */
class victoryLib extends Component {
    render() {
        return ( 
            <VictoryChart               //chart component
                style={{
                    parent: {width: '50%', height: '100%', left: '20%'}
                }} 
                height={200} fontSize={10} width={300}
                padding={{ top: 40, bottom: 80, left: 100, right: 80 }} 
                responsive = {true} >

                <VictoryAxis            // To configure x-axis
                    label={this.props.x}
                    style={{
                        axis: {stroke: "#756f6a"},
                        axisLabel: {fontSize: 10, padding: 30},
                        ticks: {stroke: "grey", size: 5},
                        tickLabels: {fontSize: 5, padding: 5}
                    }}
                />

                <VictoryAxis             // To configure y-axis
                    dependentAxis
                    fixLabelOverlap={false}
                    label={this.props.y}
                    style={{
                        axis: {stroke: "#756f6a"},
                        axisLabel: {fontSize: 10, padding: 30},
                        tickLabels: {fontSize: 5, padding: 5}
                    }}
                />

                <VictoryLine data={this.props.data} x={this.props.x} y={this.props.y}/> 

            </VictoryChart>
        )
    }
}
 
export default victoryLib;