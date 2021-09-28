import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar/NavBar.jsx';
import ItemDetailList from './components/ItemDetailContainer/ItemDetailList.jsx';
import ItemListContainer from './components/ItemListContainer/ItemListContainer.jsx';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar/>
        <Switch>
          <Route exact path="/">
            <ItemListContainer/>
          </Route>
          <Route exact path="/category/:id">
            <ItemListContainer/>
          </Route>
          <Route path="/item/:id">
            <ItemDetailList/>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
