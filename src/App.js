import React from "react";
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
      </div>
    </Provider>
  );
}

export default App;
