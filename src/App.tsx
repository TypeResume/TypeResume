import * as React from 'react';
import './App.css';

import Resume from './views/Resume';

import { Provider } from 'react-redux';

import store from './store';

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <Resume/>
        </div>
      </Provider>
    );
  }
}

export default App;
