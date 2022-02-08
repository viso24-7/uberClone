import {BrowserRouter,Routes,Route,Link} from 'react-router-dom'
import UberHome from './pages/home/Home';
import Safety from './pages/safety/Safety';
import Help from './pages/help/Help';
import Register from './pages/register/Register';
import Ride from './pages/ride/Ride';

function App() {
  return (
            <BrowserRouter>
                    <Routes>
                        <Route exact path="/" element={<UberHome />} />
                        <Route path="/sign-up" element={<Register />} />
                        <Route path="/safety" element={<Safety />} />
                        <Route path="/help" element={<Help />} />
                        <Route path="/ride" element={<Ride />} />
                    </Routes>
            </BrowserRouter>
        );
}

export default App;
