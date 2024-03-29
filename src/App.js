import logo from './logo.svg';
import './App.css';
import HomePage from './pages/homepage/homepage.component';
import { Switch,Route } from 'react-router';
import { Link } from 'react-router-dom';
import ShopPage from './pages/shop/shop-page.component';
import  {Header} from './components/header/header.component';

function App() {
  return (
    <div>
    <Header/>
      <Switch>
         <Route exact path = "/" component = {HomePage}/>
         <Route path = "/shop" component = {ShopPage}/>
      </Switch>
    
    </div>
  );
}

export default App;
