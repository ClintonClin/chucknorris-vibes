import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
       
        <table className='titleBar'>
          <tbody>
            <tr>
              <td>
                <img alt="app icon" width= "70" src="application.svg"/>
              </td>
              <td>
              <h1 className='header'> Chuck Norris Vibes</h1>
              </td>
            </tr>
            </tbody> 
        </table>

          <h1 className='cat'>Categories</h1>
          

      </div>
    );
  }
}

export default App;
