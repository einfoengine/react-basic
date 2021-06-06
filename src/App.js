import './App.css';
import FragmentDemo from './components/FragmentDemo';
import LifecycleA from './components/LifecycleA';
import NameList from './components/NameList';
import Ref from './components/Ref';

// Data source
import persons from './public/persons'

function App() {
  return (
    <div className="App">
      <NameList persons={persons}/> {/* 17 */}
      <LifecycleA /> {/* 23, 24 */}
      <FragmentDemo /> {/* 25 */}
      <Ref/>
    </div>
  );
}

export default App;
