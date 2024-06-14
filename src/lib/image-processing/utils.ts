"server-only";

import sharp from "sharp";

type GetPlaceholderParams = {
  arrayBufferSource: ArrayBuffer;
  width: number;
  height: number;
};

export const generateLQIPPlaceholder: (
  params: GetPlaceholderParams
) => Promise<string> = async (params) => {
  const { arrayBufferSource, width, height } = params;

  const image = await sharp(arrayBufferSource)
    .resize({ width, height, fit: "cover" })
    .webp({
      quality: 40,
    })
    .toBuffer();

  return `data:image/webp;base64,${image.toString("base64")}`;
};
