import {BrowserRouter} from 'react-router-dom'
import NavBar from './componets/layout/NavBar'

function App() {
  return (

    <BrowserRouter>
        <div className="App">
      <NavBar />
      <Switch>

        {/* Create the routes for each component */}
      </Switch>
        </div>
  </BrowserRouter>
  );
}

export default App;
