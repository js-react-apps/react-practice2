import "./Customer.css";

function CustomerLoad(props) {
  return (
    <div className="MainWidget">
      <h2>Customer component</h2>
      <h1>Welcome Mr {props.name} </h1>
      <p>We are glad to have you in our store!</p>
    </div>
  );
}

export default CustomerLoad;
