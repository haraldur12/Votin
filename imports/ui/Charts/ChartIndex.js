import React , { Component } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import PropTypes from 'prop-types';
import { Questions } from './../../api/Questions';
import {BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts';
import QuestionBox from './../QuestionBox'

class ChartIndex extends Component {
  render(){
    console.log(this.props.viewdata)
    return(
      <div>
        {this.props.viewdata ?
          <div>
            <div>
              <QuestionBox question={this.props.viewdata.question} />
            </div>
          <div className='chart__index'>
            <BarChart width={600} height={300} data={this.props.viewdata.feedbacks}
                 margin={{top: 5, right: 30, left: 20, bottom: 5}}>
                 <XAxis dataKey="response"/>
                 <YAxis/>
                 <Tooltip/>
                 <Legend />
                 <Bar dataKey="count" fill="#66a3ff" name="responses"/>
            </BarChart>
          </div>
      </div>
        : <p>Fetching data...</p>
        }
      </div>
    )
  }
}
export default createContainer((props) => {
  Meteor.subscribe('questions');
  return {
    viewdata: Questions.findOne({_id:props.id})
  };
}, ChartIndex);
