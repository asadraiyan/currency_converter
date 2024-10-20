import "./App.css";
import CurrencyConverter from "./components/CurrencyConverter";

function App() {
  return (
    <>
      <div className="flex flex-col justify-center items-center min-h-screen bg-gray-100">
        <div className="container">
          <CurrencyConverter />
        </div>
      </div>
    </>
  );
}

export default App;
