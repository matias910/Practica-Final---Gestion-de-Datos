import { useState, useEffect } from 'react';
import axios from 'axios';
import { getFlag } from '../utils/banderas.jsx';
import { usePaginacion } from '../hooks/usePaginacion.js';

const API = 'http://localhost:5000/api';

function Jugadores() {
    const [jugadores, setJugadores] = useState([]);
    const [equipos, setEquipos] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [editando, setEditando] = useState(null);
    const [form, setForm] = useState({ nombre: '', apellidos: '', posicion: '', numero: '', fecha_nacimiento: '', id_equipo: '' });

    const { pagina, setPagina, totalPaginas, datosPagina, numFila } = usePaginacion(jugadores);

    const cargar = () => {
        axios.get(`${API}/jugadores`).then(r => setJugadores(r.data));
        axios.get(`${API}/equipos`).then(r => setEquipos(r.data));
    };
    useEffect(() => { cargar(); }, []);

    const abrirCrear = () => {
        setEditando(null);
        setForm({ nombre: '', apellidos: '', posicion: '', numero: '', fecha_nacimiento: '', id_equipo: '' });
        setShowModal(true);
    };

    const abrirEditar = (j) => {
        setEditando(j);
        setForm({
            nombre: j.nombre, apellidos: j.apellidos, posicion: j.posicion,
            numero: j.numero, fecha_nacimiento: j.fecha_nacimiento?.split('T')[0], id_equipo: j.id_equipo
        });
        setShowModal(true);
    };

    const guardar = () => {
        const action = editando
            ? axios.put(`${API}/jugadores/${editando.id_persona}`, form)
            : axios.post(`${API}/jugadores`, form);
        action.then(() => { cargar(); setShowModal(false); });
    };

    const eliminar = (id) => {
        if (confirm('¿Eliminar este jugador?')) axios.delete(`${API}/jugadores/${id}`).then(cargar);
    };

    const calcularEdad = (fecha) => {
        if (!fecha) return '—';
        return new Date().getFullYear() - new Date(fecha).getFullYear();
    };

    const posicionColor = (pos) => {
        const map = { portero: '#3b82f6', defensa: '#22c55e', mediocampista: '#eab308', delantero: '#ef4444' };
        return map[pos] || '#6b7280';
    };

    const PaginacionBar = () => totalPaginas <= 1 ? null : (
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '1rem' }}>
      <span style={{ color: 'var(--muted)', fontSize: '0.85rem' }}>
        Mostrando {(pagina - 1) * 15 + 1}–{Math.min(pagina * 15, jugadores.length)} de {jugadores.length} jugadores
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
                    <h2 style={{ fontFamily: 'Orbitron, sans-serif', fontSize: '1.4rem', color: 'var(--green)' }}>Jugadores</h2>
                    <p style={{ color: 'var(--muted)', fontSize: '0.85rem', marginTop: '0.25rem' }}>Registro de jugadores por equipo.</p>
                </div>
                <button onClick={abrirCrear} style={{
                    background: 'var(--green)', color: '#000', border: 'none',
                    padding: '0.55rem 1.2rem', borderRadius: '8px', fontWeight: 700, cursor: 'pointer', fontSize: '0.9rem'
                }}>+ Nuevo jugador</button>
            </div>

            <div style={{ background: 'var(--surface)', borderRadius: '12px', border: '1px solid var(--border)', overflow: 'hidden' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                    <thead>
                    <tr style={{ borderBottom: '1px solid var(--border)' }}>
                        {['id', 'Nombre', 'Apellidos', 'Posicion', 'Num', 'Edad', 'Equipo', 'Acciones'].map(h => (
                            <th key={h} style={{
                                padding: '0.85rem 1rem', textAlign: 'left',
                                fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.08em',
                                color: 'var(--green)', textTransform: 'uppercase'
                            }}>{h}</th>
                        ))}
                    </tr>
                    </thead>
                    <tbody>
                    {datosPagina.map((j, i) => (
                        <tr key={j.id_persona} style={{ borderBottom: '1px solid var(--border)', transition: 'background 0.15s' }}
                            onMouseEnter={ev => ev.currentTarget.style.background = 'var(--surface2)'}
                            onMouseLeave={ev => ev.currentTarget.style.background = 'transparent'}>
                            <td style={{ padding: '0.8rem 1rem', color: 'var(--muted)', fontSize: '0.85rem' }}>{numFila(i)}</td>
                            <td style={{ padding: '0.8rem 1rem', fontWeight: 600 }}>{j.nombre}</td>
                            <td style={{ padding: '0.8rem 1rem', color: 'var(--muted)' }}>{j.apellidos}</td>
                            <td style={{ padding: '0.8rem 1rem' }}>
                  <span style={{
                      background: `${posicionColor(j.posicion)}20`,
                      color: posicionColor(j.posicion),
                      border: `1px solid ${posicionColor(j.posicion)}40`,
                      padding: '0.2rem 0.6rem', borderRadius: '999px', fontSize: '0.75rem', fontWeight: 600
                  }}>{j.posicion}</span>
                            </td>
                            <td style={{ padding: '0.8rem 1rem', color: 'var(--muted)' }}>{j.numero}</td>
                            <td style={{ padding: '0.8rem 1rem', color: 'var(--muted)' }}>{calcularEdad(j.fecha_nacimiento)}</td>
                            <td style={{ padding: '0.8rem 1rem', color: 'var(--muted)' }}>{getFlag(j.equipo)} {j.equipo}</td>
                            <td style={{ padding: '0.8rem 1rem' }}>
                                <button onClick={() => abrirEditar(j)} style={{
                                    background: 'rgba(234,179,8,0.15)', color: '#eab308', border: '1px solid rgba(234,179,8,0.3)',
                                    padding: '0.3rem 0.7rem', borderRadius: '6px', cursor: 'pointer', fontSize: '0.8rem', marginRight: '0.4rem'
                                }}>Editar</button>
                                <button onClick={() => eliminar(j.id_persona)} style={{
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

            {showModal && (
                <div className="modal-overlay">
                    <div className="modal">
                        <h3>{editando ? 'EDITAR JUGADOR' : 'NUEVO JUGADOR'}</h3>
                        <input placeholder="Nombre" value={form.nombre} onChange={e => setForm({ ...form, nombre: e.target.value })} />
                        <input placeholder="Apellidos" value={form.apellidos} onChange={e => setForm({ ...form, apellidos: e.target.value })} />
                        <select value={form.posicion} onChange={e => setForm({ ...form, posicion: e.target.value })}>
                            <option value="">— Posicion —</option>
                            <option value="portero">Portero</option>
                            <option value="defensa">Defensa</option>
                            <option value="mediocampista">Mediocampista</option>
                            <option value="delantero">Delantero</option>
                        </select>
                        <input placeholder="Numero de camiseta" type="number" value={form.numero} onChange={e => setForm({ ...form, numero: e.target.value })} />
                        <input placeholder="Fecha de nacimiento" type="date" value={form.fecha_nacimiento} onChange={e => setForm({ ...form, fecha_nacimiento: e.target.value })} />
                        <select value={form.id_equipo} onChange={e => setForm({ ...form, id_equipo: e.target.value })}>
                            <option value="">— Equipo —</option>
                            {equipos.map(eq => <option key={eq.id_equipo} value={eq.id_equipo}>{getFlag(eq.nombre)} {eq.nombre}</option>)}
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

export default Jugadores;