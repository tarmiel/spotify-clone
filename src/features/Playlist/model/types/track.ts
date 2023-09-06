export interface PlaylistTrack {
  addedAt: string;
  info: {
    id: string;
    name: string;
    duration: number;
    album: {
      id: string;
      name: string;
      artists: Artist[];
      image: string;
    };
    artists: Artist[];
  };
}

interface Artist {
  id: string;
  name: string;
}
