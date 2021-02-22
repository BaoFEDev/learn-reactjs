import logo from "./logo.svg";
import "./App.css";

function App() {
  let profile = {
    name: "Nguyễn Hoàn Bảo",
    job: "Dev",
  };
  let { name, job } = profile;
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>{name}</p>
        <p>{job}</p>
      </header>
    </div>
  );
}

export default App;
