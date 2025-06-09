export interface Bookmark {
  id: string;
  url: string;
  title: string;
  description: string;
  thumbnail: string;
}

export interface PatchNote {
  version: string;
  date: string;
  title: string;
  features: string[];
}
