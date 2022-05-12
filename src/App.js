import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Context from './components/Context';
import FragmentDemo from './components/FragmentDemo';
import LifecycleA from './components/LifecycleA';
import LiftingState from './components/LiftingState';
import NameList from './components/NameList';
import Portal from './components/Portal';
import Redux from './components/Redux';
import Ref from './components/Ref';
import UseContext from './components/UseContext';


// Data source
import persons from './public/persons'

function App() {
  return (
    <div className="App container">
      <NameList persons={persons}/> {/* 17 */}
      <LifecycleA /> {/* 23, 24 */}
      <FragmentDemo /> {/* 25 */}
      <Ref/>
      <Portal/>
      <LiftingState/>      
      <Context/>
      <Redux/>
      <UseContext/>
    </div>
  );
}

export default App;
