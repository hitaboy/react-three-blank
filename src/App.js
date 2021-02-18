import './App.scss';
import {
  BrowserRouter as Router,
  Switch, 
  Route
} from 'react-router-dom'
import Menu from './Menu.js'
import Page_1 from './pages/p_1'
import Page_2 from './pages/p_2'

function App() {
  return (
    <Router>
      
        <>
          <Menu />
          <Switch>
            <Route path="/p_1">
              <Page_1 />
            </Route>
            <Route path="/p_2">
              <Page_2 />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </>
      
    </Router>
  )
}

function Home() {
  return (
    <div className="center">
      <h1>React-Three-Blank</h1>
      <hr></hr>
      <h2>For fast React and Three.js development</h2>
      <p>Blank project with react, react-router, react-three-fiber and @react-three/drei</p>
    </div>
  )
}

export default App;
