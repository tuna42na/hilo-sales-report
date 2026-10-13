import HiloDaily from "./components/HiloDaily";
import Final from "./components/Final";
import { Provider } from "react-redux";
import { Routes, Route } from "react-router-dom";
import { store } from "./store";

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
