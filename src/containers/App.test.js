import React    from 'react';
import ReactDOM from 'react-dom';
import App      from './App';

// an example spec
it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});
