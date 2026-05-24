import { NavLink } from 'react-router-dom';

const links = [
    { to: '/equipos',   icon: '👥', label: 'Equipos' },
    { to: '/jugadores', icon: '👤', label: 'Jugadores' },
    { to: '/partidos',  icon: '📅', label: 'Partidos' },
    { to: '/estadios', icon: '🏟️', label: 'Estadios'},
    { to: '/torneos',   icon: '🏆', label: 'Torneos' },
    { to: '/consultas', icon: '🗄️',  label: 'Consultas SQL' },
    { to: '/acerca',    icon: 'ℹ️',  label: 'Acerca de' },
];

function Sidebar() {
    return (
        <aside style={{
            width: '220px',
            background: 'var(--surface)',
            borderRight: '1px solid var(--border)',
            display: 'flex',
            flexDirection: 'column',
            flexShrink: 0,
            overflowY: 'auto',
        }}>
            {/* Tournament card */}
            <div style={{
                margin: '1rem',
                borderRadius: '10px',
                overflow: 'hidden',
                background: 'linear-gradient(135deg, #0a2e1a 0%, #0f4a2a 100%)',
                border: '1px solid rgba(34,197,94,0.3)',
                padding: '1.25rem 1rem',
                position: 'relative',
            }}>
                <div style={{ fontSize: '0.7rem', color: 'var(--green)', fontWeight: 700, letterSpacing: '0.1em', opacity: 0.8 }}>
                    TORNEOS FUTBOL
                </div>
                <div style={{
                    fontFamily: 'Orbitron, sans-serif',
                    fontSize: '2rem',
                    fontWeight: 900,
                    color: 'var(--green)',
                    lineHeight: 1,
                    marginTop: '0.1rem',
                }}></div>
                <div style={{
                    fontFamily: 'Rajdhani, sans-serif',
                    fontSize: '1.1rem',
                    fontStyle: 'italic',
                    color: '#86efac',
                    fontWeight: 600,
                }}>🏆🏆🏆</div>
                <div style={{
                    position: 'absolute', right: '-8px', bottom: '-8px',
                    fontSize: '3.5rem', opacity: 0.15,
                }}>⚽</div>
            </div>

            {/* Nav links */}
            <nav style={{ padding: '0.5rem 0.75rem', flex: 1 }}>
                {links.map(({ to, icon, label }) => (
                    <NavLink
                        key={to}
                        to={to}
                        className={({ isActive }) => `sidebar-link${isActive ? ' active' : ''}`}
                    >
                        <span style={{ fontSize: '1rem' }}>{icon}</span>
                        {label}
                    </NavLink>
                ))}
            </nav>
        </aside>
    );
}

export default Sidebar;