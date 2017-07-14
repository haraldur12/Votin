import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';
import PropTypes from 'prop-types';
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, Legend } from 'recharts';

import { Questions } from './../../api/Questions';
import QuestionBox from './../Components/QuestionBox';

class ChartIndex extends Component {
  renderData() {
    if (this.props.viewdata) {
      return (
        <div>
          <div>
            <QuestionBox question={this.props.viewdata.question} />
          </div>
          <div>
            <ResponsiveContainer width="100%" height="100%" aspect={3}>
              <BarChart
                data={this.props.viewdata.feedbacks}
                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
              >
                <XAxis dataKey="response" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="count" fill="#66a3ff" name="responses" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      );
    }
    return <p>Fetching data...</p>;
  }
  render() {
    return (
      <div>
        {this.renderData()}
      </div>
    );
  }
}
ChartIndex.propTypes = {
  viewdata: PropTypes.object
};

export default createContainer((props) => {
  Meteor.subscribe('currentQuestion', props.id);
  return {
    viewdata: Questions.findOne({ _id: props.id })
  };
}, ChartIndex);
