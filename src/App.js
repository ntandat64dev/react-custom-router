import About from './components/About';
import Header from './components/Header';
import Home from './components/Home';
import Products from './components/Products';
import Route from './components/Route';

export default function App() {
    return (
        <>
            <Header />
            <Route path="/">
                <Home />
            </Route>
            <Route path="/products">
                <Products />
            </Route>
            <Route path="/about">
                <About />
            </Route>
        </>
    )
}