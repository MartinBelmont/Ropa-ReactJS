import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar/NavBar.jsx';
import ItemDetailContainer from './pages/ItemDetailContainer.jsx';
import ItemDetailList from './components/ItemDetailContainer/ItemDetailList.jsx';
import ItemListContainer from './components/ItemListContainer/ItemListContainer.jsx';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from './context/CartContext';
import CartContainer from './components/CartContainer/CartContainer';

function App() {
  
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar/>
        <Switch>
          <Route exact path="/" component={ItemListContainer}/>
          <Route exact path="/category/:id" component={ItemListContainer}/>
          <Route exact path="/item/:id" component={ItemDetailContainer}/>
          <Route exact path="/cart" component={CartContainer}/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
