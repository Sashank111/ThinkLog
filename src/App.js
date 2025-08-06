import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import "./App.css";
import Header from "./Components/ThinkLog/Header";
import Routing from "./Components/ThinkLog/Routing";
import Footer from "./Components/ThinkLog/Footer";

function App() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Header />

      <main className="flex-fill">
        <Routing />
      </main>

      <Footer />
    </div>
  );
}

export default App;
