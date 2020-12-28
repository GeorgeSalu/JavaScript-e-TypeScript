import './App.css';
import { PomodoroTimer } from './components/pomodoro-timer';

function App(): JSX.Element {
  return (
    <div className="App">
      <h1>Ola mundo</h1>
      <PomodoroTimer defaultPomodoroTime={150} />
    </div>
  );
}

export default App;
