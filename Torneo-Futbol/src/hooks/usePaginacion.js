import { useState } from 'react';

export function usePaginacion(datos, porPagina = 15) {
    const [pagina, setPagina] = useState(1);
    const totalPaginas = Math.ceil(datos.length / porPagina);
    const datosPagina = datos.slice((pagina - 1) * porPagina, pagina * porPagina);
    const numFila = (i) => (pagina - 1) * porPagina + i + 1;

    return { pagina, setPagina, totalPaginas, datosPagina, numFila };
}