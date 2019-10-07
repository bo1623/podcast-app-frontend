import React from 'react';
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import NavBar from './containers/NavBar';
import PodcastsContainer from './containers/PodcastsContainer'
import PodcastEps from './components/PodcastEps'


function App() {
  return (
    <Router>
      <div>
        <NavBar />
        <Route exact path='/podcasts' component={PodcastsContainer} />
        <Route path='/episodes' component={PodcastEps} />
      </div>
    </Router>
  );
}

export default App;


// <Route path='podcasts/:podcastId' render={routerProps => <PodcastEps {...routerProps} />}/>

// <Route exact path='/podcasts' render={routerProps => <PodcastsContainer {...routerProps}/>} />
// <Route exact path='/podcasts' component={PodcastsContainer} />
// <Route exact path='/' component={Home}/>

//
// <div className="App">
//   <header className="App-header">
//     <img src={logo} className="App-logo" alt="logo" />
//     <p>
//       Edit <code>src/App.js</code> and save to reload.
//     </p>
//     <a
//       className="App-link"
//       href="https://reactjs.org"
//       target="_blank"
//       rel="noopener noreferrer"
//     >
//       Learn React
//     </a>
//   </header>
// </div>
