import "./App.css";
import { Route, Switch } from "react-router-dom";
import HomePage from "./pages/homePage/homePage";
import PeoplePage from "./pages/people/people";
import ShipPage from "./pages/shipPage/shipPage";
import Footer from "./components/footer/footer";
import SinglePage from "./pages/single/single";

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/people" component={PeoplePage} />
        <Route path="/ships" component={ShipPage} />
        <Route path="/single/:type/:id" component={SinglePage} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
