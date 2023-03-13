import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { BrowserRouter } from 'react-router-dom';
import store from './redux/store';
import {Provider} from 'react-redux';
import {ToastContainer} from 'react-toastify'
//import { AppProvider } from './Context/contex';
import 'react-toastify/dist/ReactToastify.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <Provider store={store}>
      <ToastContainer
      position='top-right'
      autoClose={3000}
      closeOnClick
      pauseOnHover
      theme='dark'
      />

    <App />
    </Provider>
    
    </BrowserRouter>
  </React.StrictMode>
)
