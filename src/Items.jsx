import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import "./styles/Items.css";

function List(props) {
  const handleChange = (event) => {
    const { name, value } = event.target;
    props.setCount({
      ...props.count,
      [name]: value,
    });
  };
  return (
    <div className="container">
      {props.items.map((item) => {
        return (
          <div key={item.id} className="item">
            <img className="image" src={item.image} />
            <p>{item.title}</p>
            <p>{item.price} SGD</p>
            <input
              type="number"
              value={props.count[item.id]}
              name={item.id}
              onChange={handleChange}
              min="0"
            ></input>
          </div>
        );
      })}
    </div>
  );
}

const Items = () => {
  const [items, setItems] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [totalPrice, setTotalPrice] = useState(0);
  const initValue = {};
  for (let i = 0; i < 20; i++) {
    initValue[i] = 0;
  }
  const [inputValue, setInputValue] = useState(initValue);

  useEffect(() => {
    console.log("Fetching products!");
    fetch("https://fakestoreapi.com/products")
      .then((res) => {
        if (res.status >= 400) {
          throw new Error("Server error");
        }
        return res.json();
      })
      .then((res) => {
        var newItems = [];
        for (let i = 0; i < 20; i++) {
          newItems.push({
            id: i,
            title: res[i].title,
            image: res[i].image,
            price: res[i].price,
          });
        }
        setItems(newItems);
      })
      .catch((error) => setError(error))
      .finally(() => setLoading(false));
  }, []);

  useEffect(() => {
    if (items.length > 0) {
      console.log("Updating price!");
      var newPrice = 0;
      for (let i = 0; i < 20; i++) {
        newPrice += items[i].price * inputValue[i];
      }
      console.log("input value has changed! The new price become:", newPrice);
      setTotalPrice(newPrice);
    }
  }, [inputValue]);

  if (loading) {
    return <p>Loading...</p>;
  }
  if (error) {
    return <p>A network error was encountered</p>;
  }

  return (
    <>
      <h1>List of Items to Buy</h1>
      <p>Total Price: {totalPrice} SGD</p>
      <Link to="/bill" state={{ items: items, inputValue: inputValue, totalPrice: totalPrice }}>
        Checkout
      </Link>
      <List items={items} count={inputValue} setCount={setInputValue} />
    </>
  );
};

export default Items;
