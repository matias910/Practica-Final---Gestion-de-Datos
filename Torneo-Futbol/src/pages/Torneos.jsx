import { useState, useEffect } from 'react';
import axios from 'axios';

const API = 'http://localhost:5000/api';

function Torneos() {
    const [torneos, setTorneos] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [editando, setEditando] = useState(null);
    const [form, setForm] = useState({ nombre: '', categoria: '', año_edicion: '' });

    const cargar = () => axios.get(`${API}/torneos`).then(r => setTorneos(r.data));
    useEffect(() => { cargar(); }, []);

    const abrirCrear = () => {
        setEditando(null);
        setForm({ nombre: '', categoria: '', año_edicion: '' });
        setShowModal(true);
    };

    const abrirEditar = (t) => {
        setEditando(t);
        setForm({ nombre: t.nombre, categoria: t.categoria, año_edicion: t.año_edicion });
        setShowModal(true);
    };

    const guardar = () => {
        const action = editando
            ? axios.put(`${API}/torneos/${editando.id_torneo}`, form)
            : axios.post(`${API}/torneos`, form);
        action.then(() => { cargar(); setShowModal(false); });
    };

    const eliminar = (id) => {
        if (confirm('¿Eliminar este torneo?')) axios.delete(`${API}/torneos/${id}`).then(cargar);
    };

    return (
        <div>
            <div className="flex items-center justify-between mb-6">
                <div>
                    <h2 style={{ fontFamily: 'Orbitron, sans-serif', fontSize: '1.4rem', color: 'var(--green)' }}>Torneos</h2>
                    <p style={{ color: 'var(--muted)', fontSize: '0.85rem', marginTop: '0.25rem' }}>Competiciones registradas en el sistema.</p>
                </div>
                <button onClick={abrirCrear} style={{
                    background: 'var(--green)', color: '#000', border: 'none',
                    padding: '0.55rem 1.2rem', borderRadius: '8px', fontWeight: 700, cursor: 'pointer', fontSize: '0.9rem'
                }}>+ Nuevo torneo</button>
            </div>

            <div style={{ background: 'var(--surface)', borderRadius: '12px', border: '1px solid var(--border)', overflow: 'hidden' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                    <thead>
                    <tr style={{ borderBottom: '1px solid var(--border)' }}>
                        {['#', 'Nombre', 'Categoria', 'Edicion', 'Acciones'].map(h => (
                            <th key={h} style={{
                                padding: '0.85rem 1rem', textAlign: 'left',
                                fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.08em',
                                color: 'var(--green)', textTransform: 'uppercase'
                            }}>{h}</th>
                        ))}
                    </tr>
                    </thead>
                    <tbody>
                    {torneos.map((t, i) => (
                        <tr key={t.id_torneo} style={{ borderBottom: '1px solid var(--border)', transition: 'background 0.15s' }}
                            onMouseEnter={ev => ev.currentTarget.style.background = 'var(--surface2)'}
                            onMouseLeave={ev => ev.currentTarget.style.background = 'transparent'}>
                            <td style={{ padding: '0.8rem 1rem', color: 'var(--muted)' }}>{i + 1}</td>
                            <td style={{ padding: '0.8rem 1rem', fontWeight: 600 }}>{t.nombre}</td>
                            <td style={{ padding: '0.8rem 1rem' }}>
                  <span style={{
                      background: 'rgba(34,197,94,0.1)', color: 'var(--green)',
                      border: '1px solid rgba(34,197,94,0.3)',
                      padding: '0.2rem 0.6rem', borderRadius: '999px', fontSize: '0.75rem', fontWeight: 600
                  }}>{t.categoria}</span>
                            </td>
                            <td style={{ padding: '0.8rem 1rem', color: 'var(--muted)' }}>{t.año_edicion}</td>
                            <td style={{ padding: '0.8rem 1rem' }}>
                                <button onClick={() => abrirEditar(t)} style={{
                                    background: 'rgba(234,179,8,0.15)', color: '#eab308', border: '1px solid rgba(234,179,8,0.3)',
                                    padding: '0.3rem 0.7rem', borderRadius: '6px', cursor: 'pointer', fontSize: '0.8rem', marginRight: '0.4rem'
                                }}>Editar</button>
                                <button onClick={() => eliminar(t.id_torneo)} style={{
                                    background: 'rgba(239,68,68,0.15)', color: '#ef4444', border: '1px solid rgba(239,68,68,0.3)',
                                    padding: '0.3rem 0.7rem', borderRadius: '6px', cursor: 'pointer', fontSize: '0.8rem'
                                }}>Eliminar</button>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>

            {showModal && (
                <div className="modal-overlay">
                    <div className="modal">
                        <h3>{editando ? 'EDITAR TORNEO' : 'NUEVO TORNEO'}</h3>
                        <input placeholder="Nombre" value={form.nombre} onChange={e => setForm({ ...form, nombre: e.target.value })} />
                        <input placeholder="Categoria (ej: Profesional, Sub-17)" value={form.categoria} onChange={e => setForm({ ...form, categoria: e.target.value })} />
                        <input placeholder="Año de edicion" type="number" value={form.año_edicion} onChange={e => setForm({ ...form, año_edicion: e.target.value })} />
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

export default Torneos;