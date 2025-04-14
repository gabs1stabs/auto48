import PressHere from './Components/PressHere';
import Navbar from './Components/Navbar';
import { Navigate, Route, Routes } from 'react-router-dom';
import Acceuil from './Components/Acceuil'
import Apropos from './Components/Apropos'
import Services from './Components/Services'
import Nosprojets from './Components/Nosprojets'
import Gallery from './Components/Gallery'
import Contact from './Components/Contact'

function Mainpage() {
  return (
      <>
          <Navbar />
          <Routes>
          <Route path="/" element={<Navigate to="/Acceuil" replace />} />
            <Route path="/Acceuil" element={<Acceuil /> }></Route>
            <Route path="/Apropos" element={<Apropos />}></Route>
            <Route path="/Services" element={<Services />}></Route>
            <Route path="/Nosprojets" element={<Nosprojets />}></Route>
            <Route path="/Gallery" element={<Gallery />}></Route>
            <Route path="/Contact" element={<Contact />}></Route>
          </Routes>
      </>
  );
}
function App() {
  return (
          <Routes>
              <Route path="/" element={<PressHere />} />
              <Route path="/*" element={<Mainpage />} />
          </Routes>
  );
}

export default App;
