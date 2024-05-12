import { Provider } from 'react-redux';
import './App.css';
import Body from './Components/Body';
import Head from './Components/Head';
import Store from './Redux/Store';

function App() {
  return (
    <Provider store= {Store}>
    <div className='overflow-x-hidden overflow-y-scroll'>
      <Head />
      <Body />
    </div>
    </Provider>
  );
}

export default App;

// create reacte app is a JS package 


