import React, { Component } from 'react';

import Header from './../Components/Header'
import ChartIndex from './ChartIndex';

export default class ViewData extends Component {
  render() {
    return (
      <div>
        <Header title="Showing results for your question" />
        <ChartIndex id={this.props.match.params.id} />
      </div>
    )
  }
}
