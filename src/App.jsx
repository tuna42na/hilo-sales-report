import React from "react";
import HiloDaily from "./components/HiloDaily";
import Final from "./components/Final";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./reducers";
import { Routes, Route } from "react-router-dom";

const store = configureStore({ reducer: rootReducer });

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Routes>
          <Route path="/" element={<HiloDaily />} />
          <Route path="/final" element={<Final />} />
        </Routes>
      </div>
    </Provider>
  );
}

export default App;
