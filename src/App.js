import { Provider } from 'react-redux';
import './App.css';
import Body from './Components/Body';
import Head from './Components/Head';
import Store from './Redux/Store';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Main from './Components/Main';
import WatchPage from './Components/WatchPage';

const appRouter = createBrowserRouter([{
  path:'/',
  element:<Body />,
  children:[
   {
    path:"/",
    element: <Main />
   },
  {
    path:"watch",
    element: <WatchPage />
  }

  ]
}])
function App() {
  return (
    <Provider store= {Store}>
    <div className='overflow-x-hidden overflow-y-scroll'>
      <Head />
      <RouterProvider router={appRouter} />
    </div>

    </Provider>
  );
}

export default App;

// create reacte app is a JS package 


