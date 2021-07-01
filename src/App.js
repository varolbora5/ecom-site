import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min";
import NavBar from "./Components/Nav Bar";
import Highlight from "./Components/Highlight";

function App() {
  return (
    <div className="App">
      <body className="App-header">
        <NavBar />
        <Highlight />
      </body>
    </div>
  );
}

export default App;
