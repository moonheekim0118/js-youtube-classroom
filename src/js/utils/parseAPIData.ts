import { IRawItem, IItem } from "@/types/index";

const parseAPIData = (items: IRawItem[]): IItem[] => {
  const parsedData = items.map((item) => {
    return { id: item.id.videoId, snippet: item.snippet };
  });
  return parsedData;
};

export default parseAPIData;
