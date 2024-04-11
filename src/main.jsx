import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import About from './pages/About/About.jsx';
import Services from './pages/Services/Services.jsx';
import Contact from './pages/Contact/Contact.jsx';
import { ConfigProvider, } from 'antd';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ConfigProvider theme={{
      "components": {
        "Card": {
          "borderRadiusLG": 0
        }
      }
    }}>
      <BrowserRouter>
        <Routes>
          <Route>
            <Route path={`/`} index element={<App />} />
            <Route path={`/about`} element={<About />} />
            <Route path={`/services`} element={<Services />} />
            <Route path={`/contact`} element={<Contact />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ConfigProvider>

  </React.StrictMode>,
)
