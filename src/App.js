import React from "react";
import tunalogo from "./tunalogo.svg";
import { HiloDaily } from "./components/HiloDaily";
import { Provider } from "react-redux";
import { createStore } from "redux";
import rootReducer from "./reducers";

const store = createStore(rootReducer);

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <HiloDaily />
        <header className="App-header">
          <img src={tunalogo} className="App-logo" alt="logo" />
          <p>HiLo Sales App</p>
        </header>
      </div>
    </Provider>
  );
}

export default App;
