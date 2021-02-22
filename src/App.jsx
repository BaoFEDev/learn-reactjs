import logo from "./logo.svg";
import "./App.css";

function App() {
  let profile = {
    name: "Nguyễn Hoàn Bảo",
    job: "Dev",
    age: 24,
  };
  let { name, job, age } = profile;
  let profileArr = ["Nguyễn Hoàn Bảo", "Dev", 24];
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <ul>
          {profileArr.map((i) => (
            <li>{i}</li>
          ))}
        </ul>
      </header>
    </div>
  );
}

export default App;
