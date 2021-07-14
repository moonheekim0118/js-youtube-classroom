
export interface ISnippet {
    publishedAt: string;
    title: string;
    channelTitle: string;
    channelId: string;
}

export interface IRawItem {
    id: { videoId: string };
    snippet: ISnippet;
}

export interface IItem {
    id: string;
    snippet: ISnippet;
}

export interface IItemDB {
    data: IItem;
    liked: boolean;
    watched: boolean;
}
  
export interface IAPIResult {
    datas: IItem[];
    lastKey: string;
    size: number;
}
  