// import logo from "./logo.svg";
import { BrowserRouter, Redirect, Route } from "react-router-dom";
import "./App.css";
import ColorCodes from "./components/ColorCodes";
import GenerateColors from "./components/GenerateColors";
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
                pathname: "/generate",
              }}
            />
          </Route>
          <Route exact path="/generate">
            <GenerateColors />
          </Route>
          <Route path="/:colors">
            <ColorCodes />
          </Route>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
