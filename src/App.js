import react from 'react'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'

import { Navbar } from './components'
import { Home, Alumni, Blog } from './pages'

import GlobalStyle from './globalStyles'


function App() {
  return (
    <>
      <Router>
        <GlobalStyle />
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/alumni' exact component={Alumni} />
          <Route path='/blog' exact component={Blog} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
