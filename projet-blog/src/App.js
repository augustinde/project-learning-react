import './App.css';
import Navbar from "./Components/navbar/Navbar";
import Home from "./Containers/Home/Home";
import {Route, Routes} from "react-router-dom";
import AddArticle from "./Containers/AddArticle/AddArticle";
import Article from "./Containers/Article/Article";
import Contact from "./Containers/Contact/Contact";

function App() {
    return (
        <>
            <Navbar/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/ecrire" element={<AddArticle/>}/>
                <Route path="/contact" element={<Contact/>}/>
                <Route path="/article/:slug" element={<Article/>}/>
            </Routes>
        </>
    );
}

export default App;
