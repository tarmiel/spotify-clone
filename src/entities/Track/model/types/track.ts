export interface Track {
  id: string;
  name: string;
  url: string;
  duration_ms: number;
  isPlayable?: boolean;
  album?: Album;
  artists: Artist[];
  addedAt?: string;
}

interface Album {
  id: string;
  name: string;
  artists: Artist[];
  images: Image[];
  releaseDate?: string;
  totalTracks?: number;
}

interface Artist {
  id: string;
  name: string;
  popularity?: number;
  genres?: string[];
  followers?: number;
  images?: Image[];
}

interface Image {
  url: string;
  height?: number;
  width?: number;
}
