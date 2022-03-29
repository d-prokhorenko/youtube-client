export interface Item {
  kind: string;
  etag: string;
  id: string;
  snippet: Snippet;
  statistics: Statistics;
}

interface Snippet {
  publishedAt: string;
  channelId: string;
  title: string;
  description: string;
  thumbnails: {
    default: Thumbnails;
    medium: Thumbnails;
    high: Thumbnails;
    standard: Thumbnails;
    maxres: Thumbnails;
  };
  channelTitle: string;
  tags: string[];
  categoryId: number;
  liveBroadcastContent: string;
  localized: {
    title: string;
    description: string;
  };
  defaultAudioLanguage: string;
}

interface Thumbnails {
  url: string;
  width: number;
  height: number;
}

interface Statistics {
  viewCount: number;
  likeCount: number;
  dislikeCount: number;
  favoriteCount: number;
  commentCount: number;
}
