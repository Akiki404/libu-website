import react from 'react'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'

import { Navbar } from './components'
import { Home } from './pages'

import GlobalStyle from './globalStyles'


function App() {
  return (
    <>
      <Router>
        <GlobalStyle />
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
