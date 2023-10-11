import { Track } from '../../../Track';

export interface Playlist {
  id: string;
  name: string;
  description: string;
  followers?: number;
  images: Image[];
  owner: Owner;
  public?: boolean;
  tracks: Tracks;
}

interface Image {
  extractedColors: ExtractedColors;
  sources: Source[];
}

interface ExtractedColors {
  colorDark: ColorDark;
}

interface ColorDark {
  hex: string;
  isFallback: boolean;
}

interface Source {
  url: string;
  width?: number;
  height?: number;
}

interface Owner {
  id: string;
  name: string;
  type?: string;
  followers?: number;
  uri?: string;
}

interface Tracks {
  href?: string;
  limit?: number;
  offset: number;
  total: number;
  items: Track[];
}
