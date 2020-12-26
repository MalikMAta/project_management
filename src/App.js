import { BrowserRouter, Route, Switch } from "react-router-dom";
import Dashboard from "./componets/dashboard/Dashboard";
import NavBar from "./componets/layout/NavBar";
import DashBoard from "./componets/dashboard/Dashboard";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <Switch>
          {/* Create the routes for each component */}

          <Route to="/" component={Dashboard} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
