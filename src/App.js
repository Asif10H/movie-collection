import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import About from "./component/About/About";
import Footer from "./component/Footer/Footer";
import Header from "./component/Header/Header";
import MovieDetail from "./component/MovieDetail/MovieDetail";
import Movies from "./component/Movies/Movies";
import NotFound from "./component/NotFound/NotFound";
 
function App() {

  return (
    <Router>
         <Header />
      <Switch>
        <Route exact path="/">
          <Movies />
        </Route>
        <Route path="/home">
          <Movies />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/movie/:id">
          <MovieDetail></MovieDetail>
        </Route>
        <Route path="*">
          <NotFound/>
        </Route>
      </Switch>
      <Footer/>
    </Router>
  );
}

export default App;
