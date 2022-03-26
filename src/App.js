import './App.css';
import Collection from './components/Collection/Collection';
import Extra from './components/Extra/Extra';
import Header from './components/Header/Header';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Collection></Collection>
      <Extra></Extra>
    </div>
  );
}

export default App;
