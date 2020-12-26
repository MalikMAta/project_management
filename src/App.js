import { BrowserRouter, Route, Switch } from "react-router-dom";
import Dashboard from "./componets/dashboard/Dashboard";
import NavBar from "./componets/layout/NavBar";
import DashBoard from "./componets/dashboard/Dashboard";
import ProjectDetals from './componets/projects/ProjectDetails'
import ProjectDetails from "./componets/projects/ProjectDetails";
import Signin, { SignIn } from './componets/auth/SignIn';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <Switch>
          {/* Create the routes for each component */}

          {/* Add the "path" so when the user goes to another route "/" does not get routed also */}

          <Route exact path="/" component={Dashboard} />
          <Route path ="/project/:id" component={ProjectDetails} />
          <Route path = "/signin" component={SignIn} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
