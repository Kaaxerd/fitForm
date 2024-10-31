import logo from './logo.svg';
import './App.css';
import PersonalData from './components/PersonalData';
import ContactInfo from './components/ContactInfo';
import TrainingPreferences from './components/TrainingPreferences';
import DataPost from './components/DataPost';

function App() {
  return (
    <div className="App">
      <div class="header">
        <h1>GimnasiOwO</h1>
      </div>
      <div class="content">
        <DataPost />
      </div>
      <footer>
        <p>Todos los derechos reservados bla bla bla</p>
      </footer>
    </div>
  );
}

export default App;
