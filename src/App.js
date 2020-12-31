import { BrowserRouter, Route, Switch } from "react-router-dom";
import NavBar from "./componets/layout/NavBar";
import DashBoard from "./componets/dashboard/Dashboard";
import ProjectDetails from "./componets/projects/ProjectDetails";
import SignIn from './componets/auth/SignIn';
import SignUp from './componets/auth/SignUp'
import Create from './componets/projects/CreateProject'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <Switch>
          {/* Create the routes for each component */}

          {/* Add the "path" so when the user goes to another route "/" does not get routed also */}

          <Route exact path = "/" component={DashBoard} />
          <Route path ="/project/:id" component={ProjectDetails} />
          <Route path = "/signin" component={SignIn} />
          <Route path ="/signup" component={SignUp} />
          <Route path ="/create" component={Create}/>
          
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
