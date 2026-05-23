import { useState, useEffect } from 'react';
import axios from 'axios';

const API = 'http://localhost:5000/api';

function Partidos() {
    const [partidos, setPartidos] = useState([]);
    const [equipos, setEquipos] = useState([]);
    const [estadios, setEstadios] = useState([]);
    const [torneos, setTorneos] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [editando, setEditando] = useState(null);
    const [procedimiento, setProcedimiento] = useState(null);
    const [idTorneoProc, setIdTorneoProc] = useState('');
    const [form, setForm] = useState({
        fecha: '', duracion: '', marcador: '', num_espectadores: '',
        id_estadio: '', id_equipo_local: '', id_equipo_visitante: '', id_torneo: ''
    });

    const cargar = () => {
        axios.get(`${API}/partidos`).then(r => setPartidos(r.data));
        axios.get(`${API}/equipos`).then(r => setEquipos(r.data));
        axios.get(`${API}/estadios`).then(r => setEstadios(r.data));
        axios.get(`${API}/torneos`).then(r => setTorneos(r.data));
    };
    useEffect(() => { cargar(); }, []);

    const abrirCrear = () => {
        setEditando(null);
        setForm({ fecha: '', duracion: '', marcador: '', num_espectadores: '', id_estadio: '', id_equipo_local: '', id_equipo_visitante: '', id_torneo: '' });
        setShowModal(true);
    };

    const abrirEditar = (p) => {
        setEditando(p);
        setForm({
            fecha: p.fecha?.split('T')[0], duracion: p.duracion, marcador: p.marcador,
            num_espectadores: p.num_espectadores, id_estadio: p.id_estadio,
            id_equipo_local: p.id_equipo_local, id_equipo_visitante: p.id_equipo_visitante, id_torneo: p.id_torneo
        });
        setShowModal(true);
    };

    const guardar = () => {
        const action = editando
            ? axios.put(`${API}/partidos/${editando.id_partido}`, form)
            : axios.post(`${API}/partidos`, form);
        action
            .then(() => { cargar(); setShowModal(false); })
            .catch(e => alert(e.response?.data?.sqlMessage || 'Error al guardar'));
    };

    const eliminar = (id) => {
        if (confirm('¿Eliminar este partido?')) axios.delete(`${API}/partidos/${id}`).then(cargar);
    };

    const ejecutarProcedimiento = () => {
        axios.get(`${API}/procedimiento/partidos-torneo/${idTorneoProc}`)
            .then(r => setProcedimiento(r.data))
            .catch(() => setProcedimiento([]));
    };

    return (
        <div>
            <div className="flex items-center justify-between mb-6">
                <div>
                    <h2 style={{ fontFamily: 'Orbitron, sans-serif', fontSize: '1.4rem', color: 'var(--green)' }}>Partidos</h2>
                    <p style={{ color: 'var(--muted)', fontSize: '0.85rem', marginTop: '0.25rem' }}>Encuentros del torneo.</p>
                </div>
                <button onClick={abrirCrear} style={{
                    background: 'var(--green)', color: '#000', border: 'none',
                    padding: '0.55rem 1.2rem', borderRadius: '8px', fontWeight: 700, cursor: 'pointer', fontSize: '0.9rem'
                }}>+ Nuevo partido</button>
            </div>

            <div style={{ background: 'var(--surface)', borderRadius: '12px', border: '1px solid var(--border)', overflow: 'hidden' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                    <thead>
                    <tr style={{ borderBottom: '1px solid var(--border)' }}>
                        {['#', 'Fecha', 'Local', 'Visitante', 'Marcador', 'Estadio', 'Torneo', 'Acciones'].map(h => (
                            <th key={h} style={{
                                padding: '0.85rem 1rem', textAlign: 'left',
                                fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.08em',
                                color: 'var(--green)', textTransform: 'uppercase'
                            }}>{h}</th>
                        ))}
                    </tr>
                    </thead>
                    <tbody>
                    {partidos.map((p, i) => (
                        <tr key={p.id_partido} style={{ borderBottom: '1px solid var(--border)', transition: 'background 0.15s' }}
                            onMouseEnter={ev => ev.currentTarget.style.background = 'var(--surface2)'}
                            onMouseLeave={ev => ev.currentTarget.style.background = 'transparent'}>
                            <td style={{ padding: '0.8rem 1rem', color: 'var(--muted)', fontSize: '0.85rem' }}>{i + 1}</td>
                            <td style={{ padding: '0.8rem 1rem', color: 'var(--muted)' }}>{p.fecha?.split('T')[0]}</td>
                            <td style={{ padding: '0.8rem 1rem', fontWeight: 600 }}>{p.equipo_local}</td>
                            <td style={{ padding: '0.8rem 1rem', fontWeight: 600 }}>{p.equipo_visitante}</td>
                            <td style={{ padding: '0.8rem 1rem' }}>
                                {p.marcador ? (
                                    <span style={{
                                        background: 'rgba(34,197,94,0.1)', color: 'var(--green)',
                                        border: '1px solid rgba(34,197,94,0.3)',
                                        padding: '0.2rem 0.6rem', borderRadius: '6px', fontWeight: 700, fontSize: '0.85rem'
                                    }}>{p.marcador}</span>
                                ) : '—'}
                            </td>
                            <td style={{ padding: '0.8rem 1rem', color: 'var(--muted)' }}>{p.estadio}</td>
                            <td style={{ padding: '0.8rem 1rem', color: 'var(--muted)' }}>{p.torneo}</td>
                            <td style={{ padding: '0.8rem 1rem' }}>
                                <button onClick={() => abrirEditar(p)} style={{
                                    background: 'rgba(234,179,8,0.15)', color: '#eab308', border: '1px solid rgba(234,179,8,0.3)',
                                    padding: '0.3rem 0.7rem', borderRadius: '6px', cursor: 'pointer', fontSize: '0.8rem', marginRight: '0.4rem'
                                }}>Editar</button>
                                <button onClick={() => eliminar(p.id_partido)} style={{
                                    background: 'rgba(239,68,68,0.15)', color: '#ef4444', border: '1px solid rgba(239,68,68,0.3)',
                                    padding: '0.3rem 0.7rem', borderRadius: '6px', cursor: 'pointer', fontSize: '0.8rem'
                                }}>Eliminar</button>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>

            {/* Procedimiento */}
            <div style={{
                marginTop: '1.5rem', background: 'var(--surface)', border: '1px solid var(--border)',
                borderRadius: '12px', padding: '1.5rem'
            }}>
                <div style={{ fontSize: '0.7rem', color: 'var(--green)', fontWeight: 700, letterSpacing: '0.1em', marginBottom: '0.25rem' }}>PROCEDIMIENTO SQL</div>
                <div style={{ fontFamily: 'Orbitron, sans-serif', fontSize: '1rem', marginBottom: '0.5rem' }}>partidos_por_torneo</div>
                <p style={{ fontSize: '0.8rem', color: 'var(--muted)', marginBottom: '1rem' }}>Trae todos los partidos de un torneo con sus equipos y estadio.</p>
                <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
                    <input placeholder="ID Torneo" value={idTorneoProc} onChange={e => setIdTorneoProc(e.target.value)}
                           style={{ padding: '0.5rem 0.75rem', background: 'var(--bg)', border: '1px solid var(--border)', borderRadius: '8px', color: 'var(--text)', width: '140px', fontSize: '0.85rem' }} />
                    <button onClick={ejecutarProcedimiento} style={{
                        background: 'var(--green)', color: '#000', border: 'none',
                        padding: '0.5rem 1.2rem', borderRadius: '8px', fontWeight: 700, cursor: 'pointer', fontSize: '0.85rem'
                    }}>▶ Ejecutar</button>
                </div>
                {procedimiento && (
                    procedimiento.length === 0
                        ? <p style={{ marginTop: '0.75rem', color: 'var(--muted)' }}>Sin resultados.</p>
                        : <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '1rem' }}>
                            <thead>
                            <tr style={{ borderBottom: '1px solid var(--border)' }}>
                                {['ID', 'Fecha', 'Marcador', 'Local', 'Visitante', 'Estadio'].map(h => (
                                    <th key={h} style={{ padding: '0.6rem 1rem', textAlign: 'left', fontSize: '0.75rem', color: 'var(--green)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>{h}</th>
                                ))}
                            </tr>
                            </thead>
                            <tbody>
                            {procedimiento.map(p => (
                                <tr key={p.id_partido} style={{ borderBottom: '1px solid var(--border)' }}>
                                    <td style={{ padding: '0.7rem 1rem', color: 'var(--muted)' }}>{p.id_partido}</td>
                                    <td style={{ padding: '0.7rem 1rem', color: 'var(--muted)' }}>{p.fecha?.split('T')[0]}</td>
                                    <td style={{ padding: '0.7rem 1rem', fontWeight: 700, color: 'var(--green)' }}>{p.marcador || '—'}</td>
                                    <td style={{ padding: '0.7rem 1rem' }}>{p.equipo_local}</td>
                                    <td style={{ padding: '0.7rem 1rem' }}>{p.equipo_visitante}</td>
                                    <td style={{ padding: '0.7rem 1rem', color: 'var(--muted)' }}>{p.estadio}</td>
                                </tr>
                            ))}
                            </tbody>
                        </table>
                )}
            </div>

            {showModal && (
                <div className="modal-overlay">
                    <div className="modal">
                        <h3>{editando ? 'EDITAR PARTIDO' : 'NUEVO PARTIDO'}</h3>
                        <input placeholder="Fecha" type="date" value={form.fecha} onChange={e => setForm({ ...form, fecha: e.target.value })} />
                        <input placeholder="Duracion (min)" type="number" value={form.duracion} onChange={e => setForm({ ...form, duracion: e.target.value })} />
                        <input placeholder="Marcador (ej: 2-1)" value={form.marcador} onChange={e => setForm({ ...form, marcador: e.target.value })} />
                        <input placeholder="Espectadores" type="number" value={form.num_espectadores} onChange={e => setForm({ ...form, num_espectadores: e.target.value })} />
                        <select value={form.id_estadio} onChange={e => setForm({ ...form, id_estadio: e.target.value })}>
                            <option value="">— Estadio —</option>
                            {estadios.map(est => <option key={est.id_estadio} value={est.id_estadio}>{est.nombre}</option>)}
                        </select>
                        <select value={form.id_equipo_local} onChange={e => setForm({ ...form, id_equipo_local: e.target.value })}>
                            <option value="">— Equipo local —</option>
                            {equipos.map(eq => <option key={eq.id_equipo} value={eq.id_equipo}>{eq.nombre}</option>)}
                        </select>
                        <select value={form.id_equipo_visitante} onChange={e => setForm({ ...form, id_equipo_visitante: e.target.value })}>
                            <option value="">— Equipo visitante —</option>
                            {equipos.map(eq => <option key={eq.id_equipo} value={eq.id_equipo}>{eq.nombre}</option>)}
                        </select>
                        <select value={form.id_torneo} onChange={e => setForm({ ...form, id_torneo: e.target.value })}>
                            <option value="">— Torneo —</option>
                            {torneos.map(t => <option key={t.id_torneo} value={t.id_torneo}>{t.nombre}</option>)}
                        </select>
                        <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '0.5rem', marginTop: '0.5rem' }}>
                            <button onClick={() => setShowModal(false)} style={{
                                background: 'rgba(239,68,68,0.15)', color: '#ef4444', border: '1px solid rgba(239,68,68,0.3)',
                                padding: '0.5rem 1rem', borderRadius: '8px', cursor: 'pointer', fontWeight: 600
                            }}>Cancelar</button>
                            <button onClick={guardar} style={{
                                background: 'var(--green)', color: '#000', border: 'none',
                                padding: '0.5rem 1rem', borderRadius: '8px', cursor: 'pointer', fontWeight: 700
                            }}>Guardar</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Partidos;