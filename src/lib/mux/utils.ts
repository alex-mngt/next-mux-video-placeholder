"server-only";

import { generateLQIPPlaceholder } from "@/lib/image-processing/utils";
import { wait } from "../utils";

const getMuxThumbnail = async (playbackId: string): Promise<ArrayBuffer> => {
  const url = `https://image.mux.com/${playbackId}/thumbnail.png?time=0`;

  const response = await fetch(url);

  if (response.status === 403) {
    throw new Error(`Error fetching thumbnail. 403: Forbidden`);
  } else if (response.status >= 400) {
    throw new Error(
      `Error fetching thumbnail. ${response.status}: ${response.statusText}`
    );
  }

  return await response.arrayBuffer();
};

type GetPlaceholderParams = {
  playbackId: string;
  aspectRatioWidth: number;
  aspectRatioHeight: number;
  placeholderSize?: number;
  method: "LQUIP";
};

export const getMuxPlaceholder: (
  params: GetPlaceholderParams
) => Promise<string> = async (params) => {
  const {
    playbackId,
    aspectRatioWidth,
    aspectRatioHeight,
    placeholderSize = 16,
  } = params;

  const arrayBufferThumbnail = await getMuxThumbnail(playbackId);

  await wait(5000);

  return await generateLQIPPlaceholder({
    arrayBufferSource: arrayBufferThumbnail,
    width: placeholderSize * aspectRatioWidth,
    height: placeholderSize * aspectRatioHeight,
  });
};
