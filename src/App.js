import { Header, Navbar, Content } from "./components";
import GlobalStyle from "./global.style";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Header />
      <Navbar />
      <Content />
    </div>
  );
}

export default App;
