import { useState } from "react";
import { Header, Navbar, Content } from "./components";
import { NavbarContext } from "./context";
import GlobalStyle from "./global.style";

function App() {
  const initialState = false;

  const [navbar, setNavbar] = useState(initialState);

  return (
    <div className="App">
      <GlobalStyle />
      <NavbarContext.Provider value={{ navbar, setNavbar }}>
        <Header />
        <Navbar />
        <Content />
      </NavbarContext.Provider>
    </div>
  );
}

export default App;
