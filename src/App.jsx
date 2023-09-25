import { Routes, Route, Navigate } from 'react-router-dom';
import ListsPatients from './components/ListsPatients'
import CreatePatient from './components/CreatePatient'
import EditPatient from './components/EditPatient';

function App() {
  return (
    <>
    <Routes>
        <Route path="/" Component={ListsPatients} />
        <Route path="/create/patient" Component={CreatePatient} />
        <Route path="/edit/patient" Component={EditPatient} />
        <Route path='/*' element={<Navigate to="/"></Navigate>}></Route>
    </Routes>
    </>
  );
}

export default App;
