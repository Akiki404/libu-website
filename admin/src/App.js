import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import { Navbar, Partners } from './components'
import { Home, Alumni, Blog, Events, Drama } from './pages'

import GlobalStyle from './globalStyles'


function App() {
  return (
    <>
      <Router>
        <GlobalStyle />
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/events' exact component={Events} />
          <Route path='/partners' exact component={Partners} />
          <Route path='/alumni' exact component={Alumni} />
          <Route path='/blog' exact component={Blog} />
          <Route path='/bdadg' exact component={Drama} />
        </Switch>
      </Router>
    </>
  );
}

export default App;