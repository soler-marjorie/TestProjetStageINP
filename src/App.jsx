import { Outlet, Link } from 'react-router-dom';
import './App.css'

function App() {

  return (
    <>
      <div>
      <nav>
        <Link to="/">Accueil</Link> | <Link to="/about">À propos</Link>
      </nav>
      <hr />
      <Outlet /> 
    </div>
    </>
  )
}

export default App
