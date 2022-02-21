
import './App.css';
import allReducers from './reducers';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import Counter from './components/Counter';

const store = createStore(allReducers)
function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <header className="App-header">
       Counter example

       <Counter/>
      </header>
    </div>
    </Provider>
  );
}

export default App;
