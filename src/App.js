import { BrowserRouter, Route } from "react-router-dom";
import Home from "./routes/Home";
import About from "./routes/About";
import Navigation from "./components/Navigation";
import Detail from "./routes/Detail";
import "./App.css";

function App() {
    return (
        <BrowserRouter>
            <Navigation />
            <Route path="/" exact={true} component={Home} />
            <Route path="/about" component={About} />
            {/* <Route path="/movie-detail" component={Detail} /> */}
            <Route path="/movie/:id" component={Detail} />
        </BrowserRouter>
    );
}

export default App;
