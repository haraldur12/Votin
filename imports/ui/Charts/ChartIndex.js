import React , { Component } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import PropTypes from 'prop-types';
import { Questions } from './../../api/Questions';
import {ResponsiveContainer,BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts';
import QuestionBox from './../QuestionBox'

class ChartIndex extends Component {
  render(){
    return(
      <div>
        {this.props.viewdata ?
          <div>
            <div>
              <QuestionBox question={this.props.viewdata.question} />
            </div>
          <div>
            <ResponsiveContainer width="100%" height="100%" aspect={3}>
            <BarChart  data={this.props.viewdata.feedbacks}
                 margin={{top: 5, right: 30, left: 20, bottom: 5}}>
                 <XAxis dataKey="response"/>
                 <YAxis/>
                 <Tooltip/>
                 <Legend />
                 <Bar dataKey="count" fill="#66a3ff" name="responses"/>
            </BarChart>
          </ResponsiveContainer>
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
