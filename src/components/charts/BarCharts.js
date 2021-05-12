import React from 'react';
import {Bar} from 'react-chartjs-2';

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            labels: ['minimum Years', 'maximum Years'],
  datasets: [
    {
      label: 'Number of years at company',
      backgroundColor: 'rgba(75,192,192,1)',
      borderColor: 'rgba(0,0,0,1)',
      borderWidth: 2,
      data: [props.min, props.max]
    }
  ]
        }
    }
  render() {
    return (
      <div>
        <Bar
          data={this.state}
          options={{
            title:{
              display:true,
              text:'Average Rainfall per month',
              fontSize:20
            },
            legend:{
              display:true,
              position:'right'
            }
          }}
        />
      </div>
    );
  }
}