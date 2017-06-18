import React, { Component } from 'react';
import Header from './Header';
import AddQuestion from './AddQuestion';
import GitHubForkRibbon from 'react-github-fork-ribbon';

export default class App extends Component {
  render() {
    return (
      <div>
        <GitHubForkRibbon
          href="//github.com/haraldur12/quantilope-task"
          target="_blank"
          position="right">
                   View on Github
        </GitHubForkRibbon>
        <Header title="Quantilope" />
        <AddQuestion className="wrapper" />
      </div>
    );
  }
}
