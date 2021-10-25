import logo from './logo.svg';
import './App.css';
import HomePage from './pages/homepage/homepage.component';
import { Switch,Route } from 'react-router';
import { Link } from 'react-router-dom';

const HatsPage = (props) => {
  return (
     <div>
        <h1>
            Hats Page
        </h1>
        
      </div>
  )
}


function App() {
  return (
    <div>
      <Switch>
         <Route exact path = "/" component = {HomePage}/>
         <Route path = "/hats" component = {HatsPage}/>
      </Switch>
    </div>
  );
}

export default App;
