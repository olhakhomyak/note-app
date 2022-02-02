import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Main from './components/Main'
import { NotesProvider } from './context/NotesContext';

function App() {
  return (
    <BrowserRouter>
      <NotesProvider>
        <div className="App">
          <Main />
        </div>
      </NotesProvider>
    </BrowserRouter>
  );
}

export default App;
