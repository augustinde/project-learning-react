import logo from './logo.svg';
import './App.css';
import Content from "./Components/Content/Content";
import ThemeContextProvider from "./Context/ThemeContext";
import BtnToggle from "./Components/BtnToggle/BtnToggle";
import Titre from "./Components/Titre/Titre";



function App() {
  return (
    <div className="App">
        <ThemeContextProvider>
            <Content/>
        </ThemeContextProvider>
        <Titre/>
    </div>
  );
}

export default App;
