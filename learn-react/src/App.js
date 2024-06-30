import "./App.css";

const App = () => {
  const name = "manyembua";
  const isNameShowing = false;
  return (
    <div className="App">
      <h1>Ndahitumye sha nubw nkiri {isNameShowing ? name : "Djibuji"}</h1>
    </div>
  );
};

export default App;
