import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import './App.css'
import Error from './component/ErrorPage'
import Edit from './component/Edit'
import Home from './component/Home'
import Show from './component/Show'
import New from './component/New'

function App() {
  return (
    <Router>
      <nav>
        <Link to="/"> Home </Link> 
      </nav>
      <Routes>
        <Route path="/"  element={<Home/>}/> 
        <Route path="/:id" element={<Show/>} />
        <Route path="/:id/edit" element={<Edit/>} />
        <Route path="/new" element={<New/>} />
        <Route path="*"  element={<Error/>}/> 
      </Routes>
      <footer> im the foot </footer>
    </Router>
  )
}

export default App;
