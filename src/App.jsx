import logo from "./logo.svg";
import "./App.css";

function App() {
  let profile = {
    name: "Nguyễn Hoàn Bảo",
    job: "Dev",
    age: 24,
  };
  let { name, job, age } = profile;
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>{name}</p>
        <p>{job}</p>
        <p>{age}</p>
      </header>
    </div>
  );
}

export default App;
