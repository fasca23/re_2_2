import './App.css';
import Store from './components/Store'
import products from './components/products';

function App() {
  return (
    <div className="container">
      <div className="background-element"></div>
      <div className="highlight-window">
        <div className='highlight-overlay'></div>
      </div>
      <div className="window">
        <Store products={products}/>
      </div>
    </div>
  );
}

export default App;