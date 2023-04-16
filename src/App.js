import { BrowserRouter,Routes,Route } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/home';
import Navbar from './components/navbar';
import Tournments from './components/tournments';
import Partcipants from './components/partcipants';
import CreateTour from './components/createTour';
import Edit from './components/edit';
import View from './components/view';
import CreatePart from './components/createPart';
import ViewPart from './components/viewPart';
import EditPart from './components/ed';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/tournments" element={<Tournments/>} />
        <Route path="/partcipants" element={<Partcipants/>} />
        <Route path="/create-tournment" element={<CreateTour/>} />
        <Route path="/create-partcipants" element={<CreatePart/>} />
        <Route path="/edit/:id" element={<Edit/>}/>
        <Route path="/tournments/:id" element={<View/>}/>
        <Route path="/partcipants/:id" element={<ViewPart/>}/>
        <Route path="/ed/:id" element={<EditPart/>} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
