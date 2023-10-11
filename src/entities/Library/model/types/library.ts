export interface ILibrary {
  id: string;
  userId: string;
  availableFilters: Filter[]; // for tabs
  availableSortOrders: SortOrder[]; // for dropdown
  pagingInfo: PagingInfo;
  totalCount: number;
  items: ILibraryItem[];
}

export interface ILibraryItem {
  id: string;
  type: LibraryItemType;
  addedAt: AddedAt;
  pinnable?: boolean;
  pinned?: boolean;
  name: string;
  count?: number;
  image?: Image;
  owner?: Owner;
}

type LibraryItemType = 'collection' | 'playlist' | 'artist';

interface Filter {
  id: string;
  name: string;
}

interface SortOrder {
  id: string;
  name: string;
}

interface PagingInfo {
  offset: number;
  limit: number;
}

interface AddedAt {
  isoString: string;
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
  width: number;
  height: number;
}

interface Owner {
  type: OwnerType;
  id: string;
  name: string;
}

type OwnerType = 'User' | 'Artist' | 'Spotify';
