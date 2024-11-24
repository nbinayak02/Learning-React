import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* this is the function call to App(). The html inside that function gets converted into object then only it is rendered in screen. */}
    <App />

  </StrictMode>,
)
