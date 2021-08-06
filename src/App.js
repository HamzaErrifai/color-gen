// import logo from "./logo.svg";
import { BrowserRouter, Redirect, Route } from "react-router-dom";
import "./App.css";
import ColorCodes from "./components/ColorCodes";
import NavBar from "./components/NavBar";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <div className="content">
          <Route exact path="/">
            <Redirect
              to={{
                pathname: "/55dd88",
              }}
            />
          </Route>
          <Route path="/generate">
            <h1>generate page</h1>
          </Route>
          <Route path="/:colors">
            <ColorCodes/>
          </Route>{" "}
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
