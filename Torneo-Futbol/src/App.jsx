import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Equipos from './pages/Equipos';
import Jugadores from './pages/Jugadores';
import Partidos from './pages/Partidos';
import Torneos from './pages/Torneos';
import Estadios from './pages/Estadios';
import ConsultasSQL from './pages/ConsultasSQL';
import AcercaDe from './pages/AcercaDe';
import './App.css';
import bg from './assets/background.png';

function App() {
    return (
        <BrowserRouter>
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                height: '100vh',
                backgroundColor: 'var(--bg)',
                backgroundImage: `url(${bg})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
            }}>
                <div style={{ display: 'flex', flex: 1, overflow: 'hidden' }}>
                    <Sidebar />
                    <main style={{ flex: 1, overflowY: 'auto', padding: '2rem' }}>
                        <Routes>
                            <Route path="/" element={<Navigate to="/equipos" />} />
                            <Route path="/equipos" element={<Equipos />} />
                            <Route path="/jugadores" element={<Jugadores />} />
                            <Route path="/partidos" element={<Partidos />} />
                            <Route path="/torneos" element={<Torneos />} />
                            <Route path="/estadios" element={<Estadios />} />
                            <Route path="/consultas" element={<ConsultasSQL />} />
                            <Route path="/acerca" element={<AcercaDe />} />
                        </Routes>
                    </main>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;