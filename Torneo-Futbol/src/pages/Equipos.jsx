import {getFlag} from "../utils/banderas.jsx";
import { useState, useEffect } from 'react';
import axios from 'axios';

const API = 'http://localhost:5000/api';

function Equipos() {
    const [equipos, setEquipos] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [editando, setEditando] = useState(null);
    const [form, setForm] = useState({ nombre: '', ciudad: '', año_fundacion: '', director_tecnico: '' });
    const [funcion, setFuncion] = useState(null);
    const [funcionInput, setFuncionInput] = useState({ id_equipo: '', id_torneo: '' });

    const cargar = () => axios.get(`${API}/equipos`).then(r => setEquipos(r.data));
    useEffect(() => { cargar(); }, []);

    const abrirCrear = () => {
        setEditando(null);
        setForm({ nombre: '', ciudad: '', año_fundacion: '', director_tecnico: '' });
        setShowModal(true);
    };

    const abrirEditar = (e) => {
        setEditando(e);
        setForm({ nombre: e.nombre, ciudad: e.ciudad, año_fundacion: e.año_fundacion, director_tecnico: e.director_tecnico });
        setShowModal(true);
    };

    const guardar = () => {
        const action = editando
            ? axios.put(`${API}/equipos/${editando.id_equipo}`, form)
            : axios.post(`${API}/equipos`, form);
        action.then(() => { cargar(); setShowModal(false); });
    };

    const eliminar = (id) => {
        if (confirm('¿Eliminar este equipo?')) axios.delete(`${API}/equipos/${id}`).then(cargar);
    };

    const ejecutarFuncion = () => {
        axios.get(`${API}/funcion/partidos-jugados/${funcionInput.id_equipo}/${funcionInput.id_torneo}`)
            .then(r => setFuncion(r.data.total))
            .catch(() => setFuncion('Error'));
    };

    return (
        <div>
            {/* Header */}
            <div className="flex items-center justify-between mb-6">
                <div>
                    <h2 style={{ fontFamily: 'Orbitron, sans-serif', fontSize: '1.4rem', color: 'var(--green)' }}>Equipos</h2>
                    <p style={{ color: 'var(--muted)', fontSize: '0.85rem', marginTop: '0.25rem' }}>Gestiona los equipos participantes del torneo.</p>
                </div>
                <button onClick={abrirCrear} style={{
                    background: 'var(--green)', color: '#000', border: 'none',
                    padding: '0.55rem 1.2rem', borderRadius: '8px', fontWeight: 700,
                    cursor: 'pointer', fontSize: '0.9rem', display: 'flex', alignItems: 'center', gap: '0.4rem'
                }}>+ Nuevo equipo</button>
            </div>

            {/* Table */}
            <div style={{ background: 'var(--surface)', borderRadius: '12px', border: '1px solid var(--border)', overflow: 'hidden' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                    <thead>
                    <tr style={{ borderBottom: '1px solid var(--border)' }}>
                        {['id', 'Equipo', 'Ciudad', 'Fundacion', 'Director Tecnico', 'Acciones'].map(h => (
                            <th key={h} style={{
                                padding: '0.85rem 1rem', textAlign: 'left',
                                fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.08em',
                                color: 'var(--green)', textTransform: 'uppercase'
                            }}>{h}</th>
                        ))}
                    </tr>
                    </thead>
                    <tbody>
                    {equipos.map((e, i) => (
                        <tr key={e.id_equipo} style={{ borderBottom: '1px solid var(--border)', transition: 'background 0.15s' }}
                            onMouseEnter={ev => ev.currentTarget.style.background = 'var(--surface2)'}
                            onMouseLeave={ev => ev.currentTarget.style.background = 'transparent'}>
                            <td style={{ padding: '0.8rem 1rem', color: 'var(--muted)', fontSize: '0.85rem' }}>{i + 1}</td>
                            <td style={{ padding: '0.8rem 1rem', fontWeight: 600 }}>
                                {getFlag(e.nombre)} {e.nombre}
                            </td>
                            <td style={{ padding: '0.8rem 1rem', color: 'var(--muted)' }}>{e.ciudad}</td>
                            <td style={{ padding: '0.8rem 1rem', color: 'var(--muted)' }}>{e.año_fundacion}</td>
                            <td style={{ padding: '0.8rem 1rem', color: 'var(--muted)' }}>{e.director_tecnico}</td>
                            <td style={{ padding: '0.8rem 1rem' }}>
                                <button onClick={() => abrirEditar(e)} style={{
                                    background: 'rgba(234,179,8,0.15)', color: '#eab308', border: '1px solid rgba(234,179,8,0.3)',
                                    padding: '0.3rem 0.7rem', borderRadius: '6px', cursor: 'pointer', fontSize: '0.8rem', marginRight: '0.4rem'
                                }}>Editar</button>
                                <button onClick={() => eliminar(e.id_equipo)} style={{
                                    background: 'rgba(239,68,68,0.15)', color: '#ef4444', border: '1px solid rgba(239,68,68,0.3)',
                                    padding: '0.3rem 0.7rem', borderRadius: '6px', cursor: 'pointer', fontSize: '0.8rem'
                                }}>Eliminar</button>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>

            {/* Funcion SQL */}
            <div style={{
                marginTop: '1.5rem', background: 'var(--surface)', border: '1px solid var(--border)',
                borderRadius: '12px', padding: '1.5rem', display: 'flex', gap: '2rem', alignItems: 'flex-start'
            }}>
                <div style={{ flex: 1 }}>
                    <div style={{ fontSize: '0.7rem', color: 'var(--green)', fontWeight: 700, letterSpacing: '0.1em', marginBottom: '0.25rem' }}>FUNCION SQL</div>
                    <div style={{ fontFamily: 'Orbitron, sans-serif', fontSize: '1rem', color: 'var(--text)', marginBottom: '0.5rem' }}>partidos_jugados</div>
                    <p style={{ fontSize: '0.8rem', color: 'var(--muted)', marginBottom: '1rem' }}>Devuelve la cantidad de partidos jugados por un equipo en un torneo especifico.</p>
                    <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center', flexWrap: 'wrap' }}>
                        <input placeholder="ID del equipo" value={funcionInput.id_equipo}
                               onChange={e => setFuncionInput({ ...funcionInput, id_equipo: e.target.value })}
                               style={{ padding: '0.5rem 0.75rem', background: 'var(--bg)', border: '1px solid var(--border)', borderRadius: '8px', color: 'var(--text)', width: '140px', fontSize: '0.85rem' }} />
                        <input placeholder="ID del torneo" value={funcionInput.id_torneo}
                               onChange={e => setFuncionInput({ ...funcionInput, id_torneo: e.target.value })}
                               style={{ padding: '0.5rem 0.75rem', background: 'var(--bg)', border: '1px solid var(--border)', borderRadius: '8px', color: 'var(--text)', width: '140px', fontSize: '0.85rem' }} />
                        <button onClick={ejecutarFuncion} style={{
                            background: 'var(--green)', color: '#000', border: 'none',
                            padding: '0.5rem 1.2rem', borderRadius: '8px', fontWeight: 700, cursor: 'pointer', fontSize: '0.85rem'
                        }}>▶ Ejecutar</button>
                    </div>
                    {funcion !== null && (
                        <div style={{ marginTop: '0.75rem', color: 'var(--green)', fontWeight: 700 }}>
                            Resultado: {funcion} partido(s)
                        </div>
                    )}
                </div>
                <div style={{ fontSize: '4rem', opacity: 0.15, alignSelf: 'center' }}>⚽</div>
            </div>

            {/* Modal */}
            {showModal && (
                <div className="modal-overlay">
                    <div className="modal">
                        <h3>{editando ? 'EDITAR EQUIPO' : 'NUEVO EQUIPO'}</h3>
                        <input placeholder="Nombre" value={form.nombre} onChange={e => setForm({ ...form, nombre: e.target.value })} />
                        <input placeholder="Ciudad" value={form.ciudad} onChange={e => setForm({ ...form, ciudad: e.target.value })} />
                        <input placeholder="Año de fundacion" type="number" value={form.año_fundacion} onChange={e => setForm({ ...form, año_fundacion: e.target.value })} />
                        <input placeholder="Director tecnico" value={form.director_tecnico} onChange={e => setForm({ ...form, director_tecnico: e.target.value })} />
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

export default Equipos;