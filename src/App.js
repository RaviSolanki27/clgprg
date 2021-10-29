import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import NaavBar from './components/NaavBar';
import { BrowserRouter, Redirect, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';




function App() {
  return (
    <BrowserRouter>

      <NaavBar />
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/contact" component={Contact} />
      <Redirect to='/' />


    </BrowserRouter>
  );
}

export default App;
