import React from 'react';
// import {Admin} from 'react-admin';
import {Admin, Resource, ListGuesser} from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';
// import logo from './logo.svg';
// import './App.css';


const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com');
const App = () => (
    <Admin dataProvider={dataProvider}>
      <Resource name="users" list={ListGuesser}/>
    </Admin>
)
// const App = () /=> <Admin dataProvider={dataProvider}/>;


//
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
