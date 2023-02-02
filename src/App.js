
import './App.css';
import Navbar from './Navbar';
import Routingfile from './Routingfile';
import { Provider } from 'react-redux';
import store from './Store';
function App() {
  return (
    <>
      <Navbar/>
      <Provider store={store}>
      <Routingfile/>
      </Provider>
      
    </>
  );
}

export default App;
