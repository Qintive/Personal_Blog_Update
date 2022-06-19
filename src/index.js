import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import store from './Reducers/Store';
import { Provider } from 'react-redux';

let renderEntireTree = (state) => {

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <withRouter>
          <App state={state} dispatch={store.dispatch.bind(store)} store={store} />
        </withRouter>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
}

renderEntireTree(store.getState());

store.subscribe(() => {
  let state = store.getState()
  renderEntireTree(state);
})
