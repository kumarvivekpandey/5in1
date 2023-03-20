import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
       <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} />
    </div>
  );
}

export default App;
