const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'torneos_futbol'
});

db.connect((err) => {
  if (err) { console.error('Error conectando a MariaDB:', err); return; }
  console.log('Conectado a MariaDB ✓');
});

// ─── EQUIPOS ────────────────────────────────────────────────────────────────

app.get('/api/equipos', (req, res) => {
  db.query('SELECT * FROM equipo', (err, results) => {
    if (err) return res.status(500).send(err);
    res.json(results);
  });
});

app.post('/api/equipos', (req, res) => {
  const { nombre, ciudad, año_fundacion, director_tecnico } = req.body;
  db.query(
    'INSERT INTO equipo (nombre, ciudad, año_fundacion, director_tecnico) VALUES (?, ?, ?, ?)',
    [nombre, ciudad, año_fundacion, director_tecnico],
    (err, result) => {
      if (err) return res.status(500).send(err);
      res.json({ message: 'Equipo creado', id: result.insertId });
    }
  );
});

app.put('/api/equipos/:id', (req, res) => {
  const { nombre, ciudad, año_fundacion, director_tecnico } = req.body;
  db.query(
    'UPDATE equipo SET nombre=?, ciudad=?, año_fundacion=?, director_tecnico=? WHERE id_equipo=?',
    [nombre, ciudad, año_fundacion, director_tecnico, req.params.id],
    (err) => {
      if (err) return res.status(500).send(err);
      res.json({ message: 'Equipo actualizado' });
    }
  );
});

app.delete('/api/equipos/:id', (req, res) => {
  db.query('DELETE FROM equipo WHERE id_equipo=?', [req.params.id], (err) => {
    if (err) return res.status(500).send(err);
    res.json({ message: 'Equipo eliminado' });
  });
});

// ─── JUGADORES ───────────────────────────────────────────────────────────────

app.get('/api/jugadores', (req, res) => {
  db.query(`
    SELECT j.id_persona, p.nombre, p.apellidos, j.posicion, j.numero,
           j.fecha_nacimiento, j.id_equipo, e.nombre AS equipo
    FROM jugador j
    JOIN persona p ON j.id_persona = p.id_persona
    JOIN equipo e ON j.id_equipo = e.id_equipo
  `, (err, results) => {
    if (err) return res.status(500).send(err);
    res.json(results);
  });
});

app.post('/api/jugadores', (req, res) => {
  const { nombre, apellidos, posicion, numero, fecha_nacimiento, id_equipo } = req.body;
  db.query(
    'INSERT INTO persona (nombre, apellidos) VALUES (?, ?)',
    [nombre, apellidos],
    (err, result) => {
      if (err) return res.status(500).send(err);
      const id_persona = result.insertId;
      db.query(
        'INSERT INTO jugador (id_persona, id_equipo, posicion, numero, fecha_nacimiento) VALUES (?, ?, ?, ?, ?)',
        [id_persona, id_equipo, posicion, numero, fecha_nacimiento],
        (err2) => {
          if (err2) return res.status(500).send(err2);
          res.json({ message: 'Jugador creado', id: id_persona });
        }
      );
    }
  );
});

app.put('/api/jugadores/:id', (req, res) => {
  const { nombre, apellidos, posicion, numero, fecha_nacimiento, id_equipo } = req.body;
  db.query(
    'UPDATE persona SET nombre=?, apellidos=? WHERE id_persona=?',
    [nombre, apellidos, req.params.id],
    (err) => {
      if (err) return res.status(500).send(err);
      db.query(
        'UPDATE jugador SET posicion=?, numero=?, fecha_nacimiento=?, id_equipo=? WHERE id_persona=?',
        [posicion, numero, fecha_nacimiento, id_equipo, req.params.id],
        (err2) => {
          if (err2) return res.status(500).send(err2);
          res.json({ message: 'Jugador actualizado' });
        }
      );
    }
  );
});

app.delete('/api/jugadores/:id', (req, res) => {
  db.query('DELETE FROM jugador WHERE id_persona=?', [req.params.id], (err) => {
    if (err) return res.status(500).send(err);
    db.query('DELETE FROM persona WHERE id_persona=?', [req.params.id], (err2) => {
      if (err2) return res.status(500).send(err2);
      res.json({ message: 'Jugador eliminado' });
    });
  });
});

// ─── PARTIDOS ────────────────────────────────────────────────────────────────

app.get('/api/partidos', (req, res) => {
    db.query(`
        SELECT p.id_partido, p.fecha, p.duracion, p.marcador, p.num_espectadores,
               el.nombre AS equipo_local, ev.nombre AS equipo_visitante,
               est.nombre AS estadio, t.nombre AS torneo,
               CONCAT(per.nombre, ' ', per.apellidos) AS arbitro
        FROM partido p
                 JOIN equipo el ON p.id_equipo_local = el.id_equipo
                 JOIN equipo ev ON p.id_equipo_visitante = ev.id_equipo
                 JOIN estadio est ON p.id_estadio = est.id_estadio
                 JOIN torneo t ON p.id_torneo = t.id_torneo
                 LEFT JOIN arbitro a ON p.id_arbitro = a.id_persona
                 LEFT JOIN persona per ON a.id_persona = per.id_persona
    `, (err, results) => {
        if (err) return res.status(500).send(err);
        res.json(results);
    });
});

app.post('/api/partidos', (req, res) => {
  const { fecha, duracion, marcador, num_espectadores, id_estadio, id_equipo_local, id_equipo_visitante, id_torneo } = req.body;
  db.query(
    'INSERT INTO partido (fecha, duracion, marcador, num_espectadores, id_estadio, id_equipo_local, id_equipo_visitante, id_torneo) VALUES (?, ?, ?, ?, ?, ?, ?, ?)',
    [fecha, duracion, marcador, num_espectadores, id_estadio, id_equipo_local, id_equipo_visitante, id_torneo],
    (err, result) => {
      if (err) return res.status(500).send(err);
      res.json({ message: 'Partido creado', id: result.insertId });
    }
  );
});

app.put('/api/partidos/:id', (req, res) => {
  const { fecha, duracion, marcador, num_espectadores, id_estadio, id_equipo_local, id_equipo_visitante, id_torneo } = req.body;
  db.query(
    'UPDATE partido SET fecha=?, duracion=?, marcador=?, num_espectadores=?, id_estadio=?, id_equipo_local=?, id_equipo_visitante=?, id_torneo=? WHERE id_partido=?',
    [fecha, duracion, marcador, num_espectadores, id_estadio, id_equipo_local, id_equipo_visitante, id_torneo, req.params.id],
    (err) => {
      if (err) return res.status(500).send(err);
      res.json({ message: 'Partido actualizado' });
    }
  );
});

app.delete('/api/partidos/:id', (req, res) => {
  db.query('DELETE FROM partido WHERE id_partido=?', [req.params.id], (err) => {
    if (err) return res.status(500).send(err);
    res.json({ message: 'Partido eliminado' });
  });
});

// ─── FUNCIÓN: partidos jugados por equipo en torneo ──────────────────────────

app.get('/api/funcion/partidos-jugados/:id_equipo/:id_torneo', (req, res) => {
  db.query(
    'SELECT partidos_jugados(?, ?) AS total',
    [req.params.id_equipo, req.params.id_torneo],
    (err, results) => {
      if (err) return res.status(500).send(err);
      res.json(results[0]);
    }
  );
});

// ─── PROCEDIMIENTO: partidos de un torneo ────────────────────────────────────

app.get('/api/procedimiento/partidos-torneo/:id_torneo', (req, res) => {
  db.query(
    'CALL partidos_por_torneo(?)',
    [req.params.id_torneo],
    (err, results) => {
      if (err) return res.status(500).send(err);
      res.json(results[0]);
    }
  );
});

app.get('/api/estadios', (req, res) => {
    db.query('SELECT * FROM estadio', (err, results) => {
        if (err) return res.status(500).send(err);
        res.json(results);
    });
});

app.get('/api/torneos', (req, res) => {
    db.query('SELECT * FROM torneo', (err, results) => {
        if (err) return res.status(500).send(err);
        res.json(results);
    });
});

app.post('/api/torneos', (req, res) => {
    const { nombre, categoria, año_edicion } = req.body;
    db.query('INSERT INTO torneo (nombre, categoria, año_edicion) VALUES (?, ?, ?)',
        [nombre, categoria, año_edicion], (err, result) => {
            if (err) return res.status(500).send(err);
            res.json({ message: 'Torneo creado', id: result.insertId });
        });
});

app.put('/api/torneos/:id', (req, res) => {
    const { nombre, categoria, año_edicion } = req.body;
    db.query('UPDATE torneo SET nombre=?, categoria=?, año_edicion=? WHERE id_torneo=?',
        [nombre, categoria, año_edicion, req.params.id], (err) => {
            if (err) return res.status(500).send(err);
            res.json({ message: 'Torneo actualizado' });
        });
});

app.delete('/api/torneos/:id', (req, res) => {
    db.query('DELETE FROM torneo WHERE id_torneo=?', [req.params.id], (err) => {
        if (err) return res.status(500).send(err);
        res.json({ message: 'Torneo eliminado' });
    });
});
app.listen(5000, () => console.log('Backend corriendo en http://localhost:5000'));
