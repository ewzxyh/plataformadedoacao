import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import Container from "./components/layout/Container";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Home from "./components/pages/Home";
import Login from "./components/pages/Login";
import Register from "./components/pages/Register";
import Configuracoes from "./components/pages/Configuracoes";
import { UserProvider } from './services/UserContext';

interface LayoutProps {
  children: JSX.Element;
}

const Layout = (props: LayoutProps) => {
  return (
    <Container customClass="min-height">
      {React.cloneElement(props.children)}
    </Container>
  );
}

const AppContent = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState(localStorage.getItem('username') || null);

  useEffect(() => {
    if (username) {
      localStorage.setItem('username', username);
    }
  }, [username]);

  const handleLogout = () => {
    setUsername(null);
    localStorage.removeItem('username');
    navigate('/');
  };

  return (
    <UserProvider>
      <Navbar username={username || ''} handleLogout={handleLogout} />
      <Routes>
        <Route path="/" element={<Layout><Home /></Layout>} />
        <Route path="/login" element={<Login setUsername={setUsername} />} />
        <Route path="/register" element={<Register />} />
        <Route path='/configuracoes' element={<Layout><Configuracoes username={username} /></Layout>} />
      </Routes>
      <Footer />
    </UserProvider>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;