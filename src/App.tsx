import Sidebar from "./components/Sidebar";
import Intro from "./components/Intro";
import Services from "./components/Services";
import DataTypes from "./components/DataTypes";
import Capabilities from "./components/Capabilities";
import ContactCTA from "./components/ContactCTA";
import CursorSparkles from "./components/CursorSparkles";

import "./assets/styles/App.scss";

function App() {
  return (
    <div className="portfolio">
      <CursorSparkles />
	  <Sidebar />

      <main className="portfolio-main">
        <Intro />
        <Services />
        <DataTypes />
        <Capabilities />
        <ContactCTA />
      </main>
    </div>
  );
}

export default App;