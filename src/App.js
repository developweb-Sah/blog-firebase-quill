import "./App.css";
import Main from "./Layout/Homepage/Main/Main.js";
import Heading from "./Layout/Homepage/Heading/Heading.js";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ViewArticle from "./Layout/ViewArticle/VeiwArticle.js";
import NewArticle from "./Layout/Homepage/NewArticle/NewArticle";

function App() {
  return (
    <div className="App">
      <Router>
        <Heading />
        <Switch>
          <Route path="/" exact>
            <Main />
          </Route>
          <Route path="/article/:id">
            <ViewArticle />
          </Route>
          <Route path="/new-article">
            <NewArticle />
          </Route>
        </Switch>
        <Main />
      </Router>
    </div>
  );
}

export default App;
