import React from "react";
import  HiloDaily  from "./components/HiloDaily";
import Final from "./components/Final";
import { Provider } from "react-redux";
import { createStore } from "redux";
import rootReducer from "./reducers";
import { Switch, Route } from "react-router-dom";


const store = createStore(rootReducer);

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Switch>
        <Route path="/" component={HiloDaily} exact />
        <Route path="/final" component={Final} exact />
        </Switch>
      </div>
    </Provider>
  );
}

export default App;
