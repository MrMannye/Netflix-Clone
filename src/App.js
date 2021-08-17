import React, {useEffect} from 'react';
import './App.css';
import Row from './Row'
import requests from './requests';
import Header from './Header';
import Banner from './Banner'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Login from './Login'
import Footer from './Footer'
import {useStateValue} from './StateProvider'
import {auth} from './firebase'
// API URL https://api.themoviedb.org/3/movie/550?api_key=c4a12a8b98b3ad1d94666becb52d89e4
// API_KEY c4a12a8b98b3ad1d94666becb52d89e4

function App() {

  // eslint-disable-next-line no-unused-vars
  // const[{user} , dispatch] = useStateValue();
  // // useEffect 
  // // Piece of code wich runs based on a give condition
  // useEffect(() => {
  //     const unsubscribe = auth.onAuthStateChanged((authUser) => {
  //     if (authUser){
  //       // THE USER IS LOGGED IN
  //       dispatch({
  //         type: 'SET_USER',
  //         user: authUser,
  //       });
  //     } else {
  //       // THE USER IS LOGGED OUT
  //       dispatch({
  //         type: 'SET_USER',
  //         user: null,
  //       });
  //     }
  //   });
  //   return() => {
  //     unsubscribe();
  //   }
  // }, [dispatch]);

  // console.log("USER IS >>>", user);


  return (
    <Router>
    <div className="app">
      <Switch>
        <Route path='/'>
            <Header/>
            <Banner/>
            <Row title='Trending Top' fetchUrl={requests.fetchTrending}/>
            <Row title='Action Movies' fetchUrl={requests.fetchActionMovies}/>
            <Row title='Top Rated' fetchUrl={requests.fetchTopRated}/>
            <Row title='Netflix - Originals' fetchUrl={requests.fetchNetflixOriginals} isLargeRow/>
            <Row title='Comedy Movies' fetchUrl={requests.fetchComedyMovies}/>
            <Row title='Horror Movies' fetchUrl={requests.fetchHorrorMovies}/>
            <Row title='Documentaries' fetchUrl={requests.fetchDocumentaries}/>
            <Row title='Romance Movies' fetchUrl={requests.fetchRomanceMovies}/>
            <Footer/>
        </Route>
        <Route path='/login'>
            <Login/>
        </Route>
      </Switch>
      {/* Header */}
      {/* Row */}
      {/* Row */}
      {/* Fooder */}
    </div>
    </Router>
  );
}

export default App;
