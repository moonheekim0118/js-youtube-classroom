
export interface Snippet {
    publishedAt: string;
    title: string;
    channelTitle: string;
    channelId: string;
}

export interface RawItem {
    id: { videoId: string };
    snippet: Snippet;
}

export interface Item {
    id: string;
    snippet: Snippet;
}

export interface ItemDB {
    data: Item;
    liked: boolean;
    watched: boolean;
}
  
export interface APIResult {
    datas: Item[];
    lastKey: string;
    size: number;
}
  