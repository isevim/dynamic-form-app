import { BrowserRouter, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import FormDetail from './screens/FormDetailScreen/FormDetailScreen';
import MainFormScreen from './screens/MainFormScreen/MainFormScreen';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainFormScreen />} />
        <Route path="/form/:formName" element={<FormDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
