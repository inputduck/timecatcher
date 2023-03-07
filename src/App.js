import './App.css';
// import Controls from './components/Controls';
import CurrentTask from './components/CurrentTask';
import FooterControls from './components/FooterControls';
import SavedTaskList from './components/SavedTaskList';
import Timer from './components/Timer';

function App() {
  return (
    <div className="container">
      <CurrentTask />
      <Timer />
      {/* <Controls /> */}
      
      <hr/>
      <SavedTaskList />
      <FooterControls />
    </div>
  );
}

export default App;
