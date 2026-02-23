import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Route, Routes } from 'react-router'
import AboutComponent from './pages/about/AboutComponent.jsx'
import RootLayout from './layouts/rootlayout/rootlayout.jsx'
import LoginForm from './pages/login/LoginForm.jsx'
import RegisterComponent from './pages/register/RegisterComponent.jsx'
import ContactPage from './pages/contact/ComtactComponent.jsx'
import NotFound from './pages/notfound/NotFound.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<RootLayout/>}>
          <Route path="/" element={<App/>} />
          <Route path="/about" element={<AboutComponent />} />
          <Route path="/login" element={<LoginForm />}/>
          <Route path="/register" element={<RegisterComponent/>}/>
          <Route path="/contact" element={<ContactPage/>}/>
        </Route>
        <Route path="/*" element={<NotFound/>}/>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
