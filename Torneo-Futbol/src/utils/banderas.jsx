const banderas = {
    'Alemania':             '🇩🇪',
    'Argentina':            '🇦🇷',
    'Brasil':               '🇧🇷',
    'Paises Bajos':         '🇳🇱',
    'Colombia':             '🇨🇴',
    'Francia':              '🇫🇷',
    'Belgica':              '🇧🇪',
    'Costa Rica':           '🇨🇷',
    'Croacia':              '🇭🇷',
    'Mexico':               '🇲🇽',
    'Costa de Marfil':      '🇨🇮',
    'Japon':                '🇯🇵',
    'Camerun':              '🇨🇲',
    'Chile':                '🇨🇱',
    'Australia':            '🇦🇺',
    'Espana':               '🇪🇸',
    'Bosnia y Herzegovina': '🇧🇦',
    'Grecia':               '🇬🇷',
    'Uruguay':              '🇺🇾',
    'Nigeria':              '🇳🇬',
    'Suiza':                '🇨🇭',
    'Ecuador':              '🇪🇨',
    'Honduras':             '🇭🇳',
    'Iran':                 '🇮🇷',
    'Argelia':              '🇩🇿',
    'Rusia':                '🇷🇺',
    'Ghana':                '🇬🇭',
    'Corea del Sur':        '🇰🇷',
    'Inglaterra':           '🏴󠁧󠁢󠁥󠁮󠁧󠁿',
    'Italia':               '🇮🇹',
    'Estados Unidos':       '🇺🇸',
    'Portugal':             '🇵🇹',
};

const normalize = (value = '') =>
    value
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .trim();


export const getFlag = (nombre) => banderas[nombre] || '🏳️';
