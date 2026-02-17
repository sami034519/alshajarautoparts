import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'; 
import { Provider } from 'react-redux'; // <-- import Redux Provider
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { store } from './pages/store/store'; // <-- import your Redux store

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}> {/* Redux store provider */}
      <BrowserRouter>        {/* React Router provider */}
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

// Measure performance (optional)
reportWebVitals();
