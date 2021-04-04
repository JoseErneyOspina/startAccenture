import React from 'react';
import '../styles/App.scss';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import MainLayout from './components/templates/MainLayout';
import SignIn from './components/pages/SignIn';
import SignUp from './components/pages/SignUp';
import UsersTable from './components/organisms/UsersTable';


function App() {
  return (
    <Router>
      <MainLayout>
        <Switch>
          <Route exact path="/" component={ SignIn } />
          <Route exact path="/registrarse" component={ SignUp } />
          <Route exact path="/users" component={ UsersTable } />
          <Route component={ () => (
            <div className="ed-grid">
              <h1>Error 404</h1>
              <span>Pagina no encontrada</span>
            </div>
          )} />
        </Switch>
      </MainLayout>
  </Router>
  );
}

export default App;
