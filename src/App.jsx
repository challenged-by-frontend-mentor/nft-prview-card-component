import "./App.css";
import Card from "./components/Card";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="app-layout">
      <main className="app-layout__main">
        <Card />
      </main>
      <Footer />
    </div>
  );
}

export default App;
