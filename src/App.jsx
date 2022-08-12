import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from './components/Login.jsx'
import Signup from './components/Signup.jsx'
import Logged from './components/Logged.jsx'

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/*" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/logged" element={<Logged />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
