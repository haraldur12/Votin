import React from 'react';
import GitHubForkRibbon from 'react-github-fork-ribbon';

import Header from './Header';
import AddQuestion from './AddQuestion';

const App = () => (
  <div>
    <GitHubForkRibbon
      href="//github.com/haraldur12/quantilope-task"
      target="_blank"
      position="right"
    >
                 View on Github
      </GitHubForkRibbon>
    <Header title="Quantilope" />
    <AddQuestion className="wrapper" />
  </div>
);


export default App;
