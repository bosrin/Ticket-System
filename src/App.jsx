import { useState } from "react";
import Navbar from "./Navbar/Navbar";
import Banner from "./Banner/Banner";
import Section from "./Section/Section";
import Footer from "./Footer/Footer";

function App() {

  // ✅ Global State
  const [inProgress, setInProgress] = useState(0);
  const [resolved, setResolved] = useState(0);

  return (
    <>
      <Navbar />

      <Banner 
        inProgress={inProgress} 
        resolved={resolved} 
      />

      <Section
        setInProgress={setInProgress}
        setResolved={setResolved}
        inProgress={inProgress}
      />

      {/* ✅ Add Footer Here */}
      <Footer />
    </>
  );
}

export default App;