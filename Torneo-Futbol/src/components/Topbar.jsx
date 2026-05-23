function Topbar() {
    return (
        <header style={{
            background: 'var(--surface)',
            borderBottom: '1px solid var(--border)',
            padding: '0 2rem',
            height: '56px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexShrink: 0,
        }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <span style={{ fontSize: '1.5rem' }}>⚽</span>
                <span style={{
                    fontFamily: 'Orbitron, sans-serif',
                    fontWeight: 900,
                    fontSize: '1.1rem',
                    color: 'var(--green)',
                    letterSpacing: '0.05em'
                }}>
          TORNEO FÚTBOL
        </span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
        <span style={{
            background: 'rgba(34,197,94,0.1)',
            border: '1px solid var(--green)',
            color: 'var(--green)',
            padding: '0.3rem 0.9rem',
            borderRadius: '999px',
            fontSize: '0.8rem',
            fontWeight: 600,
            letterSpacing: '0.05em'
        }}>
          🏆 Mundial FIFA 2014
        </span>
                <div style={{
                    width: 36, height: 36,
                    borderRadius: '50%',
                    background: 'var(--green)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontWeight: 700, fontSize: '0.85rem', color: '#000'
                }}>AD</div>
            </div>
        </header>
    );
}

export default Topbar;