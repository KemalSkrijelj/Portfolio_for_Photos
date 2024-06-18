import React from "react";
//Import styled from styled components
import GlobalStyle from "./components/GlobalStyle";
//import pages
import AboutUs from "./pages/AboutUs";

function App() {
  return (
   <div className="App">
    <GlobalStyle />
    <AboutUs />
   </div>
  );
}

export default App;