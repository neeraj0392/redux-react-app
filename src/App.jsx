import logo from "./logo.svg";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { deposit, withdraw } from "./Redux/action";
import Cart from "./Components/Cart";
import NavBar from "./Components/NavBar";
import Products from "./Components/Products";

export default function App() {
  return (
    <div>
      <NavBar />
      <div className="my-0 mx-auto p-4 max-w-[140rem] md:p-12">
        <Products />
      </div>
      <Cart />
    </div>
  );
}

export function ReduxDemoApp() {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  // console.log(state);
  console.log("ReduxDemoApp render..");
  return (
    <div className="App">
      <h1> React Redux Demo</h1>
      <h3>Balance: {state.accountBalance}</h3>
      <button onClick={() => dispatch(deposit(100))}>Deposit 100 </button>
      <button onClick={() => dispatch(withdraw(50))}>Withdraw 50</button>
    </div>
  );
}
