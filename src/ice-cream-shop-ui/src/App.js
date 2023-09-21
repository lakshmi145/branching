import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import FooterComponent from './component/FooterComponent';
import HeaderComponent from './component/HeaderComponent';
import ListIceCreamComponent from './component/ListIceCreamComponent';
import AddIceCreamComponent from './component/AddIceCreamComponent';
import UpdateIceCreamComponent from './component/UpdateIceCreamComponent';
import ViewIceCreamComponent from './component/ViewIceCreamComponent';
import Homepage from './component/Homepage';
import ConfirmDeleteComponent from './component/ConfirmDeleteComponent';

function App() {
  return (
    <div>
      <Router>
        <HeaderComponent />
        <div className='container'>
          <Switch>
            <Route exact path="/" component={Homepage}></Route>
            <Route exact path="/homepage" component={Homepage}></Route>
            <Route path="/iceCreams" component={ListIceCreamComponent}></Route>
            <Route exact path="/add-icecream" component={AddIceCreamComponent}></Route>
            <Route path = "/update-icecream/:id" component={UpdateIceCreamComponent}></Route>
            <Route path = "/get-icecream/:id" component={ViewIceCreamComponent}></Route>
            <Route path = "/confirm-delete/:id" component={ConfirmDeleteComponent}></Route>
          </Switch> 
        </div>
        <FooterComponent />
      </Router>
    </div>
  );
}

export default App;
