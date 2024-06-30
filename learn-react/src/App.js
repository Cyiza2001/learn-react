import "./App.css";
const Person = (props) => {
  return (
    <>
      <h1>Name: {props.name}</h1>
      <h2>Last Name:{props.lastName}</h2>
      <h6>Age: {props.age}</h6>
    </>
  );
};

const App = () => {
  return (
    <div className="App">
      <Person name="djibuji" lastName="mabwa" age={21} />
      <Person name="sumbirigi" lastName="gikwavu" age={24} />
    </div>
  );
};

export default App;
