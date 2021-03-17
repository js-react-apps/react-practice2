import Employee from "./Employee/Employee";
import CustomerLoad from "./Customer/Customer";

function App() {
  return (
    <div>
      <h1> Hello React</h1>
      <p>my first React app</p>
      <hr />
      
      <Employee name="Arzun Reddy" />
      <hr />

      <div>
        <CustomerLoad name="Bhagath Singh" />
      </div>
    </div>
  );
}

export default App;
