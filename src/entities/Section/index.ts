export interface Section {
  id: string;
  info: SectionInfo;
  items: SectionItem[];
}

interface SectionInfo {
  type: SectionType;
  title?: string;
}

type SectionType = 'HomeGenericSectionData' | 'HomeRecentlyPlayedSectionData' | 'HomeShortsSectionData';

interface SectionItem {
  id: string;
  type: SectionItemType;
  title: string;
  description: string;
  images: Image[];
  owner: Owner;
}

type SectionItemType = 'playlist' | 'podcast' | 'episode' | 'artist';

interface Image {
  sources: ImageSource[];
  extractedColors: ExtractedColors;
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
