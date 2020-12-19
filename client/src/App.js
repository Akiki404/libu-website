import react from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import { Navbar, Footer, PostDetail } from './components'
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
          <Route path='/alumni' exact component={Alumni} />
          <Route path='/blog' exact component={Blog} />
          <Route path='/post' exact component={PostDetail} />
          <Route path='/bdadg' exact component={Drama} />
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
