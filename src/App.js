import { BrowserRouter, Route, Switch } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import ListStories from "./components/ListStories/ListStories";
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <div className="container mx-auto news-container">
          <Switch>
            <Route exact path="/" render={() => <ListStories type={"topstories"} />} />
            <Route path="/new" render={() => <ListStories type={"newstories"} />} />
            <Route path="/best" render={() => <ListStories type={"beststories"} />} />
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
