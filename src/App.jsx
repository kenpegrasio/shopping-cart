import { Link } from "react-router-dom";
import "./styles/App.css";

function App() {
  return (
    <>
      <div className="app">
        <h1>Welcome to JKP Store!</h1>
        <Link to="store"><button className="button-18">Go to the Store!</button></Link>
      </div>
    </>
  );
}

export default App;
