import React from 'react';
import { Routes, Route} from "react-router-dom";

const Home = React.lazy(() => import('./pages/LandingPages/Home'));
const Forum = React.lazy(() => import('./pages/NormalPages/Forum/Forum'));
const NormalNavbar = React.lazy(() => import('./components/NormalNavbar'));
const Footer = React.lazy(() => import('./components/Footer'));



function App() {
  return (
      <div>
        <NormalNavbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/forum" element={<Forum />} />
        </Routes>
        <Footer />
      </div>
  );
}

export default App;
