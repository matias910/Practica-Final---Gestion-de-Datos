import { useState, useEffect } from 'react';
import axios from 'axios';
import { usePaginacion } from '../hooks/usePaginacion.js';

const API = 'http://localhost:5000/api';

function Estadios() {
    const [estadios, setEstadios] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [editando, setEditando] = useState(null);
    const [form, setForm] = useState({ nombre: '', ubicacion: '', capacidad: '', tipo_superficie: '' });
    const [funcionInput, setFuncionInput] = useState('');
    const [funcionResultado, setFuncionResultado] = useState(null);

    const { pagina, setPagina, totalPaginas, datosPagina, numFila } = usePaginacion(estadios);

    const cargar = () => axios.get(`${API}/estadios`).then(r => setEstadios(r.data));
    useEffect(() => { cargar(); }, []);

    const abrirCrear = () => {
        setEditando(null);
        setForm({ nombre: '', ubicacion: '', capacidad: '', tipo_superficie: '' });
        setShowModal(true);
    };

    const abrirEditar = (e) => {
        setEditando(e);
        setForm({ nombre: e.nombre, ubicacion: e.ubicacion, capacidad: e.capacidad, tipo_superficie: e.tipo_superficie });
        setShowModal(true);
    };

    const guardar = () => {
        const action = editando
            ? axios.put(`${API}/estadios/${editando.id_estadio}`, form)
            : axios.post(`${API}/estadios`, form);
        action.then(() => { cargar(); setShowModal(false); });
    };

    const eliminar = (id) => {
        if (confirm('¿Eliminar este estadio?')) axios.delete(`${API}/estadios/${id}`).then(cargar);
    };

    const ejecutarFuncion = () => {
        axios.get(`${API}/funcion/partidos-estadio/${funcionInput}`)
            .then(r => setFuncionResultado(r.data))
            .catch(() => setFuncionResultado([]));
    };

    const superficieColor = (sup) => {
        if (!sup) return '#6b7280';
        if (sup.includes('natural')) return '#22c55e';
        if (sup.includes('sintetico') || sup.includes('sintético')) return '#3b82f6';
        return '#eab308';
    };

    const PaginacionBar = () => totalPaginas <= 1 ? null : (
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '1rem' }}>
            <span style={{ color: 'var(--muted)', fontSize: '0.85rem' }}>
                Mostrando {(pagina - 1) * 15 + 1}–{Math.min(pagina * 15, estadios.length)} de {estadios.length} estadios
            </span>
            <div style={{ display: 'flex', gap: '0.4rem' }}>
                <button onClick={() => setPagina(p => Math.max(1, p - 1))} disabled={pagina === 1} style={{
                    padding: '0.4rem 0.8rem', borderRadius: '6px', border: '1px solid var(--border)',
                    background: pagina === 1 ? 'transparent' : 'var(--surface2)',
                    color: pagina === 1 ? 'var(--muted)' : 'var(--text)',
                    cursor: pagina === 1 ? 'not-allowed' : 'pointer', fontSize: '0.85rem'
                }}>← Anterior</button>
                {Array.from({ length: totalPaginas }, (_, i) => i + 1).map(n => (
                    <button key={n} onClick={() => setPagina(n)} style={{
                        padding: '0.4rem 0.75rem', borderRadius: '6px', fontSize: '0.85rem', cursor: 'pointer',
                        border: '1px solid var(--border)',
                        background: n === pagina ? 'var(--green)' : 'var(--surface2)',
                        color: n === pagina ? '#000' : 'var(--text)',
                        fontWeight: n === pagina ? 700 : 400
                    }}>{n}</button>
                ))}
                <button onClick={() => setPagina(p => Math.min(totalPaginas, p + 1))} disabled={pagina === totalPaginas} style={{
                    padding: '0.4rem 0.8rem', borderRadius: '6px', border: '1px solid var(--border)',
                    background: pagina === totalPaginas ? 'transparent' : 'var(--surface2)',
                    color: pagina === totalPaginas ? 'var(--muted)' : 'var(--text)',
                    cursor: pagina === totalPaginas ? 'not-allowed' : 'pointer', fontSize: '0.85rem'
                }}>Siguiente →</button>
            </div>
        </div>
    );

    return (
        <div>
            <div className="flex items-center justify-between mb-6">
                <div>
                    <h2 style={{ fontFamily: 'Orbitron, sans-serif', fontSize: '1.4rem', color: 'var(--green)' }}>Estadios</h2>
                    <p style={{ color: 'var(--muted)', fontSize: '0.85rem', marginTop: '0.25rem' }}>Recintos donde se disputaron los partidos.</p>
                </div>
                <button onClick={abrirCrear} style={{
                    background: 'var(--green)', color: '#000', border: 'none',
                    padding: '0.55rem 1.2rem', borderRadius: '8px', fontWeight: 700, cursor: 'pointer', fontSize: '0.9rem'
                }}>+ Nuevo estadio</button>
            </div>

            <div style={{ background: 'var(--surface)', borderRadius: '12px', border: '1px solid var(--border)', overflow: 'hidden' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                    <thead>
                    <tr style={{ borderBottom: '1px solid var(--border)' }}>
                        {['id', 'Nombre', 'Ubicacion', 'Capacidad', 'Superficie', 'Acciones'].map(h => (
                            <th key={h} style={{
                                padding: '0.85rem 1rem', textAlign: 'left',
                                fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.08em',
                                color: 'var(--green)', textTransform: 'uppercase'
                            }}>{h}</th>
                        ))}
                    </tr>
                    </thead>
                    <tbody>
                    {datosPagina.map((e, i) => (
                        <tr key={e.id_estadio} style={{ borderBottom: '1px solid var(--border)', transition: 'background 0.15s' }}
                            onMouseEnter={ev => ev.currentTarget.style.background = 'var(--surface2)'}
                            onMouseLeave={ev => ev.currentTarget.style.background = 'transparent'}>
                            <td style={{ padding: '0.8rem 1rem', color: 'var(--muted)', fontSize: '0.85rem' }}>{numFila(i)}</td>
                            <td style={{ padding: '0.8rem 1rem', fontWeight: 600 }}>🏟️ {e.nombre}</td>
                            <td style={{ padding: '0.8rem 1rem', color: 'var(--muted)' }}>{e.ubicacion}</td>
                            <td style={{ padding: '0.8rem 1rem', color: 'var(--muted)' }}>{e.capacidad?.toLocaleString()} esp.</td>
                            <td style={{ padding: '0.8rem 1rem' }}>
                                {e.tipo_superficie ? (
                                    <span style={{
                                        background: `${superficieColor(e.tipo_superficie)}20`,
                                        color: superficieColor(e.tipo_superficie),
                                        border: `1px solid ${superficieColor(e.tipo_superficie)}40`,
                                        padding: '0.2rem 0.6rem', borderRadius: '999px', fontSize: '0.75rem', fontWeight: 600
                                    }}>{e.tipo_superficie}</span>
                                ) : '—'}
                            </td>
                            <td style={{ padding: '0.8rem 1rem' }}>
                                <button onClick={() => abrirEditar(e)} style={{
                                    background: 'rgba(234,179,8,0.15)', color: '#eab308', border: '1px solid rgba(234,179,8,0.3)',
                                    padding: '0.3rem 0.7rem', borderRadius: '6px', cursor: 'pointer', fontSize: '0.8rem', marginRight: '0.4rem'
                                }}>Editar</button>
                                <button onClick={() => eliminar(e.id_estadio)} style={{
                                    background: 'rgba(239,68,68,0.15)', color: '#ef4444', border: '1px solid rgba(239,68,68,0.3)',
                                    padding: '0.3rem 0.7rem', borderRadius: '6px', cursor: 'pointer', fontSize: '0.8rem'
                                }}>Eliminar</button>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>

            <PaginacionBar />

            {/* Funcion SQL */}
            <div style={{
                marginTop: '1.5rem', background: 'var(--surface)', border: '1px solid var(--border)',
                borderRadius: '12px', padding: '1.5rem'
            }}>
                <div style={{ fontSize: '0.7rem', color: 'var(--green)', fontWeight: 700, letterSpacing: '0.1em', marginBottom: '0.25rem' }}>FUNCION SQL</div>
                <div style={{ fontFamily: 'Orbitron, sans-serif', fontSize: '1rem', marginBottom: '0.5rem' }}>partidos_en_estadio</div>
                <p style={{ fontSize: '0.8rem', color: 'var(--muted)', marginBottom: '1rem' }}>Dado un ID de estadio, muestra cuantos partidos se jugaron ahi y el detalle de cada uno.</p>
                <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
                    <input
                        placeholder="ID Estadio"
                        value={funcionInput}
                        onChange={e => setFuncionInput(e.target.value)}
                        style={{ padding: '0.5rem 0.75rem', background: 'var(--bg)', border: '1px solid var(--border)', borderRadius: '8px', color: 'var(--text)', width: '140px', fontSize: '0.85rem' }}
                    />
                    <button onClick={ejecutarFuncion} style={{
                        background: 'var(--green)', color: '#000', border: 'none',
                        padding: '0.5rem 1.2rem', borderRadius: '8px', fontWeight: 700, cursor: 'pointer', fontSize: '0.85rem'
                    }}>▶ Ejecutar</button>
                </div>

                {funcionResultado && (
                    funcionResultado.length === 0
                        ? <p style={{ marginTop: '0.75rem', color: 'var(--muted)' }}>Sin resultados para ese estadio.</p>
                        : <>
                            <p style={{
                                marginTop: '0.75rem', marginBottom: '0.75rem',
                                color: 'var(--green)', fontWeight: 700, fontSize: '0.9rem'
                            }}>
                                ✓ Se jugaron <span style={{
                                background: 'rgba(34,197,94,0.15)',
                                border: '1px solid rgba(34,197,94,0.3)',
                                padding: '0.1rem 0.5rem', borderRadius: '6px'
                            }}>{funcionResultado.length}</span> partidos en este estadio.
                            </p>
                            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                                <thead>
                                <tr style={{ borderBottom: '1px solid var(--border)' }}>
                                    {['ID', 'Fecha', 'Marcador', 'Local', 'Visitante', 'Torneo', 'Arbitro'].map(h => (
                                        <th key={h} style={{ padding: '0.6rem 1rem', textAlign: 'left', fontSize: '0.75rem', color: 'var(--green)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>{h}</th>
                                    ))}
                                </tr>
                                </thead>
                                <tbody>
                                {funcionResultado.map(p => (
                                    <tr key={p.id_partido} style={{ borderBottom: '1px solid var(--border)' }}
                                        onMouseEnter={ev => ev.currentTarget.style.background = 'var(--surface2)'}
                                        onMouseLeave={ev => ev.currentTarget.style.background = 'transparent'}>
                                        <td style={{ padding: '0.7rem 1rem', color: 'var(--muted)' }}>{p.id_partido}</td>
                                        <td style={{ padding: '0.7rem 1rem', color: 'var(--muted)' }}>{p.fecha?.split('T')[0]}</td>
                                        <td style={{ padding: '0.7rem 1rem', fontWeight: 700, color: 'var(--green)' }}>{p.marcador || '—'}</td>
                                        <td style={{ padding: '0.7rem 1rem', fontWeight: 600 }}>{p.equipo_local}</td>
                                        <td style={{ padding: '0.7rem 1rem', fontWeight: 600 }}>{p.equipo_visitante}</td>
                                        <td style={{ padding: '0.7rem 1rem', color: 'var(--muted)' }}>{p.torneo}</td>
                                        <td style={{ padding: '0.7rem 1rem', color: 'var(--muted)' }}>{p.arbitro || '—'}</td>
                                    </tr>
                                ))}
                                </tbody>
                            </table>
                        </>
                )}
            </div>

            {showModal && (
                <div className="modal-overlay">
                    <div className="modal">
                        <h3>{editando ? 'EDITAR ESTADIO' : 'NUEVO ESTADIO'}</h3>
                        <input placeholder="Nombre" value={form.nombre} onChange={e => setForm({ ...form, nombre: e.target.value })} />
                        <input placeholder="Ubicacion (ciudad)" value={form.ubicacion} onChange={e => setForm({ ...form, ubicacion: e.target.value })} />
                        <input placeholder="Capacidad" type="number" value={form.capacidad} onChange={e => setForm({ ...form, capacidad: e.target.value })} />
                        <select value={form.tipo_superficie} onChange={e => setForm({ ...form, tipo_superficie: e.target.value })}>
                            <option value="">— Tipo de superficie —</option>
                            <option value="Cesped natural">Cesped natural</option>
                            <option value="Cesped sintetico">Cesped sintetico</option>
                            <option value="Cesped hibrido">Cesped hibrido</option>
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

export default Estadios;