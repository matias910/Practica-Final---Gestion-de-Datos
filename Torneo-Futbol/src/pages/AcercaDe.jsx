function AcercaDe() {
    const integrantes = [
        { nombre: 'Miguel Angel Jimenez Gomez', rol: 'Desarrollo & Modelado' },
        { nombre: 'Samuel Valencia Montoya', rol: 'Desarrollo & Base de Datos' },
        { nombre: 'Matias Zapata Rojas', rol: 'Desarrollo & Backend' },
    ];

    return (
        <div>
            <div className="mb-6">
                <h2 style={{ fontFamily: 'Orbitron, sans-serif', fontSize: '1.4rem', color: 'var(--green)' }}>Acerca de</h2>
                <p style={{ color: 'var(--muted)', fontSize: '0.85rem', marginTop: '0.25rem' }}>Informacion del proyecto y el equipo de desarrollo.</p>
            </div>

            <div style={{ display: 'grid', gap: '1.5rem', gridTemplateColumns: '1fr 1fr' }}>

                {/* Proyecto */}
                <div style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: '12px', padding: '1.5rem', gridColumn: '1 / -1' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                        <span style={{ fontSize: '2.5rem' }}>⚽</span>
                        <div>
                            <div style={{ fontFamily: 'Orbitron, sans-serif', fontSize: '1.2rem', color: 'var(--green)' }}>Torneo Futbol</div>
                            <div style={{ color: 'var(--muted)', fontSize: '0.85rem' }}>Sistema de Gestion de Datos — Entrega Final</div>
                        </div>
                    </div>
                    <p style={{ fontSize: '0.9rem', color: 'var(--muted)', lineHeight: 1.7 }}>
                        Aplicacion fullstack para la gestion de torneos de futbol. Permite administrar equipos, jugadores y partidos con operaciones CRUD completas,
                        implementando triggers, funciones y procedimientos almacenados en MariaDB. Desarrollado con React + Vite en el frontend y Node.js + Express en el backend.
                    </p>
                </div>

                {/* Stack */}
                <div style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: '12px', padding: '1.5rem' }}>
                    <div style={{ fontFamily: 'Orbitron, sans-serif', fontSize: '0.9rem', color: 'var(--green)', marginBottom: '1rem' }}>Stack Tecnologico</div>
                    {[
                        { label: 'Frontend', value: 'React + Vite + Tailwind' },
                        { label: 'Backend', value: 'Node.js + Express' },
                        { label: 'Base de datos', value: 'MariaDB (MySQL)' },
                        { label: 'HTTP Client', value: 'Axios' },
                        { label: 'Router', value: 'React Router DOM' },
                    ].map(item => (
                        <div key={item.label} style={{ display: 'flex', justifyContent: 'space-between', padding: '0.5rem 0', borderBottom: '1px solid var(--border)', fontSize: '0.85rem' }}>
                            <span style={{ color: 'var(--muted)' }}>{item.label}</span>
                            <span style={{ color: 'var(--text)', fontWeight: 600 }}>{item.value}</span>
                        </div>
                    ))}
                </div>

                {/* Integrantes */}
                <div style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: '12px', padding: '1.5rem' }}>
                    <div style={{ fontFamily: 'Orbitron, sans-serif', fontSize: '0.9rem', color: 'var(--green)', marginBottom: '1rem' }}>Integrantes</div>
                    {integrantes.map((p, i) => (
                        <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', padding: '0.6rem 0', borderBottom: '1px solid var(--border)' }}>
                            <div style={{
                                width: 34, height: 34, borderRadius: '50%', background: 'rgba(34,197,94,0.15)',
                                border: '1px solid rgba(34,197,94,0.3)', display: 'flex', alignItems: 'center',
                                justifyContent: 'center', fontWeight: 700, fontSize: '0.8rem', color: 'var(--green)', flexShrink: 0
                            }}>{p.nombre.charAt(0)}</div>
                            <div>
                                <div style={{ fontSize: '0.85rem', fontWeight: 600 }}>{p.nombre}</div>
                                <div style={{ fontSize: '0.75rem', color: 'var(--muted)' }}>{p.rol}</div>
                            </div>
                        </div>
                    ))}
                    <div style={{ marginTop: '1rem', fontSize: '0.8rem', color: 'var(--muted)' }}>
                        Universidad EAFIT — Docente: Bibiana Maria Rodriguez Castrillon
                    </div>
                </div>

            </div>
        </div>
    );
}

export default AcercaDe;