function ConsultasSQL() {
    return (
        <div>
            <div className="mb-6">
                <h2 style={{ fontFamily: 'Orbitron, sans-serif', fontSize: '1.4rem', color: 'var(--green)' }}>Consultas SQL</h2>
                <p style={{ color: 'var(--muted)', fontSize: '0.85rem', marginTop: '0.25rem' }}>Funciones y procedimientos implementados en la base de datos.</p>
            </div>

            <div style={{ display: 'grid', gap: '1.5rem' }}>

                {/* Trigger */}
                <div style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: '12px', padding: '1.5rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                        <span style={{ fontSize: '1.5rem' }}>⚡</span>
                        <div>
                            <div style={{ fontSize: '0.7rem', color: '#f59e0b', fontWeight: 700, letterSpacing: '0.1em' }}>TRIGGER</div>
                            <div style={{ fontFamily: 'Orbitron, sans-serif', fontSize: '0.95rem' }}>validar_equipos_partido</div>
                        </div>
                    </div>
                    <p style={{ fontSize: '0.85rem', color: 'var(--muted)', marginBottom: '1rem' }}>
                        Se ejecuta automaticamente antes de insertar un partido. Verifica que el equipo local y el visitante no sean el mismo. Si lo son, lanza un error y cancela la operacion.
                    </p>
                    <div style={{
                        background: 'var(--bg)', border: '1px solid var(--border)', borderRadius: '8px',
                        padding: '1rem', fontFamily: 'monospace', fontSize: '0.8rem', color: '#86efac', lineHeight: 1.7
                    }}>
                        <span style={{ color: '#60a5fa' }}>BEFORE INSERT ON</span> partido<br />
                        <span style={{ color: '#60a5fa' }}>IF</span> NEW.id_equipo_local = NEW.id_equipo_visitante <span style={{ color: '#60a5fa' }}>THEN</span><br />
                        &nbsp;&nbsp;<span style={{ color: '#f87171' }}>SIGNAL SQLSTATE</span> '45000'<br />
                        &nbsp;&nbsp;<span style={{ color: '#f87171' }}>SET MESSAGE_TEXT</span> = 'El equipo local y visitante no pueden ser el mismo';<br />
                        <span style={{ color: '#60a5fa' }}>END IF</span>;
                    </div>
                </div>

                {/* Funcion */}
                <div style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: '12px', padding: '1.5rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                        <span style={{ fontSize: '1.5rem' }}>🔢</span>
                        <div>
                            <div style={{ fontSize: '0.7rem', color: '#3b82f6', fontWeight: 700, letterSpacing: '0.1em' }}>FUNCION</div>
                            <div style={{ fontFamily: 'Orbitron, sans-serif', fontSize: '0.95rem' }}>partidos_jugados(id_equipo, id_torneo)</div>
                        </div>
                    </div>
                    <p style={{ fontSize: '0.85rem', color: 'var(--muted)', marginBottom: '1rem' }}>
                        Retorna el numero total de partidos que un equipo ha jugado en un torneo especifico, contando tanto los partidos como local como visitante.
                    </p>
                    <div style={{
                        background: 'var(--bg)', border: '1px solid var(--border)', borderRadius: '8px',
                        padding: '1rem', fontFamily: 'monospace', fontSize: '0.8rem', color: '#86efac', lineHeight: 1.7
                    }}>
                        <span style={{ color: '#60a5fa' }}>RETURNS</span> INT<br />
                        <span style={{ color: '#60a5fa' }}>SELECT COUNT</span>(*) <span style={{ color: '#60a5fa' }}>INTO</span> total<br />
                        <span style={{ color: '#60a5fa' }}>FROM</span> partido<br />
                        <span style={{ color: '#60a5fa' }}>WHERE</span> id_torneo = p_id_torneo<br />
                        <span style={{ color: '#60a5fa' }}>AND</span> (id_equipo_local = p_id_equipo<br />
                        &nbsp;&nbsp;<span style={{ color: '#60a5fa' }}>OR</span> id_equipo_visitante = p_id_equipo);
                    </div>
                </div>

                {/* Procedimiento */}
                <div style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: '12px', padding: '1.5rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                        <span style={{ fontSize: '1.5rem' }}>⚙️</span>
                        <div>
                            <div style={{ fontSize: '0.7rem', color: 'var(--green)', fontWeight: 700, letterSpacing: '0.1em' }}>PROCEDIMIENTO</div>
                            <div style={{ fontFamily: 'Orbitron, sans-serif', fontSize: '0.95rem' }}>partidos_por_torneo(id_torneo)</div>
                        </div>
                    </div>
                    <p style={{ fontSize: '0.85rem', color: 'var(--muted)', marginBottom: '1rem' }}>
                        Dado un ID de torneo, retorna todos los partidos con nombre de equipos local y visitante, estadio y fecha. Ejecutable desde la pagina de Partidos.
                    </p>
                    <div style={{
                        background: 'var(--bg)', border: '1px solid var(--border)', borderRadius: '8px',
                        padding: '1rem', fontFamily: 'monospace', fontSize: '0.8rem', color: '#86efac', lineHeight: 1.7
                    }}>
                        <span style={{ color: '#60a5fa' }}>SELECT</span> p.id_partido, p.fecha, p.marcador,<br />
                        &nbsp;&nbsp;e_local.nombre <span style={{ color: '#60a5fa' }}>AS</span> equipo_local,<br />
                        &nbsp;&nbsp;e_visit.nombre <span style={{ color: '#60a5fa' }}>AS</span> equipo_visitante,<br />
                        &nbsp;&nbsp;est.nombre <span style={{ color: '#60a5fa' }}>AS</span> estadio<br />
                        <span style={{ color: '#60a5fa' }}>FROM</span> partido p<br />
                        <span style={{ color: '#60a5fa' }}>WHERE</span> p.id_torneo = p_id_torneo;
                    </div>
                </div>

            </div>
        </div>
    );
}

export default ConsultasSQL;