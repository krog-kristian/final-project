import './App.css';
import { useMediaQuery } from 'react-responsive';
import Nav from './components/Nav';
import AppContext from './components/AppContext';
import RecordForm from './pages/RecordForm';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from 'react-router-dom';
import RecordsView from './pages/Records';
import UserHome from './pages/UserHome';

function App() {
  const isLargeScreen = useMediaQuery({
    query: '(min-width: 900px)'
  });

  const appState = { isLargeScreen }

  return (
    <AppContext.Provider value={appState}>
      <div className="App">
        <Routes>
          <Route path='/' element={<Nav />}>
            <Route index element={<UserHome />}/>
            <Route path='newrecord' element={<RecordForm />} />
            <Route path='records' element={<RecordsView />} />
          </Route>
        </Routes>
      </div>
    </AppContext.Provider>
  );
}

export default App;
