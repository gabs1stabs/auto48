import Fpage from './components/Fpage';
import { Route, Routes ,Router } from 'react-router-dom';
import Navbar from './components/Navbar';

function Mpage() {
  return (
      <>
          <Navbar />
      </>
  );
}
function App() {
  return (
          <Routes>
              <Route path="/" element={<Fpage />} />
              <Route path="/*" element={<Mpage />} />
          </Routes>
  );
}

export default App;
