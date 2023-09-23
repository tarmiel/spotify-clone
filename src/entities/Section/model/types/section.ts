export interface Section {
  id: string;
  type: SectionType;
  title: string;
  items: SectionItem[];
}

type SectionType = 'GenericSection' | 'RecentlyPlayedSection' | 'ShortsSection' | 'PreviewSection';

export interface SectionItem {
  id: string;
  type: SectionItemType;
  title: string;
  description?: string;
  image: Image;
  owner: Owner;
}

type SectionItemType = 'playlist' | 'podcast' | 'episode' | 'artist';

interface Image {
  sources: ImageSource[];
  extractedColors?: ExtractedColors;
}

interface ImageSource {
  url: string;
  width: string | number | null;
  height: string | number | null;
}

interface ExtractedColors {
  colorDark: ColorDark;
}

interface ColorDark {
  hex: string;
  isFallback: boolean;
}

interface Owner {
  type: OwnerType;
  name: string;
}

type OwnerType = 'User';
