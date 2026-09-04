import { Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Photography from "./pages/Photography";
import Cad from "./pages/Cad";
import Blog from "./pages/Blog";
import BlogCategory from "./pages/BlogCategory";
import BlogPost from "./pages/BlogPost";
import NotFound from "./pages/NotFound";
import Page from "./pages/Page";

export default function App() {
    return (
        <div className="app">
            <NavBar />
            {/* <main className="main"> */}
                <Routes>
                    <Route path="/" element={<Page inner={Home} />} />
                    <Route path="/about" element={<Page inner={About} />} />
                    <Route path="/projects" element={<Page inner={Projects} />} />
                    <Route path="/photography" element={<Page inner={Photography} />} />
                    <Route path="/cad" element={<Page inner={Cad} />} />
                    <Route path="/blog" element={<Page inner={Blog} />} />
                    <Route path="/blog/:categorySlug" element={<Page inner={BlogCategory} />} />
                    <Route path="/blog/:categorySlug/:postSlug" element={<Page inner={BlogPost} />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            {/* </main> */}
        </div>
    );
}


