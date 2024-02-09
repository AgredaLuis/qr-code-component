import "./App.css";
import CodeQR from "./components/CodeQR";

function App() {
  return (
    <main className="h-screen flex flex-col justify-center items-center px-4">
      <CodeQR />
      <div className="attribution font-outfit">
        Challenge by{" "}
        <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
          Frontend Mentor
        </a>
        . Coded by <a href="#">LuisAgreda</a>.
      </div>
    </main>
  );
}

export default App;
