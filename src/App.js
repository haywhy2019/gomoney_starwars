
import './App.css';
import {Route, Switch} from "react-router-dom"
import HomePage from "./pages/homePage/homePage"
import PeoplePage from "./pages/people/people"
import Footer from "./components/footer/footer"

function App() {
  return (
    <div>
    <Switch>
    <Route exact path="/" component={HomePage} />
    <Route path="/people" component={PeoplePage} />
    </Switch>
    <Footer />
    </div>
  );
}

export default App;
