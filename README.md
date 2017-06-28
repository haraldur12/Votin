[![Build Status](https://travis-ci.org/haraldur12/quantilope-task.svg?branch=master)](https://travis-ci.org/haraldur12/quantilope-task)

# Question Editor

* You are able to specify a question and set unlimited amount of radioboxes.
* You can share the generated link with your audience.
* As your question gets responses you are able to see the data in real time.

# Install & Run

* `meteor npm install`
* `meteor run`

# Tests
  There is still an on going warning related to the recent updates on enyzme and react.
  Warnings do persist.

  To run the current tests run `npm test`.
## Issues [tests]
  Right now there are ongoing issues with the enzyme and react version differences. Currently newer
  version of react doesn't harbour the addons that's why it raises an error even though it makes use of
  react-addons-test-utils.

  In his article on medium Michael Shilman [React Unit Testing with Mocha and Enzyme](https://medium.freecodecamp.org/react-unit-testing-with-mocha-and-enzyme-77d18b6875cb) also states
  the same error

  ```
  Unable to resolve some modules:
  "react/addons" in /path/to/react-compat.js
  "react/lib/ReactContext" in /path/to/react-compat.js
  "react/lib/ExecutionEnvironment" in /path/to/react-compat.js
  ```

  There is work around it which is based on deleting the practicalmocha package from the meteor dependencies
  and installing the mocha package directly from the npm. However it takes away the functionality of the test suit on the browser and the tests have to be compiled using babel.

  The on going issue also [mentiond here](https://github.com/airbnb/enzyme/issues/302) even though it is closed
  the author states

  ```
  We have a plan to alter the core of enzyme in the future such that this problem won't occur again,
  but in the meantime, the current behavior will not be changing.
  ```

# Demo

[Demo App](https://quanti.herokuapp.com)
