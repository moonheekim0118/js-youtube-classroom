import { APIResult } from "@/types";
import { MAX_DATA_NUMBER, SERVER_ERROR_MESSAGE, TIMOUT_LIMIT } from "@/constants/index";
import parseAPIData from "@/utils/parseAPIData";

const controller = new AbortController();
const signal = controller.signal;

const getAPI = async (
  keyword: string,
  lastKey: string
): Promise<APIResult | void> => {
  try {
    const timer = setTimeout(() => controller.abort(), TIMOUT_LIMIT)
    const url = `${process.env.API_URL}?part=snippet&maxResults=${MAX_DATA_NUMBER}&
    q=${keyword}&key=${process.env.API_KEY}&pageToken=${lastKey}`;

    const response = await fetch(url,{signal});
    if (!response.ok) {
      throw SERVER_ERROR_MESSAGE;
    }
    const data = await response.json();
    const nextPage = data.nextPageToken;
    const dataSize = data.pageInfo.totalResults;
    clearTimeout(timer);
    return {
      datas: parseAPIData(data.items),
      lastKey: nextPage,
      size: dataSize,
    };
  } catch (error) {
    console.error(error);
    throw SERVER_ERROR_MESSAGE;
  }
};

export default getAPI;
