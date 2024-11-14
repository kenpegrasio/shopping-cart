import { Link } from "react-router-dom";
import "./styles/Store.css";

const Store = () => {
  return (
    <div className="store">
      <h1>Welcome to the Store</h1>
      <Link to="items"><button className="button-18">Check our Items!</button></Link>
    </div>
  );
};

export default Store;
