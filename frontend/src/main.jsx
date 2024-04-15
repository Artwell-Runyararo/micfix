import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'animate.css'
import About from './pages/About/About.jsx';
import Services from './pages/Services/Services.jsx';
import Contact from './pages/Contact/Contact.jsx';
import { ConfigProvider, } from 'antd';
import TanStackQueryProvider from './api/tanStackProvider.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <ConfigProvider theme={{
      "components": {
        "Card": {
          "borderRadiusLG": 0,
          "boxShadowCard": "",
          "boxShadowTertiary": ""
        },
        "Button": {
          "defaultActiveColor": "rgb(0, 170, 185)",
          "defaultActiveBorderColor": "rgb(0, 170, 185)",
          "defaultBg": "rgb(0, 170, 185)",
          "defaultHoverBorderColor": "rgb(0, 170, 185)",
          "defaultHoverColor": "rgb(62, 222, 236)",
          "groupBorderColor": "rgb(61, 239, 255)",
          "paddingXS": 29,
          "borderRadius": 0,
          "borderRadiusLG": 0
        }
      }
    }}>
      <BrowserRouter>
        <TanStackQueryProvider>
          <Routes>
            <Route>
              <Route path={`/`} index element={<App />} />
              <Route path={`/about`} element={<About />} />
              <Route path={`/services`} element={<Services />} />
              <Route path={`/contact`} element={<Contact />} />
            </Route>
          </Routes>
        </TanStackQueryProvider>
      </BrowserRouter>
    </ConfigProvider>

  </React.StrictMode>,
)
