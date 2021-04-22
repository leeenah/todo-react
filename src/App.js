import NewItem from "./NewItem.js";

import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>todo list:</h1>
      <NewItem />
      <NewItem fruit="pear" />
    </div>
  );
}

export default App;
