import React ,{ Component } from 'react';
import AppProductsList from './components/products-list/AppProductsList';
import './App.css';

class App extends Component {
  render(){
    return (
      <div>
        <AppProductsList/>
      </div>
    )
  }
}


export default App;
