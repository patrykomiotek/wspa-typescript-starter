interface Band {
    id: number;
    name: string;
}

interface Song {
    id: number;
    title: string;
    duration: number;
    band: Band;
}

interface MusicUser {
    id: number;
    firstName: string;
    lastName: string;
    favoriteSongs: Array<Song>;
}

const musicUser1: MusicUser = {
    id: 1,
    firstName: 'Alice',
    lastName: 'Smith',
    favoriteSongs: [{
        id: 455,
        title: 'Oh, oh, sth!',
        duration: 60 * 4,
        band: {
            id: 764,
            name: 'WSPA Band',
        }
    }]
}

