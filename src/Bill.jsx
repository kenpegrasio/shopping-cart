import { Link, useLocation } from "react-router-dom";
import "./styles/Bill.css";

const Bill = () => {
  const location = useLocation();
  const { items, inputValue, totalPrice } = location.state;
  console.log(items);
  console.log(inputValue);
  return (
    <div className="bill">
      <h1>Bill</h1>
      {items.map((item) => {
        if (inputValue[item.id] > 0) {
          return (
            <p key={item.id}>
              <strong>{inputValue[item.id]}x</strong> {item.title}
            </p>
          );
        }
      })}
      <h2>Total Price: {totalPrice} SGD</h2>
      <Link to="/store"><button className="button-18">Back to Store</button></Link>
    </div>
  );
};

export default Bill;
